/* ==========================================================================
 *  data/publications.js  —— 论文列表
 * ==========================================================================
 *
 *  【加一篇新论文】在对应分组的 items 数组【最前面】加一段，例如：
 *
 *      {
 *        date: "2027.03",                       // 显示在左侧的时间
 *        title: "论文标题（英文原样照抄）",
 *        authors: "Li P, Zhang S, Ni J",        // 作者列表
 *        venue: "Nature Communications",         // 期刊名，会自动显示为斜体
 *        cite: "2027, 18: 1234",                 // 卷期页码
 *        role: { zh: "独立第一作者", en: "Sole first author" },
 *        tags: ["SCI 一区"],                     // 标签，可留空数组 []
 *        doi: "10.1038/s41467-027-12345-6",      // 有 DOI 就填，没有就写 ""（会自动生成 Scholar 搜索链接）
 *        summary: { zh: "一句话介绍", en: "One-line summary" }
 *      },
 *
 *  【题目待补充】把 title 写成 ""，再设置 pendingTitle: true，
 *   页面会显示"题目待补充"，填好后删掉 pendingTitle 这一行就行。
 * ========================================================================== */

window.RESUME_PUBLICATIONS = {

  intro: {
    zh: "以第一或合作作者身份共发表论文 7 篇，其中独立第一作者 3 篇。另有 1 篇在 *Nature Communications* 返修、2 篇在审并已发布预印本。带 ★ 的为代表性工作。",
    en: "7 peer-reviewed papers (3 as sole first author), plus one manuscript under revision at *Nature Communications* and two under review with preprints. Works marked ★ are selected highlights."
  },

  groups: [

    /* ---------------- 已发表：独立第一作者 ---------------- */
    {
      key: "first-author",
      title: { zh: "已发表 · 独立第一作者", en: "Published · Sole first author" },
      items: [
        {
          date: "2025.07",
          featured: true,
          title: "The defensome of prokaryotes in aquifers",
          authors: "Li P, et al.",
          venue: "Nature Communications",
          cite: "2025, 16: 6482",
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["SCI 一区", "Nature 子刊"],
          doi: "",
          summary: {
            zh: "首次系统构建地下水原核生物抗病毒防御组，揭示这一原始生态系统中独特的病毒—宿主互作特征，并鉴定出可用于噬菌体疗法开发的新型防御系统。",
            en: "The first systematic antiviral defensome of prokaryotes in groundwater, revealing virus–host interaction features unique to this pristine ecosystem and identifying novel defense systems for phage-therapy development."
          }
        },
        {
          date: "2025.04",
          featured: true,
          title: "Understanding pollutant-driven shifts of antibiotic resistome in activated sludge: A lab-scale study",
          authors: "Li P, et al.",
          venue: "Journal of Hazardous Materials",
          cite: "2025, 487: 137199",
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["SCI 一区"],
          doi: "",
          summary: {
            zh: "以三种重金属与三种芳香族有机物胁迫活性污泥，发现二者均提升 ARG 总丰度，bacA 与 sul1 可作为指示基因；但高风险 ARG 占比并未上升，提示丰度高不等于风险高。",
            en: "Heavy metals and aromatic organics both raised total ARG abundance in activated sludge, with bacA and sul1 as indicator genes — yet the share of high-risk ARGs did not rise, showing abundance ≠ risk."
          }
        },
        {
          date: "2024.11",
          featured: true,
          title: "Oxygen-limited niches enhance activated sludge resilience to shock loads and mitigate antibiotic resistance",
          authors: "Li P, et al.",
          venue: "Chemical Engineering Journal",
          cite: "2024, 500: 157093",
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["SCI 一区"],
          doi: "",
          summary: {
            zh: "提出以限氧生态位（缺氧/厌氧）调控菌群功能，在高效去除有毒污染物的同时抑制 ARG 水平转移；开发免大改工艺的袋装模块化构建法，并完成中试验证。",
            en: "Oxygen-limited niches tuned community function to remove toxic pollutants while suppressing ARG horizontal transfer; a bagged modular construction method was developed and validated at pilot scale."
          }
        }
      ]
    },

    /* ---------------- 已发表：合作作者 ---------------- */
    {
      key: "co-author",
      title: { zh: "已发表 · 合作作者", en: "Published · Co-author" },
      items: [
        {
          date: "2026.07",
          pendingTitle: true,
          title: "",
          authors: "Li P (3rd author), et al.",
          venue: "Nature Communications",
          cite: "2026",
          role: { zh: "第三作者", en: "Third author" },
          tags: ["SCI 一区", "Nature 子刊"],
          doi: "",
          summary: { zh: "", en: "" }
        },
        {
          date: "2026.01",
          pendingTitle: true,
          title: "",
          authors: "Li P (4th author), et al.",
          venue: "Nature Water",
          cite: "2026",
          role: { zh: "第四作者", en: "Fourth author" },
          tags: ["SCI 一区", "Nature 子刊"],
          doi: "",
          summary: { zh: "", en: "" }
        }
      ]
    },

    /* ---------------- 返修 / 在审 / 预印本 ---------------- */
    {
      key: "under-review",
      title: { zh: "返修 · 在审 · 预印本", en: "Under Revision / Under Review / Preprints" },
      items: [
        {
          date: "2026",
          title: "Microbial evolutionary arms races across glacier-to-river gradients",
          authors: "Li P, et al.",
          venue: "Nature Communications",
          cite: "under revision, 2026",          status: { zh: "返修中", en: "Under revision" },
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["SCI 一区"],
          doi: "",
          summary: {
            zh: "基于西南高原河流项目与微生物采样数据，刻画从冰川到高原河流、再到非高原河流的病毒—宿主互作梯度变化；确定冰川是微生物防御热点，并发现溶原噬菌体介导的「混合免疫」现象。",
            en: "A glacier-to-river gradient survey of virus–host interactions, identifying glaciers as hotspots of microbial defense and uncovering lysogeny-mediated 'hybrid immunity'."
          }
        },
        {
          date: "2026",
          title: "Functional profiling of ESKAPE viromes uncovers resistance-limiting phage-host dynamics",
          authors: "Li P, et al.",
          venue: "bioRxiv",
          cite: "2026",
          status: { zh: "在审 · 预印本", en: "Under review · Preprint" },
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["ESKAPE", "噬菌体疗法"],
          doi: "10.64898/2026.08.16.745060",
          summary: {
            zh: "整合 11 947 个 ESKAPE 完整基因组与全球宏基因组病毒数据，构建含 14 496 个病毒的非冗余病毒组并发现 4 个新病毒分支；揭示 ESKAPE 噬菌体极少携带 ARG、并拮抗质粒以限制 ARG 传播，兼具靶向耐药病原与遏制耐药扩散的双重潜力。",
            en: "Integrating 11,947 ESKAPE genomes with global metagenomic virus data yielded a non-redundant virome of 14,496 viruses and four novel clades; ESKAPE phages rarely carry ARGs and antagonise plasmids, limiting ARG spread."
          }
        },
        {
          date: "2026",
          title: "CRISPR mapping unveils global prevalence of viral predators of Myxobacteria",
          authors: "Li P, et al.",
          venue: "bioRxiv",
          cite: "2026",
          status: { zh: "在审 · 预印本", en: "Under review · Preprint" },
          role: { zh: "独立第一作者", en: "Sole first author" },
          tags: ["Myxobacteria", "CRISPR-Cas"],
          doi: "",
          summary: {
            zh: "基于 3 229 个粘细菌基因组，利用 CRISPR 间隔序列引导宿主—病毒关联分析，构建覆盖多种生态系统的 790 个非冗余粘细菌噬菌体，鉴定出 6 个新病毒类群（MV-1～MV-6），并首次在噬菌体中发现 Cas12m 效应器。",
            en: "From 3,229 myxobacterial genomes and CRISPR spacer-guided host–virus linking, a set of 790 non-redundant myxophages was assembled, revealing six novel clades (MV-1–MV-6) and the first phage-encoded Cas12m effector."
          }
        }
      ]
    }
  ]
};
