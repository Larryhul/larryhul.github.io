/*
 * EDIT THIS FILE to update your academic homepage.
 * Fields left empty are automatically hidden; do not publish placeholder links.
 * Full instructions: README.md
 */
window.SITE_DATA = {
  name: "Lan Hu",
  title: "Undergraduate Researcher",
  university: "Tongji University",
  universityUrl: "https://www.tongji.edu.cn/",
  universityLocation: "Shanghai, China",
  education: "Automation (Elite Program), Guohao College · Expected 2028",
  photo: "assets/profile.jpg",
  email: "2453781@tongji.edu.cn",
  github: "https://github.com/larryhul",
  scholar: "", // optional Google Scholar profile URL
  cv: "", // e.g. assets/CV_Lan_Hu.pdf after adding the real file
  about: "I'm an undergraduate researcher in Automation (Elite Program) at Guohao College, Tongji University. My work explores how intelligent agents model interactions, anticipate others' behavior, and make safe decisions in shared environments.",
  news: [
    { date: "SEP 2026", title: "TRACER is now available on arXiv.", description: "Adaptive multi-robot navigation through joint human-response prediction and interaction-aware replanning.", link: "https://arxiv.org/abs/2609.18776", linkLabel: "Paper" },
    { date: "JUL 2026", title: "SAGE is now available on arXiv.", description: "Socially-aware generative planning for heterogeneous multi-agent navigation.", link: "https://arxiv.org/abs/2607.16619", linkLabel: "Paper" }
  ],
  research: [
    { number: "01", icon: "network", title: "Multi-Agent Learning", subtitle: "Interaction · Coordination · Decision-Making", description: "Understanding how autonomous agents anticipate one another, learn to cooperate, and make decisions in complex interactive settings." },
    { number: "02", icon: "robot", title: "Robot Learning & Planning", subtitle: "Social Navigation · Safety · Control", description: "Designing robots that can plan, adapt, and navigate safely in dynamic human-shared environments." },
    { number: "03", icon: "world", title: "Embodied AI & World Models", subtitle: "World Modeling · Generative Learning · VLA", description: "Exploring how learned representations and predictive models can support more general-purpose embodied intelligence." }
  ],
  publications: [
    {
      id: "tracer", year: "2026", art: "assets/tracer-fig1.png", artAlt: "Fig. 1 — TRACER framework overview", artFit: "contain", type: "arXiv preprint",
      artSource: "https://arxiv.org/html/2609.18776v1/TRACER_Fig1.png",
      title: "TRACER: Adaptive Multi-Robot Social Navigation via Joint Human-Response Prediction and Interaction-Aware Replanning",
      authors: ["Lan Hu", "Minghui Liwang", "Wenbo Zhu", "Xinlei Yi", "Wei Gong", "Yiguang Hong", "Seyyedali Hosseinalipour"],
      description: "An interaction-aware receding-horizon framework that predicts human responses to multi-robot actions, updates beliefs from observed interactions, and replans accordingly.",
      paper: "https://arxiv.org/abs/2609.18776", code: "", project: "",
      bibtex: "@misc{hu2026tracer,\n  title={TRACER: Adaptive Multi-Robot Social Navigation via Joint Human-Response Prediction and Interaction-Aware Replanning},\n  author={Hu, Lan and Liwang, Minghui and Zhu, Wenbo and Yi, Xinlei and Gong, Wei and Hong, Yiguang and Hosseinalipour, Seyyedali},\n  year={2026},\n  eprint={2609.18776},\n  archivePrefix={arXiv},\n  primaryClass={cs.RO}\n}"
    },
    {
      id: "sage", year: "2026", art: "assets/sage-fig1.svg", artAlt: "Fig. 1 — SAGE three-phase overview", artFit: "contain", type: "arXiv preprint",
      artSource: "https://arxiv.org/html/2607.16619v2/SAGE_overview.svg",
      title: "SAGE: A Socially-Aware Generative Engine for Heterogeneous Multi-Agent Navigation",
      authors: ["Lan Hu", "Minghui Liwang", "Wenbo Zhu", "Xinlei Yi", "Yiguang Hong", "Xianbin Wang", "Zhenzhen Jiao", "Seyyedali Hosseinalipour"],
      description: "A heterogeneous interaction encoder and diffusion-based trajectory generator, guided at inference by differentiable safety, kinematic, and social-compliance objectives.",
      paper: "https://arxiv.org/abs/2607.16619", code: "", project: "",
      bibtex: "@misc{hu2026sage,\n  title={SAGE: A Socially-Aware Generative Engine for Heterogeneous Multi-Agent Navigation},\n  author={Hu, Lan and Liwang, Minghui and Zhu, Wenbo and Yi, Xinlei and Hong, Yiguang and Wang, Xianbin and Jiao, Zhenzhen and Hosseinalipour, Seyyedali},\n  year={2026},\n  eprint={2607.16619},\n  archivePrefix={arXiv},\n  primaryClass={cs.RO}\n}"
    }
  ],
  projects: [
    {
      title: "Vision-Guided Large Models for Multi-Style Vector Glyph Generation",
      role: "Project Lead",
      program: "National Undergraduate Innovation Project"
    },
    {
      title: "A System for Human Gamete Trajectory Analysis Using Diffusion Models",
      role: "Core Contributor",
      program: "Shanghai Undergraduate Innovation Project"
    },
    {
      title: "Document Revision Comparison and Traceability Using Large Multimodal Models",
      role: "Core Contributor",
      program: "Shanghai Undergraduate Innovation Project"
    }
  ],
  // Award levels and project roles follow the user's supplied information.
  // Academic years follow the freshman certificate and the sophomore award.
  // Competition years are omitted because they were not specified.
  honors: [
    { year: "2025–2026", title: "National Scholarship", detail: "Sophomore year" },
    { year: "2024–2025", title: "National Scholarship", detail: "Freshman year" },
    { title: "National Third Prize, Chinese Mathematics Competitions (CMC)" },
    { title: "Shanghai Third Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM)" },
    { title: "Third Prize, TI Cup Shanghai Undergraduate Electronic Design Contest" },
    { year: "2024–2025", title: "Outstanding Student", detail: "Tongji University" }
  ]
};
