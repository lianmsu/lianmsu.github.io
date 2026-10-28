/* ==========================================================================
 *  data/site.js  —— 个人信息、简介、研究方向、教育背景、最新动态
 * ==========================================================================
 *
 *  【怎么更新】直接修改下面用中文写的文字，保存后刷新网页即可。
 *
 *  【中英文怎么写】
 *      { zh: "中文内容", en: "English version" }
 *    如果这句中英文完全一样（比如 "2026.01"），直接写字符串：
 *      "2026.01"
 *
 *  【加一条动态】在 news 数组【最前面】加一段：
 *      { date: { zh: "2026.11", en: "Nov 2026" },
 *        text: { zh: "……", en: "……" } },
 *    注意每段结尾的英文逗号。
 *
 *  【加一条教育经历】照抄 education 里的一段，改掉内容即可。
 * ========================================================================== */

window.RESUME_SITE = {

  /* ---------- 网站本身 ---------- */
  site: {
    url: "https://lianmsu.github.io",   // 你的 GitHub Pages 网址（换仓库名时要改）
    updated: { zh: "2026 年 10 月", en: "October 2026" }
  },

  /* ---------- 个人基本信息 ---------- */
  person: {
    name: { zh: "李鹏伟", en: "Pengwei Li" },
    latinName: "Pengwei Li",

    // 头像：替换 assets/img/avatar.jpg 即可换成新照片（正方形最好）
    photo: "assets/img/avatar.jpg",

    email: "pengweili@stu.pku.edu.cn",

    // 姓名下面的一行大标题、一行研究方向
    headline: {
      zh: "北京大学 · 环境科学与工程学院 · 环境工程 博士研究生",
      en: "Ph.D. Student in Environmental Engineering, Peking University"
    },
    subhead: {
      zh: "环境病毒组学 · 微生物防御系统 · 病毒—宿主共进化",
      en: "Environmental microbial ecology · Viromics · Microbial Defense Systems · Virus–Host Coevolution"
    },
    advisor: {
      zh: "导师：倪晋仁 院士 · 2024 级直博生",
      en: "Advisor: Prof. Jinren Ni (CAS Academician) · Direct-entry Ph.D. since 2024"
    },

    // 首页右侧的一排小标签；想删就整行删掉
    facts: [
      { label: { zh: "籍贯", en: "Hometown" }, value: { zh: "山西 · 万荣", en: "Wanrong, Shanxi" } },
      { label: { zh: "政治面貌", en: "Political status" }, value: { zh: "中共党员", en: "CPC Member" } }
    ],

    // 姓名下方的一排链接
    links: [
      { label: { zh: "邮箱", en: "Email" }, href: "mailto:pengweili@stu.pku.edu.cn", text: "pengweili@stu.pku.edu.cn" },
      { label: { zh: "学院", en: "College" }, href: "https://cese.pku.edu.cn/", text: { zh: "学院主页", en: "College website" } },
      { label: { zh: "学校", en: "University" }, href: "https://www.pku.edu.cn/", text: { zh: "北京大学", en: "Peking University" } },
      { label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/lianmsu", text: "github.com/lianmsu" }
    ]
  },

  /* ---------- 最新动态（从新到旧） ---------- */
  news: [
    {
      date: { zh: "2026.08", en: "Aug 2026" },
      text: {
        zh: "两项独立一作工作以预印本形式上线 bioRxiv：ESKAPE 病原菌病毒组的功能谱与耐药传播限制机制，以及基于 CRISPR 图谱的粘细菌噬菌体全球分布。",
        en: "Two first-author preprints are now on bioRxiv: functional profiling of ESKAPE viromes and CRISPR-guided mapping of myxobacterial phages."
      }
    },
    {
      date: { zh: "2026.07", en: "Jul 2026" },
      text: {
        zh: "合作论文发表于 *Nature Communications*（第三作者）。",
        en: "A collaborative paper was published in *Nature Communications* (third author)."
      }
    }
  ],

  /* ---------- 简介 ---------- */
  bio: [
    {
      zh: "我是北京大学环境科学与工程学院环境工程专业 2024 级直博生，师从倪晋仁院士。我的研究围绕一个核心问题展开：在受人类活动扰动最少的**地下水**与**冰川补给河流**等生态系统中，细菌与噬菌体如何长期共进化？这套持续了数十亿年的「军备竞赛」，又如何塑造了抗生素抗性基因的传播格局？",
      en: "I am a direct-entry Ph.D. student (2024) in Environmental Engineering at Peking University, advised by Prof. Jinren Ni. My research asks one central question: in ecosystems least disturbed by humans — **groundwater** and **glacier-fed rivers** — how do bacteria and phages co-evolve over billions of years, and how does this arms race shape the spread of antibiotic resistance genes?"
    },
    {
      zh: "我以独立第一作者身份在 *Nature Communications*、*Chemical Engineering Journal*、*Journal of Hazardous Materials* 等期刊发表论文 3 篇，另以第一或合作作者身份累计发表 7 篇；2 篇独立一作论文在审并已发布预印本。我主持一项国家自然科学基金青年学生基础研究项目，并入选中国科协青年科技人才培育工程博士生专项计划。",
      en: "As sole first author I have published in *Nature Communications*, *Chemical Engineering Journal* and *Journal of Hazardous Materials*, with 7 papers in total as first or co-author. Two more are under review with preprints available. I lead an NSFC Basic Research Program for Young Students and have been selected for the CAST Young Science Talent Cultivation Program (Ph.D. track)."
    },
    {
      zh: "我的长期目标，是把病毒—宿主互作的基础发现转化为可落地的环境生物技术——用噬菌体精准靶向耐药病原菌，并把抗性基因的风险评估从「看丰度」推进到「看风险」。",
      en: "My long-term goal is to turn fundamental virus–host findings into deployable environmental biotechnology: phages that precisely target resistant pathogens, and antibiotic resistance risk assessment that moves beyond abundance to actual risk."
    }
  ],

  /* ---------- 研究方向 ---------- */
  interests: [
    {
      no: "01",
      title: { zh: "环境微生物的抗病毒防御组", en: "Antiviral defensomes of environmental microbes" },
      desc: {
        zh: "基于全国地下水宏基因组数据构建原核生物防御组，揭示地下水与冰川—河流梯度中独特的病毒—宿主互作特征，填补了环境微生物免疫研究的空白。",
        en: "Building prokaryotic defensomes from nationwide groundwater metagenomes to reveal virus–host interactions unique to groundwater and glacier-to-river gradients — filling a gap in environmental microbial immunity research."
      },
      tags: ["groundwater", "glacier-to-river", "defense systems", "metagenomics"]
    },
    {
      no: "02",
      title: { zh: "防御系统的多效性", en: "Pleiotropy of defense systems" },
      desc: {
        zh: "探究抗病毒防御系统与抗生素耐药之间的耦合关系，阐明污染物胁迫下抗性组（resistome）的演替规律与指示基因，为抗性风险分类评估提供依据。",
        en: "Dissecting how antiviral defense systems couple with antibiotic resistance, mapping resistome succession under pollutant stress and identifying indicator genes for tiered risk assessment."
      },
      tags: ["antibiotic resistance", "ARGs", "activated sludge", "co-selection"]
    },
    {
      no: "03",
      title: { zh: "以防御系统发现新病毒", en: "Defense-guided discovery of novel phages" },
      desc: {
        zh: "利用 CRISPR 间隔序列与抗防御基因引导病毒发现，系统刻画 ESKAPE 病原菌与粘细菌的病毒组，探索噬菌体疗法与生物防治的应用潜力。",
        en: "Using CRISPR spacers and anti-defense genes to guide virus discovery, systematically profiling ESKAPE pathogens and myxobacteria viromes for phage therapy and biocontrol."
      },
      tags: ["ESKAPE", "Myxobacteria", "CRISPR-Cas", "phage therapy"]
    }
  ],

  /* ---------- 方法 / 技能 ---------- */
  skills: [
    { zh: "宏基因组、宏转录组生物信息学分析", en: "Metagenomic & metatranscriptomic bioinformatics" },
    { zh: "湿实验验证（分子生物学、微生物培养）", en: "Wet-lab validation (molecular biology, microbial cultivation)" },
    { zh: "病毒组挖掘、CRISPR 宿主—病毒关联分析", en: "Virome mining, CRISPR-based host–virus linking" }
  ],

  /* ---------- 教育背景（从新到旧） ---------- */
  education: [
    {
      period: { zh: "2024.09 – 至今", en: "Sep 2024 – Present" },
      school: { zh: "北京大学", en: "Peking University" },
      detail: { zh: "环境科学与工程学院 · 环境工程 · 博士研究生（直博）", en: "College of Environmental Sciences and Engineering · Environmental Engineering · Ph.D. (direct entry)" },
      note: { zh: "导师：倪晋仁 院士；课程绩点 3.90；2025—2026 学年综合测评 7/33", en: "Advisor: Prof. Jinren Ni; GPA 3.90; comprehensive ranking 7/33 (2025–2026)" }
    },
    {
      period: { zh: "2020.09 – 2024.06", en: "Sep 2020 – Jun 2024" },
      school: { zh: "南京大学", en: "Nanjing University" },
      detail: { zh: "环境学院 · 环境工程 · 本科", en: "School of the Environment · Environmental Engineering · B.Eng." },
      note: { zh: "2020 级本科生年级长；江苏省优秀毕业生、江苏省三好学生", en: "Grade leader of the 2020 cohort; Jiangsu Outstanding Graduate & Jiangsu Merit Student" }
    }
  ]
};
