/**
 * ContactSection — contact / help channels (e.g. chat, QR).
 * Scaffold only. Live contact details are added in a later task.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import SectionShell from '../ui/SectionShell.jsx';

function ContactSection() {
  const { t } = useLocale();

  return (
    <SectionShell
      id="contact"
      devLabel="ContactSection"
      title={t.sections.contact.label}
    />
  );
}

export default ContactSection;
