/* ==========================================================================
 *  assets/js/app.js  —— 页面渲染引擎
 * ==========================================================================
 *  一般不需要改这个文件。
 *  想改内容 → 改 data/site.js、data/publications.js、data/awards.js
 *  想改配色 / 字号 → 改 assets/css/style.css
 *  想改导航菜单 → 改下面 navItems() 里的数组
 * ========================================================================== */

(function () {
  'use strict';

  var SITE = window.RESUME_SITE || {};
  var PUBS = window.RESUME_PUBLICATIONS || { groups: [] };
  var AW = window.RESUME_AWARDS || {};
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var LANG_KEY = 'pengweili-lang';

  /* ---------------------------------------------------------------- 语言 */

  var lang = detectLang();

  function detectLang() {
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'zh' || q === 'en') return q;
      var saved = window.localStorage.getItem(LANG_KEY);
      if (saved === 'zh' || saved === 'en') return saved;
    } catch (e) { /* 隐私模式下 localStorage 可能不可用 */ }
    return 'zh';
  }

  var ZH = 'zh';

  function t(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return '';
    if (v[lang]) return v[lang];
    return v.zh || v.en || '';
  }

  var T = function (zh, en) { return lang === ZH ? zh : en; };

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** 极简行内标记：**粗体**、*斜体* */
  function md(s) {
    var out = esc(s);
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    return out;
  }

  /* ---------------------------------------------------------------- 通用 */

  var PENDING_TITLE = function () { return T('（题目待补充）', '(title to be added)'); };

  function navItems() {
    return [
      ['home', T('首页', 'Home'), 'index.html'],
      ['publications', T('论文', 'Publications'), 'publications.html'],
      ['awards', T('荣誉', 'Awards'), 'awards.html'],
      ['activities', T('经历', 'Activities'), 'activities.html'],
      ['cv', T('简历', 'CV'), 'cv.html']
    ];
  }

  var PAGE_TITLE = {
    home: { zh: '李鹏伟 | 北京大学环境科学与工程学院', en: 'Pengwei Li | Peking University' },
    publications: { zh: '论文 | 李鹏伟', en: 'Publications | Pengwei Li' },
    awards: { zh: '荣誉奖励 | 李鹏伟', en: 'Awards & Honors | Pengwei Li' },
    activities: { zh: '经历 | 李鹏伟', en: 'Activities | Pengwei Li' },
    cv: { zh: '简历 | 李鹏伟', en: 'Curriculum Vitae | Pengwei Li' },
    notfound: { zh: '页面不存在 | 李鹏伟', en: 'Page not found | Pengwei Li' }
  };

  function headerHTML() {
    var p = SITE.person || {};
    var alt = lang === ZH ? (p.latinName || '') : '李鹏伟';
    var links = navItems().map(function (it) {
      var cur = it[0] === PAGE ? ' aria-current="page"' : '';
      return '<a href="' + esc(it[2]) + '"' + cur + '>' + esc(it[1]) + '</a>';
    }).join('');

    return '<header class="site-header"><div class="header-inner">' +
      '<a class="brand" href="index.html">' + esc(t(p.name)) +
        (alt ? ' <span>' + esc(alt) + '</span>' : '') +
      '</a>' +
      '<nav class="nav" aria-label="' + T('主导航', 'Main navigation') + '">' + links + '</nav>' +
      '<button class="lang-btn" id="langBtn" type="button" aria-label="' +
        T('切换到英文', 'Switch to Chinese') + '">' + T('EN', '中文') + '</button>' +
      '</div></header>';
  }

  function footerHTML() {
    var p = SITE.person || {};
    var year = new Date().getFullYear();
    var updated = SITE.site && SITE.site.updated ? t(SITE.site.updated) : '';
    return '<footer class="site-footer"><div class="footer-inner">' +
      '<div>© ' + year + ' ' + esc(t(p.name)) + ' · ' + T('保留所有权利', 'All rights reserved') + '</div>' +
      (updated ? '<div>' + T('最后更新', 'Last updated') + '：' + esc(updated) + '</div>' : '') +
      '</div></footer>';
  }

  function section(title, lead, inner) {
    return '<section class="section">' +
      '<h2 class="section__title">' + esc(t(title)) + '</h2>' +
      (lead && t(lead) ? '<p class="section__lead">' + md(t(lead)) + '</p>' : '') +
      inner +
      '</section>';
  }

  function moreLink(href, label) {
    return '<p class="more"><a href="' + esc(href) + '">' + esc(t(label)) + '</a></p>';
  }

  /** 用于按时间倒序排列：取 zh 形式的 "2026.08" 作排序键 */
  function dateKey(d) {
    if (!d) return '';
    if (typeof d === 'string') return d;
    return d.zh || d.en || '';
  }

  function byDateDesc(a, b) {
    return dateKey(b.date).localeCompare(dateKey(a.date));
  }

  function groupTitle(g) {
    return '<h3 class="group-title">' + esc(t(g)) + '</h3>';
  }

  /* ---------------------------------------------------------------- 组件 */

  function heroHTML() {
    var p = SITE.person || {};
    var alt = lang === ZH ? (p.latinName || '') : '李鹏伟';

    var links = (p.links || []).map(function (l) {
      var ext = /^https?:/i.test(l.href) ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + esc(l.href) + '"' + ext + '>' + esc(t(l.text) || t(l.label)) + '</a>';
    }).join('');

    var facts = (p.facts || []).map(function (f) {
      return '<span class="fact">' + esc(t(f.label)) + ' <b>' + esc(t(f.value)) + '</b></span>';
    }).join('');

    return '<section class="hero">' +
      '<img class="hero__photo" src="' + esc(p.photo || 'assets/img/avatar.jpg') + '"' +
        ' srcset="' + esc((p.photo || 'assets/img/avatar.jpg').replace('.jpg', '@2x.jpg')) + ' 2x"' +
        ' width="132" height="132" alt="' + esc(t(p.name)) + '">' +
      '<div>' +
        '<h1 class="hero__name">' + esc(t(p.name)) +
          (alt ? '<small>' + esc(alt) + '</small>' : '') + '</h1>' +
        '<p class="hero__headline">' + esc(t(p.headline)) + '</p>' +
        '<p class="hero__subhead">' + esc(t(p.subhead)) + '</p>' +
        '<p class="hero__advisor">' + esc(t(p.advisor)) + '</p>' +
        (links ? '<div class="hero__links">' + links + '</div>' : '') +
        (facts ? '<div class="facts">' + facts + '</div>' : '') +
      '</div></section>';
  }

  function newsHTML(items) {
    if (!items || !items.length) return '';
    return '<ul class="news">' + items.slice().sort(byDateDesc).map(function (n) {
      return '<li><div class="news__date">' + esc(t(n.date)) + '</div>' +
        '<div>' + md(t(n.text)) + '</div></li>';
    }).join('') + '</ul>';
  }

  function proseHTML(paras) {
    if (!paras || !paras.length) return '';
    return '<div class="prose">' + paras.map(function (p) {
      return '<p>' + md(t(p)) + '</p>';
    }).join('') + '</div>';
  }

  function interestsHTML(list) {
    return (list || []).map(function (i) {
      var tags = (i.tags || []).map(function (x) {
        return '<span class="tag">' + esc(x) + '</span>';
      }).join('');
      return '<article class="interest">' +
        '<div class="interest__no">' + esc(i.no || '') + '</div>' +
        '<div><h3 class="interest__title">' + esc(t(i.title)) + '</h3>' +
        '<p class="interest__desc">' + md(t(i.desc)) + '</p>' +
        (tags ? '<div class="tags">' + tags + '</div>' : '') +
        '</div></article>';
    }).join('');
  }

  function skillsHTML(list) {
    if (!list || !list.length) return '';
    return '<div style="margin-top:26px">' + groupTitle({ zh: '方法 / 技能', en: 'Methods & Skills' }) +
      plainList(list) + '</div>';
  }

  function educationHTML(list) {
    return (list || []).map(function (e) {
      return '<div class="entry">' +
        '<div class="entry__time">' + esc(t(e.period)) + '</div>' +
        '<div><h3 class="entry__title">' + esc(t(e.school)) + '</h3>' +
        '<p class="entry__meta">' + md(t(e.detail)) + '</p>' +
        (t(e.note) ? '<p class="entry__note">' + md(t(e.note)) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  function pubHTML(p) {
    var title = t(p.title);
    var head = '';

    if (title && !p.pendingTitle) {
      var href = p.doi
        ? 'https://doi.org/' + p.doi
        : 'https://scholar.google.com/scholar?q=' + encodeURIComponent(title);
      head = '<h3 class="pub__title"><a href="' + esc(href) + '" target="_blank" rel="noopener">' +
        esc(title) + '</a></h3>';
    } else {
      head = '<h3 class="pub__title is-pending">' + esc(PENDING_TITLE()) + '</h3>';
    }

    var badges = [];
    if (p.role) badges.push('<span class="badge">' + esc(t(p.role)) + '</span>');
    if (p.status) badges.push('<span class="badge badge--plain">' + esc(t(p.status)) + '</span>');
    (p.tags || []).forEach(function (x) {
      badges.push('<span class="badge badge--plain">' + esc(x) + '</span>');
    });

    var venue = t(p.venue);
    var cite = t(p.cite);
    var venueLine = '';
    if (venue) {
      venueLine = '<p class="pub__venue"><em>' + esc(venue) + '</em>' +
        (cite ? ', ' + esc(cite) : '') + '</p>';
    } else if (cite) {
      venueLine = '<p class="pub__venue">' + esc(cite) + '</p>';
    }

    var summary = t(p.summary);

    return '<article class="pub">' +
      '<div class="pub__head">' +
        (p.featured ? '<span class="pub__star" aria-hidden="true">★</span>' : '') +
        '<span class="pub__date">' + esc(t(p.date)) + '</span>' +
      '</div>' +
      head +
      (p.authors ? '<p class="pub__authors">' + esc(t(p.authors)) + '</p>' : '') +
      venueLine +
      (badges.length ? '<div class="badges">' + badges.join('') + '</div>' : '') +
      (summary ? '<p class="pub__summary">' + md(summary) + '</p>' : '') +
      '</article>';
  }

  function pubsGroupsHTML(groups) {
    return (groups || []).map(function (g) {
      if (!g.items || !g.items.length) return '';
      return groupTitle(g.title) + g.items.map(pubHTML).join('');
    }).join('');
  }

  function projectsHTML(list) {
    return (list || []).map(function (pr) {
      return '<div class="project">' +
        '<h3 class="project__title">' + md(t(pr.title)) + '</h3>' +
        '<p class="project__meta">' +
          '<span>' + esc(t(pr.period)) + '</span>' +
          '<span>' + esc(t(pr.role)) + '</span>' +
          '<span>' + esc(t(pr.level)) + '</span>' +
        '</p></div>';
    }).join('');
  }

  function awardRowHTML(a) {
    return '<div class="award">' +
      '<div class="award__date">' + esc(t(a.date)) + '</div>' +
      '<div>' + md(t(a.text)) + '</div>' +
      '<div class="award__org">' + esc(t(a.org) || '') + '</div>' +
      '</div>';
  }

  function awardsGroupsHTML(groups) {
    return (groups || []).map(function (g) {
      if (!g.items || !g.items.length) return '';
      return groupTitle(g.title) + g.items.map(awardRowHTML).join('');
    }).join('');
  }

  function serviceHTML(list) {
    return (list || []).map(function (s) {
      var detail = t(s.detail);
      return '<div class="entry">' +
        '<div class="entry__time">' + esc(t(s.period)) + '</div>' +
        '<div><h3 class="entry__title">' + esc(t(s.role)) + '</h3>' +
        '<p class="entry__meta">' + esc(t(s.org)) + '</p>' +
        (detail ? '<p class="entry__detail">' + md(detail) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  function teachingHTML(list) {
    return (list || []).map(function (s) {
      return '<div class="entry">' +
        '<div class="entry__time">' + esc(t(s.period)) + '</div>' +
        '<div><h3 class="entry__title">' + esc(t(s.title)) + '</h3>' +
        (t(s.note) ? '<p class="entry__note">' + md(t(s.note)) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  function plainList(items) {
    if (!items || !items.length) return '';
    return '<ul class="plain-list">' + items.map(function (x) {
      return '<li>' + md(t(x)) + '</li>';
    }).join('') + '</ul>';
  }

  /* ---------------------------------------------------------------- 页面 */

  function renderHome() {
    var featured = [];
    (PUBS.groups || []).forEach(function (g) {
      (g.items || []).forEach(function (it) { if (it.featured) featured.push(it); });
    });

    var homeAwards = [];
    (AW.awardGroups || []).forEach(function (g) {
      (g.items || []).forEach(function (a) { if (a.home) homeAwards.push(a); });
    });
    homeAwards.sort(byDateDesc);

    return {
      html: heroHTML() +
        section({ zh: '最新动态', en: 'News' }, null, newsHTML(SITE.news)) +
        section({ zh: '简介', en: 'About' }, null, proseHTML(SITE.bio)) +
        section({ zh: '研究方向', en: 'Research Interests' }, null,
          interestsHTML(SITE.interests) + skillsHTML(SITE.skills)) +
        section({ zh: '教育背景', en: 'Education' }, null, educationHTML(SITE.education)) +
        section({ zh: '代表性论文', en: 'Selected Publications' }, PUBS.intro,
          (featured.length ? featured.map(pubHTML).join('') : pubsGroupsHTML(PUBS.groups)) +
          moreLink('publications.html', { zh: '查看全部论文', en: 'All publications' })) +
        section({ zh: '科研项目', en: 'Research Grants' }, null,
          projectsHTML(AW.projects)) +
        section({ zh: '重点荣誉', en: 'Selected Honors' }, null,
          (homeAwards.length ? homeAwards.map(awardRowHTML).join('') : awardsGroupsHTML(AW.awardGroups)) +
          moreLink('awards.html', { zh: '查看全部荣誉', en: 'All awards' })) +
        section({ zh: '学生工作', en: 'Service & Leadership' }, null,
          serviceHTML(AW.service) +
          moreLink('activities.html', { zh: '查看全部经历', en: 'All activities' }))
    };
  }

  function renderPublications() {
    return {
      html: '<div class="page-head">' +
          '<h1 class="page-head__title">' + T('发表论文', 'Publications') + '</h1>' +
          (PUBS.intro ? '<p class="page-head__lead">' + md(t(PUBS.intro)) + '</p>' : '') +
        '</div>' +
        section({ zh: '论文列表', en: 'Paper List' }, null, pubsGroupsHTML(PUBS.groups)) +
        '<p class="note">' + T(
          '点击论文标题可跳转到 DOI 或 Google Scholar 检索结果。',
          'Clicking a title opens its DOI or a Google Scholar search.'
        ) + '</p>'
    };
  }

  function renderAwards() {
    return {
      html: '<div class="page-head">' +
          '<h1 class="page-head__title">' + T('荣誉奖励', 'Awards & Honors') + '</h1>' +
          (AW.intro ? '<p class="page-head__lead">' + md(t(AW.intro)) + '</p>' : '') +
        '</div>' +
        section({ zh: '科研项目', en: 'Research Grants' }, null, projectsHTML(AW.projects)) +
        section({ zh: '荣誉奖励', en: 'Honors & Awards' }, null, awardsGroupsHTML(AW.awardGroups))
    };
  }

  function renderActivities() {
    return {
      html: '<div class="page-head">' +
          '<h1 class="page-head__title">' + T('经历', 'Activities') + '</h1>' +
          '<p class="page-head__lead">' + T(
            '学生工作、助教、学术活动与志愿服务。',
            'Student leadership, teaching assistance, academic activities and volunteering.'
          ) + '</p></div>' +
        section({ zh: '学生工作', en: 'Service & Leadership' }, null, serviceHTML(AW.service)) +
        section({ zh: '助教', en: 'Teaching Assistant' }, null, teachingHTML(AW.teaching)) +
        section({ zh: '学术活动', en: 'Academic Activities' }, null, plainList(AW.academic)) +
        section({ zh: '志愿服务', en: 'Volunteering' }, null, plainList(AW.volunteering))
    };
  }

  function renderCV() {    var p = SITE.person || {};
    var contact = [p.email];
    return {
      html: '<div class="cv-head">' +
          '<h1>' + esc(t(p.name)) + ' <span style="font-size:16px;font-weight:400;color:var(--text-3)">' +
            esc(lang === ZH ? (p.latinName || '') : '李鹏伟') + '</span></h1>' +
          '<p>' + esc(t(p.headline)) + '</p>' +
          '<p style="margin-top:2px">' + esc(t(p.subhead)) + '</p>' +
          '<div class="cv-contact">' +
            '<span>' + esc(p.email || '') + '</span>' +
            '<span>' + T('北京大学环境科学与工程学院', 'College of Environmental Sciences and Engineering, PKU') + '</span>' +
          '</div>' +
        '</div>' +
        '<p class="print-hint">' + T(
          '按 Ctrl+P（Mac 为 ⌘+P）即可导出为 PDF 简历。',
          'Press Ctrl+P (⌘+P on Mac) to export this page as a PDF.'
        ) + '</p>' +
        section({ zh: '教育背景', en: 'Education' }, null, educationHTML(SITE.education)) +
        section({ zh: '研究方向', en: 'Research Interests' }, null, interestsHTML(SITE.interests)) +
        section({ zh: '科研项目', en: 'Research Grants' }, null, projectsHTML(AW.projects)) +
        section({ zh: '发表论文', en: 'Publications' }, null, pubsGroupsHTML(PUBS.groups)) +
        section({ zh: '荣誉奖励', en: 'Honors & Awards' }, null, awardsGroupsHTML(AW.awardGroups)) +
        section({ zh: '学生工作', en: 'Service & Leadership' }, null, serviceHTML(AW.service)) +
        section({ zh: '助教与志愿服务', en: 'Teaching & Volunteering' }, null,
          teachingHTML(AW.teaching) + plainList(AW.volunteering))
    };
  }

  function renderNotFound() {
    return {
      html: '<div class="page-head">' +
          '<h1 class="page-head__title">404</h1>' +
          '<p class="page-head__lead">' + T(
            '这个页面不存在。可能是链接写错了，或者内容已经被移动。',
            'This page does not exist. The link may be wrong, or the page has moved.'
          ) + '</p></div>' +
        section({ zh: '你可以去', en: 'You can go to' }, null,
          '<p><a href="index.html">' + T('返回首页', 'Back to home') + '</a></p>')
    };
  }

  var RENDERERS = {
    home: renderHome,
    publications: renderPublications,
    awards: renderAwards,
    activities: renderActivities,
    cv: renderCV,
    notfound: renderNotFound
  };

  /* ---------------------------------------------------------------- 挂载 */

  function render() {
    var fn = RENDERERS[PAGE] || renderHome;
    var out = fn();
    var app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = headerHTML() + '<main id="main" class="wrap">' + out.html + '</main>' + footerHTML();

    document.documentElement.setAttribute('lang', lang === ZH ? 'zh-CN' : 'en');
    var titles = PAGE_TITLE[PAGE] || PAGE_TITLE.home;
    document.title = titles[lang] || titles.zh;

    var btn = document.getElementById('langBtn');
    if (btn) {
      btn.addEventListener('click', function () {
        lang = lang === ZH ? 'en' : 'zh';
        try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) {}
        try {
          var url = new URL(window.location.href);
          url.searchParams.set('lang', lang);
          window.history.replaceState({}, '', url);
        } catch (e) {}
        render();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
