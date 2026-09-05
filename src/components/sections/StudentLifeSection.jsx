/**
 * StudentLifeSection — student voices / campus life.
 * Scaffold only. No mock testimonials are used; real content is added
 * later and marked "To be confirmed" until verified.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import SectionShell from '../ui/SectionShell.jsx';

function StudentLifeSection() {
  const { t } = useLocale();

  return (
    <SectionShell
      id="student-life"
      devLabel="StudentLifeSection"
      title={t.sections.studentLife.label}
    />
  );
}

export default StudentLifeSection;
