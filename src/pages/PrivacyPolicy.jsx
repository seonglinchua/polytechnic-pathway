/**
 * PrivacyPolicy — aligned with the current LINE-based guidance flow.
 * This content still requires qualified legal review before launch.
 */

import { useLocale } from '../i18n/LocaleContext.jsx';
import LegalLayout from './LegalLayout.jsx';

const PRIVACY_EMAIL = 'hello@polytechnicpathway.sg';

const CONTENT = {
  en: {
    title: 'Privacy Policy',
    updated: '3 September 2026',
    contentsLabel: 'On this page',
    sections: [
      {
        heading: '1. Who We Are',
        body: [
          'Polytechnic Pathway is an independent admissions guidance service. We are not affiliated with, endorsed by or connected to any Singapore polytechnic or government agency.',
          'For privacy questions, access or correction requests, or to withdraw consent, contact us at hello@polytechnicpathway.sg.',
        ],
      },
      {
        heading: '2. Information You Choose to Share',
        body: [
          'This website does not currently provide user accounts, an online review form or document uploads.',
          'If you contact our guidance team through LINE, you may choose to share your name, education background, course interests, academic information, questions and supporting documents. Please share supporting documents only when requested and only when necessary.',
        ],
      },
      {
        heading: '3. Website Technical Data',
        body: [
          'The website does not currently use analytics or advertising cookies. Our hosting provider may process limited technical information—such as IP address, browser type, device information and request logs—to deliver, secure and maintain the website.',
        ],
      },
      {
        heading: '4. How We Use Information',
        list: [
          'To respond to your questions and provide preliminary course guidance',
          'To understand the education and course information you choose to share',
          'To maintain the security and reliability of the service',
          'To meet applicable legal and regulatory requirements',
        ],
        bodyAfter: ['We do not sell or rent your personal data.'],
      },
      {
        heading: '5. LINE and External Websites',
        body: [
          'LINE is a third-party service with its own privacy practices. When you open LINE or send a message, LINE may process information according to its own terms and privacy policy.',
          'Links to polytechnic and other external websites are provided for convenience. Their privacy practices are controlled by their respective operators.',
        ],
      },
      {
        heading: '6. Consent and Your Choices',
        body: [
          'By voluntarily contacting us and providing information, you consent to its use for the purposes explained at the time of collection and in this policy. You may withdraw consent with reasonable notice by contacting us. We will explain any practical consequences of withdrawal where relevant.',
        ],
      },
      {
        heading: '7. Retention and Security',
        body: [
          'We will retain personal data only while it is needed for the purpose for which it was collected or for applicable legal or business purposes, and will apply reasonable safeguards appropriate to the information held.',
          'When information is no longer needed, we will delete or anonymise it where reasonably practicable, subject to applicable legal and business requirements.',
        ],
      },
      {
        heading: '8. Access and Correction',
        body: ['You may contact us to request access to, or correction of, personal data in our possession or control. Requests will be handled in accordance with applicable Singapore law.'],
      },
      {
        heading: '9. Changes and Contact',
        body: [
          'We may update this policy when the service or its data practices change. The date above shows the latest revision.',
          'For privacy enquiries or complaints, email hello@polytechnicpathway.sg.',
        ],
      },
    ],
  },
  zh: {
    title: '隐私政策',
    updated: '2026年9月3日',
    contentsLabel: '本页内容',
    sections: [
      {
        heading: '1. 关于我们',
        body: [
          '理工升学之路是一项独立升学指导服务，与任何新加坡理工学院或政府机构均无隶属、认可或关联关系。',
          '如有隐私疑问、访问或更正请求，或希望撤回同意，请发送电子邮件至 hello@polytechnicpathway.sg。',
        ],
      },
      {
        heading: '2. 您选择提供的信息',
        body: [
          '本网站目前不提供用户账户、在线评估表格或文件上传功能。',
          '如果您通过LINE联系指导团队，您可自行选择提供姓名、教育背景、课程兴趣、学术信息、问题及支持文件。请仅在团队提出要求且确有必要时提供支持文件。',
        ],
      },
      {
        heading: '3. 网站技术数据',
        body: ['本网站目前不使用分析或广告Cookie。我们的托管服务商可能处理有限的技术信息，例如IP地址、浏览器类型、设备信息及请求日志，以提供、保护和维护本网站。'],
      },
      {
        heading: '4. 我们如何使用信息',
        list: ['回复您的问题并提供初步课程指导', '了解您选择提供的教育及课程信息', '维护服务的安全与可靠性', '遵守适用的法律及监管要求'],
        bodyAfter: ['我们不会出售或出租您的个人数据。'],
      },
      {
        heading: '5. LINE及外部网站',
        body: [
          'LINE是拥有自身隐私惯例的第三方服务。打开LINE或发送消息时，LINE可能根据其条款及隐私政策处理相关信息。',
          '本网站提供理工学院及其他外部网站链接以方便用户；这些网站的隐私惯例由其各自运营者管理。',
        ],
      },
      {
        heading: '6. 同意与您的选择',
        body: ['当您自愿联系我们并提供信息时，即表示您同意我们按照收集时说明的目的及本政策使用这些信息。您可提前给予合理通知并联系我们撤回同意；如有相关实际影响，我们会向您说明。'],
      },
      {
        heading: '7. 保留与安全',
        body: [
          '我们仅在实现收集目的或适用法律及业务目的所需期间保留个人数据，并会根据所持信息采取合理的保护措施。',
          '当信息不再需要时，在遵守适用法律及业务要求的前提下，我们会在合理可行的范围内删除相关信息或将其匿名化。',
        ],
      },
      {
        heading: '8. 访问与更正',
        body: ['您可以联系我们，请求访问或更正由我们持有或控制的个人数据。我们将按照适用的新加坡法律处理请求。'],
      },
      {
        heading: '9. 政策变更与联系',
        body: [
          '当服务或数据处理方式改变时，我们可能更新本政策。上方日期为最近修订日期。',
          '如有隐私询问或投诉，请发送电子邮件至 hello@polytechnicpathway.sg。',
        ],
      },
    ],
  },
};

function paragraphWithEmail(text) {
  const parts = text.split(PRIVACY_EMAIL);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {index > 0 && <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>}
      {part}
    </span>
  ));
}

function Section({ section, id }) {
  return (
    <section className="legal-page__section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{section.heading}</h2>
      {section.body?.map((paragraph, index) => (
        <p key={index}>{paragraphWithEmail(paragraph)}</p>
      ))}
      {section.list && (
        <ul>
          {section.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
      {section.bodyAfter?.map((paragraph, index) => (
        <p key={index}>{paragraphWithEmail(paragraph)}</p>
      ))}
    </section>
  );
}

function PrivacyPolicy() {
  const { locale } = useLocale();
  const content = locale === 'zh' ? CONTENT.zh : CONTENT.en;

  return (
    <LegalLayout title={content.title} lastUpdated={content.updated}>
      <nav className="legal-page__contents" aria-label={content.contentsLabel}>
        <h2>{content.contentsLabel}</h2>
        <ol>
          {content.sections.map((section, index) => (
            <li key={section.heading}>
              <a href={`#privacy-section-${index + 1}`}>
                {section.heading.replace(/^\d+\.\s*/, '')}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      {content.sections.map((section, index) => (
        <Section
          key={section.heading}
          section={section}
          id={`privacy-section-${index + 1}`}
        />
      ))}
    </LegalLayout>
  );
}

export default PrivacyPolicy;
