/**
 * Polytechnic Pathway — Institution directory
 *
 * The five actual Singapore polytechnics. Names and official URLs only.
 * Do NOT add official logos without approved assets.
 * Statistics, taglines and marketing copy are intentionally omitted and
 * marked "To be confirmed" until verified content is provided.
 *
 * `website`     — official institution homepage (stable primary domain).
 * `coursesUrl`  — official full-time diploma / course listing page.
 *                 Deep paths marked TBC may change; verify before launch.
 */

export const TBC = 'To be confirmed';

/** @typedef {Object} Polytechnic
 *  @property {string} id           Short slug.
 *  @property {string} abbr         Official abbreviation.
 *  @property {string} name         Full official name (English).
 *  @property {string} nameZh       Full official name (Simplified Chinese).
 *  @property {string} website      Official homepage URL.
 *  @property {string} coursesUrl   Official course listing URL.
 *  @property {boolean} coursesUrlVerified  Whether coursesUrl is confirmed.
 */

/** @type {Polytechnic[]} */
export const polytechnics = [
  {
    id: 'sp',
    abbr: 'SP',
    name: 'Singapore Polytechnic',
    nameZh: '新加坡理工学院',
    badge: '/assets/icons/sp-badge.svg',
    website: 'https://www.sp.edu.sg/',
    coursesUrl: 'https://www.sp.edu.sg/courses',
    coursesUrlVerified: true,
  },
  {
    id: 'np',
    abbr: 'NP',
    name: 'Ngee Ann Polytechnic',
    nameZh: '义安理工学院',
    badge: '/assets/icons/np-badge.svg',
    website: 'https://www.np.edu.sg/',
    coursesUrl: 'https://www.np.edu.sg/schools-courses/full-time-courses',
    coursesUrlVerified: true,
  },
  {
    id: 'nyp',
    abbr: 'NYP',
    name: 'Nanyang Polytechnic',
    nameZh: '南洋理工学院',
    badge: '/assets/icons/nyp-badge.svg',
    website: 'https://www.nyp.edu.sg/',
    coursesUrl: 'https://www.nyp.edu.sg/student/study/courses',
    coursesUrlVerified: true,
  },
  {
    id: 'tp',
    abbr: 'TP',
    name: 'Temasek Polytechnic',
    nameZh: '淡马锡理工学院',
    badge: '/assets/icons/tp-badge.svg',
    website: 'https://www.tp.edu.sg/',
    coursesUrl: 'https://www.tp.edu.sg/schools-and-courses/students/schools.html',
    coursesUrlVerified: true,
  },
  {
    id: 'rp',
    abbr: 'RP',
    name: 'Republic Polytechnic',
    nameZh: '共和理工学院',
    badge: '/assets/icons/rp-badge.svg',
    website: 'https://www.rp.edu.sg/',
    coursesUrl: 'https://www.rp.edu.sg/schools-courses/courses/full-time-diplomas',
    coursesUrlVerified: true,
  },
];

export default polytechnics;
