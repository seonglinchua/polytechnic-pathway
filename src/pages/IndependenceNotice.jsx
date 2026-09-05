/**
 * IndependenceNotice — bilingual independence statement.
 */

import { useLocale } from '../i18n/LocaleContext.jsx';
import LegalLayout from './LegalLayout.jsx';

const CONTACT_EMAIL = 'hello@polytechnicpathway.sg';

const CONTENT = {
  en: {
    title: 'Independence Notice',
    updated: '2 September 2026',
    sections: [
      {
        heading: 'What Polytechnic Pathway Is',
        body: [
          'Polytechnic Pathway is an independent admissions guidance service operated as a private service in Singapore.',
          'We help prospective students explore full-time diploma courses at Singapore\'s five polytechnics and prepare for the admissions process.',
        ],
      },
      {
        heading: 'What We Are Not',
        body: ['Polytechnic Pathway is not:'],
        list: [
          'An official website of any Singapore polytechnic',
          'A government or Ministry of Education service',
          'Affiliated with, endorsed by or connected to Singapore Polytechnic (SP), Ngee Ann Polytechnic (NP), Nanyang Polytechnic (NYP), Temasek Polytechnic (TP) or Republic Polytechnic (RP)',
          'Part of the Joint Admissions Exercise (JAE) or any official admissions system',
        ],
      },
      {
        heading: 'Official Polytechnic Resources',
        externalLabel: 'opens in a new tab',
        body: ['For official course information, entry requirements and application procedures, always refer directly to the polytechnic:'],
        links: [
          { label: 'Singapore Polytechnic (SP)', href: 'https://www.sp.edu.sg/' },
          { label: 'Ngee Ann Polytechnic (NP)',  href: 'https://www.np.edu.sg/' },
          { label: 'Nanyang Polytechnic (NYP)',  href: 'https://www.nyp.edu.sg/' },
          { label: 'Temasek Polytechnic (TP)',   href: 'https://www.tp.edu.sg/' },
          { label: 'Republic Polytechnic (RP)',  href: 'https://www.rp.edu.sg/' },
        ],
      },
      {
        heading: 'Our Commitment',
        body: [
          'We make reasonable efforts to provide accurate, current information and honest guidance. Where information may be outdated or unverified, we clearly indicate this. We never guarantee admission outcomes or success rates.',
        ],
      },
      {
        heading: 'Contact',
        body: ['If you have questions about our independence or this notice, contact us at hello@polytechnicpathway.sg.'],
      },
    ],
  },
  zh: {
    title: '独立声明',
    updated: '2026年9月2日',
    sections: [
      {
        heading: '理工升学之路是什么',
        body: [
          '理工升学之路是在新加坡以私人方式运营的独立升学指导服务。',
          '我们帮助有意向新加坡五所理工学院就读的学生探索全日制文凭课程并为入学申请做好准备。',
        ],
      },
      {
        heading: '我们不是什么',
        body: ['理工升学之路不是：'],
        list: [
          '任何新加坡理工学院的官方网站',
          '政府或教育部服务',
          '与新加坡理工学院（SP）、义安理工学院（NP）、南洋理工学院（NYP）、淡马锡理工学院（TP）或共和理工学院（RP）有任何隶属、认可或关联关系',
          '联合报名考试（JAE）或任何官方招生系统的组成部分',
        ],
      },
      {
        heading: '官方理工学院资源',
        externalLabel: '在新标签页中打开',
        body: ['有关官方课程信息、入学要求和申请程序，请直接参考相应理工学院：'],
        links: [
          { label: '新加坡理工学院（SP）', href: 'https://www.sp.edu.sg/' },
          { label: '义安理工学院（NP）',   href: 'https://www.np.edu.sg/' },
          { label: '南洋理工学院（NYP）',  href: 'https://www.nyp.edu.sg/' },
          { label: '淡马锡理工学院（TP）', href: 'https://www.tp.edu.sg/' },
          { label: '共和理工学院（RP）',   href: 'https://www.rp.edu.sg/' },
        ],
      },
      {
        heading: '我们的承诺',
        body: [
          '我们会尽合理努力提供准确、最新的信息和诚实的指导。如果信息可能已过时或未经核实，我们会明确标注。我们不保证任何入学结果或成功率。',
        ],
      },
      {
        heading: '联系方式',
        body: ['如有关于我们独立性或本声明的疑问，请通过 hello@polytechnicpathway.sg 与我们联系。'],
      },
    ],
  },
};

function paragraphWithEmail(text) {
  const parts = text.split(CONTACT_EMAIL);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {index > 0 && <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}
      {part}
    </span>
  ));
}

function Section({ section }) {
  return (
    <>
      <h2>{section.heading}</h2>
      {section.body?.map((p, i) => <p key={i}>{paragraphWithEmail(p)}</p>)}
      {section.list && (
        <ul>
          {section.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {section.links && (
        <ul>
          {section.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} — ${section.externalLabel}`}
              >
                {link.label}<span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      {section.body2?.map((p, i) => <p key={i}>{paragraphWithEmail(p)}</p>)}
    </>
  );
}

function IndependenceNotice() {
  const { locale } = useLocale();
  const c = locale === 'zh' ? CONTENT.zh : CONTENT.en;

  return (
    <LegalLayout title={c.title} lastUpdated={c.updated}>
      {c.sections.map((s) => <Section key={s.heading} section={s} />)}
    </LegalLayout>
  );
}

export default IndependenceNotice;
