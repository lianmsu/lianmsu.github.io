/* ==========================================================================
 *  data/awards.js  —— 科研项目、荣誉奖励、学生工作、助教与志愿服务
 * ==========================================================================
 *
 *  【加一条荣誉】在 awards.groups 里对应等级分组（国家级 / 省级 / 校级）的
 *   items 数组最前面加一段：
 *
 *      { date: "2027.03", text: { zh: "荣誉名称", en: "Award name" } },
 *
 *  【加一段学生工作】照抄 service 里的一段，改掉内容即可。
 * ========================================================================== */

window.RESUME_AWARDS = {

  /* ---------- 科研项目 ---------- */
  projects: [
    {
      period: { zh: "2026.01 – 2029.12", en: "Jan 2026 – Dec 2029" },
      title: {
        zh: "国家自然科学基金青年学生基础研究项目（博士研究生）",
        en: "NSFC Basic Research Program for Young Students (Ph.D. track)"
      },
      role: { zh: "主持", en: "Principal Investigator" },
      level: { zh: "国家级", en: "National" }
    },
    {
      period: { zh: "2026", en: "2026" },
      title: {
        zh: "中国科协青年科技人才培育工程博士生专项计划",
        en: "CAST Young Science Talent Cultivation Program (Ph.D. track)"
      },
      role: { zh: "入选", en: "Selected" },
      level: { zh: "国家级", en: "National" }
    }
  ],

  /* ---------- 荣誉奖励 ---------- */
  intro: {
    zh: "本科以来共获国家级、省级、校级荣誉奖励 10 项。",
    en: "Ten honors and awards at national, provincial and university levels since undergraduate study."
  },

  awardGroups: [
    {
      key: "national",
      title: { zh: "国家级", en: "National" },
      items: [
        { date: { zh: "2026.09", en: "Sep 2026" }, text: { zh: "国家奖学金", en: "National Scholarship" }, org: { zh: "北京大学", en: "Peking University" }, home: true }
      ]
    },
    {
      key: "national",
      title: { zh: "国家级", en: "National" },
      items: [
        { date: { zh: "2023.09", en: "Sep 2023" }, text: { zh: "国家奖学金", en: "National Scholarship" }, org: { zh: "南京大学", en: "Nanjing University" }, home: true }
      ]
    },
    {
      key: "provincial",
      title: { zh: "省级 / 市级", en: "Provincial / Municipal" },
      items: [
        { date: { zh: "2026.03", en: "Mar 2026" }, text: { zh: "北京市三好学生", en: "Beijing Merit Student" }, org: { zh: "北京市", en: "Beijing" }, home: true },
        { date: { zh: "2024.04", en: "Apr 2024" }, text: { zh: "江苏省优秀毕业生", en: "Jiangsu Outstanding Graduate" }, org: { zh: "江苏省", en: "Jiangsu Province" } },
        { date: { zh: "2023.05", en: "May 2023" }, text: { zh: "江苏省三好学生", en: "Jiangsu Merit Student" }, org: { zh: "江苏省", en: "Jiangsu Province" } }
      ]
    },
    {
      key: "university",
      title: { zh: "校级", en: "University" },
      items: [
        { date: { zh: "2025.12", en: "Dec 2025" }, text: { zh: "北京大学五四奖学金", en: "PKU May Fourth Scholarship" }, org: { zh: "北京大学", en: "Peking University" }, home: true },
        { date: { zh: "2025.12", en: "Dec 2025" }, text: { zh: "北京大学三好学生标兵", en: "PKU Merit Student (Model)" }, org: { zh: "北京大学", en: "Peking University" }, home: true },
        { date: { zh: "2025.12", en: "Dec 2025" }, text: { zh: "北京大学学术创新奖", en: "PKU Academic Innovation Award" }, org: { zh: "北京大学", en: "Peking University" }, home: true },
        { date: { zh: "2025.06", en: "Jun 2025" }, text: { zh: "北京大学校长奖学金", en: "PKU President Scholarship" }, org: { zh: "北京大学", en: "Peking University" }, home: true },
        { date: { zh: "2023.12", en: "Dec 2023" }, text: { zh: "南京大学栋梁奖学金特等奖", en: "NJU Dongliang Scholarship (Grand Prize)" }, org: { zh: "南京大学", en: "Nanjing University" } },
        { date: { zh: "2023.10", en: "Oct 2023" }, text: { zh: "南京大学学生励志模范", en: "NJU Inspirational Role Model" }, org: { zh: "南京大学", en: "Nanjing University" } }
      ]
    }
  ],

  /* ---------- 学生工作 ---------- */
  service: [
    {
      period: { zh: "2025.07 – 2026.09", en: "Jul 2025 – Sep 2026" },
      org: { zh: "北京大学环境工程系研究生第二党支部", en: "Graduate Party Branch II, Dept. of Environmental Engineering, PKU" },
      role: { zh: "党支部书记", en: "Branch Secretary" },
      highlight: true,
      detail: {
        zh: "以「红心润碧水，科创砺先锋」为主题，获批北京大学「先锋计划」学生党支部主题教育实践重点项目；围绕「懂水、治水、用水、节水」四个维度开展理论学习、参观访问、学科座谈、文化观影等活动 20 余次，形成调研报告 2 篇，支部党员以第一作者发表论文 5 篇，活动被北大新闻网、学院官微报道 10 余次，覆盖师生千余人次。",
        en: "Led the 'Scarlet Heart Nurturing Clear Waters, Sci-Tech Sharpening Pioneers' program, which was approved as a PKU 'Pioneer Plan' key project. Organised 20+ activities along four dimensions (understanding, treating, using and conserving water), produced 2 survey reports and supported 5 first-author papers from branch members; coverage by PKU News and the college's official account reached over a thousand people."
      }
    },
    {
      period: { zh: "2025 – 2026", en: "2025 – 2026" },
      org: { zh: "环境科学与工程学院", en: "College of Environmental Sciences and Engineering" },
      role: { zh: "2024 级本科生入党积极分子培养联系人", en: "Liaison for 2024-cohort Party applicants" },
      detail: { zh: "", en: "" }
    },
    {
      period: { zh: "2024.09 – 2025.07", en: "Sep 2024 – Jul 2025" },
      org: { zh: "北京大学环境工程系研究生党支部", en: "Graduate Party Branch, Dept. of Environmental Engineering, PKU" },
      role: { zh: "组织委员", en: "Organisation Committee Member" },
      detail: { zh: "", en: "" }
    },
    {
      period: { zh: "2021.09 – 2024.06", en: "Sep 2021 – Jun 2024" },
      org: { zh: "南京大学环境学院", en: "School of the Environment, Nanjing University" },
      role: { zh: "2020 级本科生年级长", en: "Grade Leader, 2020 cohort" },
      detail: { zh: "", en: "" }
    }
  ],

  /* ---------- 助教 ---------- */
  teaching: [
    {
      period: { zh: "北京大学", en: "Peking University" },
      title: { zh: "《环境科学与工程前沿》课程助教", en: "Teaching Assistant, Frontiers of Environmental Science and Engineering" },
      note: { zh: "授课教师：倪晋仁 院士；制作专家海报 10+ 次，促进学术交流", en: "Instructor: Prof. Jinren Ni; produced 10+ expert posters to support the seminar series" }
    }
  ],

  /* ---------- 学术活动 ---------- */
  academic: [
    { zh: "青年学生基础科学研究年会", en: "Annual Meeting on Basic Research for Young Students" },
    { zh: "新基石 502 论坛", en: "New Cornerstone 502 Forum" }
  ],

  /* ---------- 志愿服务 ---------- */
  volunteering: [
    { zh: "北京大学图书馆志愿服务", en: "PKU Library volunteer" },
    { zh: "全国环境博士后论坛 志愿者", en: "National Environmental Postdoc Forum volunteer" },
    { zh: "唐孝炎环境科学创新奖学金颁奖仪式 志愿者", en: "Tang Xiaoyan Environmental Science Innovation Scholarship ceremony volunteer" },
    { zh: "挑战杯等学术竞赛志愿服务", en: "Challenge Cup and other academic competition volunteer" },
    { zh: "学院冬季扫雪、新年晚会场务、绿色燕园文化节", en: "College winter snow clearing, New Year gala logistics, Green Campus Festival" },
    { zh: "北京大学五四青春诗会、2026 年开学典礼 志愿者", en: "PKU May Fourth Youth Poetry Gala and 2026 Opening Ceremony volunteer" },
    { zh: "校园讲解、学习经验分享", en: "Campus tours and study-experience sharing" }
  ]
};
