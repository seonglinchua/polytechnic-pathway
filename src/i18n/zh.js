/**
 * Simplified Chinese content (zh)
 * Scope for this task: navigation + section labels only.
 * Marketing copy, statistics and testimonials are added later.
 */

export const zh = {
  meta: {
    localeName: '简体中文',
    localeShort: '中文',
    dir: 'ltr',
  },
  brand: {
    name: '理工升学之路',
    tagline: '你的兴趣。你的路径。你的未来。',
  },
  nav: {
    homeLabel:     '首页',
    primaryNavigationLabel: '主要导航',
    polytechnicListLabel: '新加坡理工学院列表',
    polytechnics:  '理工学院',
    courseFinder:  '探索课程',
    howItWorks:    '如何运作',
    studentLife:   '学生生活',
    feesSupport:   '学费与资助',
    getFreeReview: '获取指导',
    freeReview:    '开始免费评估', // alias
    applyNow:      '开始免费评估', // alias
    languageLabel: '语言',
  },
  dropdowns: {
    courseFinder: [
      { label: '浏览全日制文凭课程',         href: '/#polytechnics' },
      { label: '按兴趣与学院筛选',       href: '/#polytechnics' },
    ],
    howItWorks: [
      { label: '探索课程',     href: '/#admission-journey' },
      { label: '准备基本资料', href: '/#admission-journey' },
      { label: '联系团队',     href: '/#admission-journey' },
      { label: '提供信息',     href: '/#admission-journey' },
      { label: '获取指导',     href: '/#admission-journey' },
    ],
    studentLife: [
      { label: '校园体验',   href: '#student-life' },
      { label: '学习环境', href: '#student-life' },
      { label: '学生支持',   href: '#student-life' },
    ],
    feesSupport: [
      { label: '课程费用',           href: '#free-review' },
      { label: '学生助学金（SAS）', href: '#free-review' },
      { label: '奖学金与经济资助',   href: '#free-review' },
      { label: '官方信息链接',       href: '#free-review' },
    ],
  },
  sections: {
    hero: {
      label: '主视觉',
      headline: '探索你在新加坡的理工升学之路。',
      line1: '探索你的',
      line2: '理工升学未来',
      line3: '在新加坡。',
      subtext:
        '比较新加坡五所理工学院的全日制文凭课程，准备所需文件，获取清晰的逐步指导。',
      guide: {
        title: '我的指南',
        items: [
          '探索课程',
          '准备文件',
          '提交审查',
          '接收反馈',
          '获取辅导',
          '申请理工学院',
        ],
      },
      ctaPrimary:   '获取个性化升学指导',
      ctaSecondary: '探索课程',
      trustCopy:    '免费初步评估 · 无需付款即可开始。',
      ticket: {
        destinationLabel: '目的地',
        place: '新加坡',
        futureLabel: '你的未来',
        tagline: '等待着你',
      },
    },
    benefits: {
      label: '我们如何帮助',
      items: [
        { id: 'clearOptions',     title: '五所一站',       desc: '比较SP、NP、NYP、TP和RP。' },
        { id: 'courseDiscovery',  title: '找到合适课程',     desc: '按兴趣探索全日制文凭课程。' },
        { id: 'documentGuidance', title: '了解提交要求',     desc: '按照清晰的文件清单操作。' },
        { id: 'studentSupport',   title: '独立团队评估',     desc: '获取我们对你信息的初步评估。' },
        { id: 'feesSupport',      title: '通过LINE联系',      desc: '与我们的升学指导团队开始沟通。' },
        { id: 'freeReview',       title: '免费开始',         desc: '无需付款，除非你选择继续。' },
      ],
    },
    admissionJourney: {
      label:   '如何运作',
      subtext: '通过五个清晰步骤探索升学选项，并联系我们的指导团队。',
      ariaLabel: '重要信息',
      steps: [
        { num: 1, title: '探索课程',     desc: '比较新加坡五所理工学院的文凭课程。' },
        { num: 2, title: '准备基本资料', desc: '整理免费初步评估所需的关键信息。' },
        { num: 3, title: '联系团队',     desc: '通过LINE联系我们的升学指导团队。' },
        { num: 4, title: '提供信息',     desc: '告诉我们你的学历、课程兴趣和升学计划。' },
        { num: 5, title: '获取指导',     desc: '根据你提供的信息获得实用的下一步建议。' },
      ],
      notes: [
        '免费初步评估',
        '无需付款即可开始',
        '通过LINE联系我们的指导团队',
      ],
      cta: '获取个性化升学指导',
    },
    polytechnicDirectory: {
      label:    '探索新加坡五所理工学院',
      subtext:  '比较新加坡五所理工学院的全日制文凭课程。探索每所学院，发现相关学科领域，为你的免费初步评估筛选合适课程。',
      learnMore:            '了解更多',
      cardDescPre:          '探索',
      cardDescPost:         '的全日制文凭课程。',
      exploreCoursesPrefix: '探索',
      exploreCoursesSuffix: '课程',
      visitWebsite:         '官方网站',
      compareHeading:       '不确定选哪所理工学院？',
      compareSubtext:       '在升学指导团队的协助下筛选合适课程。',
      compareCta:           '获取课程指导',
      disclaimer:           '理工升学之路是一项独立的升学指导服务，与任何理工学院或新加坡政府机构均无隶属、认可或关联关系。',
    },
    freeReview: {
      label:   '获取个性化升学指导',
      subtext: '准备几项基本资料，然后通过LINE联系我们的指导团队，讨论适合你的下一步。',
      preparation: {
        title: '需要准备的资料',
        items: [
          '你目前的学历阶段',
          '最新成绩或学历证明',
          '你正在考虑的课程或理工学院',
          '有关文件或下一步的问题',
        ],
        note: '仅在指导团队提出要求后提供相关支持文件。',
      },
      contact: {
        title:     '联系我们的指导团队',
        desc:      '告诉我们你的升学计划，并询问有关课程、文件或初步评估的问题。',
        cta:       '打开LINE聊天',
        ctaExternalLabel: '在新标签页中打开LINE聊天',
        highlight: '免费初步评估 · 无需付款即可开始。',
      },
    },
    studentLife: { label: '学生心声' },
    contact: { label: '联系我们' },
    finalCta: {
      label: '准备好了吗？',
      headline: '准备好讨论你的课程选择了吗？',
      subline: '准备好基本资料，与我们的升学指导团队沟通。',
      badge: '免费初步评估 · 无需付款即可开始',
      cta: '打开LINE聊天',
      ctaExternalLabel: '在新标签页中打开LINE聊天',
    },
  },
  footer: {
    homeLabel: '首页',
    description: '为探索新加坡理工学院教育的学生提供的独立升学指导服务。',
    disclaimer:
      '理工升学之路是一项独立服务，并非官方理工学院或新加坡政府网站，与任何理工学院或政府机构均无隶属、认可或关联关系。',
    copyright: '© 2026 理工升学之路。保留所有权利。',
    columns: [
      {
        title: '探索',
        links: [
          { label: '探索课程',       href: '/#polytechnics'      },
          { label: '如何运作',       href: '/#admission-journey' },
          { label: '获取个性化指导', href: '/#free-review'       },
        ],
      },
      {
        title: '支持',
        links: [
          { label: '需要准备的资料', href: '/#free-review' },
          {
            label: '打开LINE聊天 ↗',
            href: 'https://line.me/ti/p/@polytechnicpathway',
            external: true,
            externalLabel: '在新标签页中打开LINE聊天',
          },
        ],
      },
      {
        title: '法律',
        links: [
          { label: '隐私政策', href: '/privacy'      },
          { label: '使用条款', href: '/terms'        },
          { label: '独立声明', href: '/independence' },
        ],
      },
    ],
  },
  common: {
    toBeConfirmed: '待确认',
    skipToMain: '跳至主要内容',
    opensInNewTab: '在新标签页中打开',
  },
  legal: {
    backToHome:  '← 返回首页',
    lastUpdated: '最后更新',
    reviewNote:  '此内容在上线前应由具备资格的专业人员审查。',
  },
};

export default zh;
