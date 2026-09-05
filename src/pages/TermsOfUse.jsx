/**
 * TermsOfUse — bilingual.
 * Have this reviewed by a legal professional before going live.
 */

import { useLocale } from '../i18n/LocaleContext.jsx';
import LegalLayout from './LegalLayout.jsx';

const CONTACT_EMAIL = 'hello@polytechnicpathway.sg';

const CONTENT = {
  en: {
    title: 'Terms of Use',
    updated: '3 September 2026',
    sections: [
      {
        heading: '1. About This Service',
        body: [
          'Polytechnic Pathway provides independent admissions guidance to prospective students interested in Singapore polytechnic education. We are not affiliated with, endorsed by or connected to any Singapore polytechnic or government agency.',
        ],
      },
      {
        heading: '2. Service Scope',
        body: ['Our service includes:'],
        list: [
          'A free preliminary review of your education background and interests',
          'Guidance on course options and document requirements',
          'The option to contact our guidance team through LINE',
        ],
        body2: [
          'We do not submit applications to polytechnics on your behalf. All official applications must be made directly through the respective polytechnic or the Joint Admissions Exercise (JAE).',
        ],
      },
      {
        heading: '3. Accuracy of Information',
        body: [
          'We make reasonable efforts to keep information accurate and up to date. However, course details, entry requirements and fees are subject to change. Always verify information with the relevant polytechnic before making any decisions.',
        ],
      },
      {
        heading: '4. User Responsibilities',
        list: [
          'Provide accurate information when you choose to contact us',
          'Share only your own genuine academic documents, and only when requested',
          'Not misuse the service or submit false information',
        ],
      },
      {
        heading: '5. Intellectual Property',
        body: [
          'All content on this website — including text, graphics, icons and the brand mark — is the property of Polytechnic Pathway unless otherwise stated. Polytechnic names and abbreviations remain the property of their respective institutions.',
        ],
      },
      {
        heading: '6. Limitation of Liability',
        body: [
          'Polytechnic Pathway provides guidance in good faith. We are not liable for decisions made based on our guidance, for changes in admission policies, or for unsuccessful applications.',
        ],
      },
      {
        heading: '7. Governing Law',
        body: ['These terms are governed by the laws of Singapore.'],
      },
      {
        heading: '8. Contact',
        body: ['For questions about these terms, contact us at hello@polytechnicpathway.sg.'],
      },
    ],
  },
  zh: {
    title: '使用条款',
    updated: '2026年9月3日',
    sections: [
      {
        heading: '1. 关于本服务',
        body: [
          '理工升学之路为有意向新加坡理工教育的学生提供独立升学指导。我们与任何新加坡理工学院或政府机构均无隶属、认可或关联关系。',
        ],
      },
      {
        heading: '2. 服务范围',
        body: ['我们的服务包括：'],
        list: [
          '对您的教育背景和兴趣进行免费初步评估',
          '提供课程选择和文件要求方面的指导',
          '通过LINE联系我们指导团队的选项',
        ],
        body2: [
          '我们不代表您向理工学院提交申请。所有正式申请必须直接通过相关理工学院或联合报名考试（JAE）渠道进行。',
        ],
      },
      {
        heading: '3. 信息准确性',
        body: [
          '我们尽力保持信息准确和最新。然而，课程详情、入学要求和学费可能随时变化。在做出任何决定之前，请务必向相关理工学院核实信息。',
        ],
      },
      {
        heading: '4. 用户责任',
        list: [
          '选择联系我们时提供准确信息',
          '仅在团队提出要求时分享您本人真实的学术文件',
          '不得滥用本服务或提交虚假信息',
        ],
      },
      {
        heading: '5. 知识产权',
        body: [
          '本网站上的所有内容——包括文字、图形、图标和品牌标志——均为理工升学之路的财产（除非另有说明）。理工学院名称和缩写仍属各自机构所有。',
        ],
      },
      {
        heading: '6. 责任限制',
        body: [
          '理工升学之路本着诚信原则提供指导。我们对基于我们指导所做的决定、招生政策变化或申请不成功不承担责任。',
        ],
      },
      {
        heading: '7. 适用法律',
        body: ['本条款受新加坡法律管辖。'],
      },
      {
        heading: '8. 联系方式',
        body: ['如有关于本条款的疑问，请通过 hello@polytechnicpathway.sg 与我们联系。'],
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

function Section({ section, id }) {
  return (
    <section className="legal-page__section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{section.heading}</h2>
      {section.body?.map((p, i) => <p key={i}>{paragraphWithEmail(p)}</p>)}
      {section.list && (
        <ul>
          {section.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {section.body2?.map((p, i) => <p key={i}>{paragraphWithEmail(p)}</p>)}
    </section>
  );
}

function TermsOfUse() {
  const { locale } = useLocale();
  const c = locale === 'zh' ? CONTENT.zh : CONTENT.en;

  return (
    <LegalLayout title={c.title} lastUpdated={c.updated}>
      <nav className="legal-page__contents" aria-label={locale === 'zh' ? '本页内容' : 'On this page'}>
        <h2>{locale === 'zh' ? '本页内容' : 'On this page'}</h2>
        <ol>
          {c.sections.map((section, index) => (
            <li key={section.heading}>
              <a href={`#terms-section-${index + 1}`}>{section.heading.replace(/^\d+\.\s*/, '')}</a>
            </li>
          ))}
        </ol>
      </nav>
      {c.sections.map((s, index) => (
        <Section key={s.heading} section={s} id={`terms-section-${index + 1}`} />
      ))}
    </LegalLayout>
  );
}

export default TermsOfUse;
