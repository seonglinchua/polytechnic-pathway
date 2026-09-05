/**
 * English content (en)
 * Scope for this task: navigation + section labels only.
 * Marketing copy, statistics and testimonials are added later.
 */

export const en = {
  meta: {
    localeName: 'English',
    localeShort: 'EN',
    dir: 'ltr',
  },
  brand: {
    name: 'Polytechnic Pathway',
    tagline: 'Your Interests. Your Pathway. Your Future.',
  },
  nav: {
    homeLabel:     'Home',
    primaryNavigationLabel: 'Primary navigation',
    polytechnicListLabel: 'Singapore polytechnics',
    polytechnics:  'Polytechnics',
    courseFinder:  'Explore Courses',
    howItWorks:    'How It Works',
    studentLife:   'Student Life',
    feesSupport:   'Fees & Support',
    getFreeReview: 'Get Guidance',
    freeReview:    'Start Free Review', // alias
    applyNow:      'Start Free Review', // alias
    languageLabel: 'Language',
  },
  dropdowns: {
    courseFinder: [
      { label: 'Browse full-time diploma courses',    href: '/#polytechnics' },
      { label: 'Filter by interests and polytechnic', href: '/#polytechnics' },
    ],
    howItWorks: [
      { label: 'Explore Courses',        href: '/#admission-journey' },
      { label: 'Prepare Your Details',   href: '/#admission-journey' },
      { label: 'Contact the Team',       href: '/#admission-journey' },
      { label: 'Share Your Information', href: '/#admission-journey' },
      { label: 'Receive Guidance',       href: '/#admission-journey' },
    ],
    studentLife: [
      { label: 'Campus experience',   href: '#student-life' },
      { label: 'Learning environment', href: '#student-life' },
      { label: 'Student support',     href: '#student-life' },
    ],
    feesSupport: [
      { label: 'Course fees',                        href: '#free-review' },
      { label: 'SAS',                                href: '#free-review' },
      { label: 'Scholarships and financial support', href: '#free-review' },
      { label: 'Links to official information',      href: '#free-review' },
    ],
  },
  sections: {
    hero: {
      label: 'Hero',
      headline: 'Explore Your Polytechnic Future in Singapore.',
      line1: 'Explore Your',
      line2: 'Polytechnic Future',
      line3: 'in Singapore.',
      subtext:
        "Compare full-time diploma options across Singapore's five Polytechnics. Prepare your documents and receive clear, step-by-step guidance.",
      guide: {
        title: 'YOUR GUIDE',
        items: [
          'Explore Courses',
          'Prepare Documents',
          'Submit for Review',
          'Receive Feedback',
          'Get Guidance',
          'Apply to Poly',
        ],
      },
      ctaPrimary:   'Get Personalised Guidance',
      ctaSecondary: 'Explore Courses',
      trustCopy:    'Free preliminary review · No payment required to get started.',
      ticket: {
        destinationLabel: 'DESTINATION',
        place: 'SINGAPORE',
        futureLabel: 'YOUR FUTURE',
        tagline: 'AWAITS',
      },
    },
    benefits: {
      label: 'How We Help',
      items: [
        { id: 'clearOptions',     title: 'All Five, One Place',        desc: 'Compare SP, NP, NYP, TP and RP.' },
        { id: 'courseDiscovery',  title: 'Find the Right Course',      desc: 'Explore full-time diplomas by interest.' },
        { id: 'documentGuidance', title: 'Know What to Submit',        desc: 'Follow a clear document checklist.' },
        { id: 'studentSupport',   title: 'Independent Team Review',    desc: 'Receive a preliminary review of your information.' },
        { id: 'feesSupport',      title: 'Connect on LINE',            desc: 'Start a conversation with our guidance team.' },
        { id: 'freeReview',       title: 'Free to Get Started',        desc: 'No payment unless you choose to proceed.' },
      ],
    },
    admissionJourney: {
      label:   'How It Works',
      subtext: 'Explore your options and connect with our guidance team in five clear steps.',
      ariaLabel: 'Key details',
      steps: [
        { num: 1, title: 'Explore Courses',        desc: 'Compare diploma options across Singapore’s five Polytechnics.' },
        { num: 2, title: 'Prepare Your Details',   desc: 'Gather the key information needed for a free preliminary review.' },
        { num: 3, title: 'Contact the Team',       desc: 'Connect with our guidance team through LINE.' },
        { num: 4, title: 'Share Your Information', desc: 'Tell us about your education, course interests and study plans.' },
        { num: 5, title: 'Receive Guidance',       desc: 'Get practical next steps based on the information you provide.' },
      ],
      notes: [
        'Free preliminary review',
        'No payment required to get started',
        'Connect with our guidance team through LINE',
      ],
      cta: 'Get Personalised Guidance',
    },
    polytechnicDirectory: {
      label:    "Explore Singapore's Five Polytechnics",
      subtext:  "Compare full-time diploma courses offered by Singapore\u2019s five local Polytechnics. Explore each institution, discover relevant fields of study and shortlist courses for your free preliminary review.",
      learnMore:            'Learn more',
      cardDescPre:          'Explore full-time diploma courses at',
      cardDescPost:         '.',
      exploreCoursesPrefix: 'Explore',
      exploreCoursesSuffix: 'Courses',
      visitWebsite:         'Official Website',
      compareHeading:       'Not sure which Polytechnic to choose?',
      compareSubtext:       'Shortlist suitable courses with help from our guidance team.',
      compareCta:           'Get Course Guidance',
      disclaimer:           'Polytechnic Pathway is an independent admissions guidance service. It is not affiliated with, endorsed by or connected to any Polytechnic or Singapore government agency.',
    },
    freeReview: {
      label:   'Get Personalised Guidance',
      subtext: 'Prepare a few key details, then contact our guidance team on LINE to discuss suitable next steps.',
      preparation: {
        title: 'What to Prepare',
        items: [
          'Your current education level',
          'Latest results or qualifications',
          'Courses or Polytechnics you are considering',
          'Questions about documents or next steps',
        ],
        note: 'Only share supporting documents when requested by our guidance team.',
      },
      contact: {
        title:     'Contact Our Guidance Team',
        desc:      'Tell us about your study plans and ask about courses, documents or the preliminary review.',
        cta:       'Open LINE Chat',
        ctaExternalLabel: 'Open LINE Chat in a new tab',
        highlight: 'Free preliminary review · No payment required to get started.',
      },
    },
    studentLife: { label: 'Student Voices' },
    contact: { label: 'Get in Touch' },
    finalCta: {
      label: 'Ready to Start?',
      headline: 'Ready to Discuss Your Course Options?',
      subline: 'Prepare your details and speak with our guidance team.',
      badge: 'Free preliminary review · No payment required to get started',
      cta: 'Open LINE Chat',
      ctaExternalLabel: 'Open LINE Chat in a new tab',
    },
  },
  footer: {
    homeLabel: 'Home',
    description: 'An independent admissions guidance service for students exploring polytechnic education in Singapore.',
    disclaimer:
      'Polytechnic Pathway is an independent service. It is not an official polytechnic or a Singapore government website, and is not affiliated with, endorsed by, or connected to any polytechnic or government agency.',
    copyright: '© 2026 Polytechnic Pathway. All rights reserved.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Explore Courses',            href: '/#polytechnics'      },
          { label: 'How It Works',               href: '/#admission-journey' },
          { label: 'Get Personalised Guidance', href: '/#free-review'       },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'What to Prepare', href: '/#free-review' },
          {
            label: 'Open LINE Chat ↗',
            href: 'https://line.me/ti/p/@polytechnicpathway',
            external: true,
            externalLabel: 'Open LINE Chat in a new tab',
          },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy',      href: '/privacy'      },
          { label: 'Terms of Use',        href: '/terms'        },
          { label: 'Independence Notice', href: '/independence' },
        ],
      },
    ],
  },
  common: {
    toBeConfirmed: 'To be confirmed',
    skipToMain: 'Skip to main content',
    opensInNewTab: 'opens in a new tab',
  },
  legal: {
    backToHome:  '← Back to home',
    lastUpdated: 'Last updated',
    reviewNote:  'This content should be reviewed by a qualified professional before going live.',
  },
};

export default en;
