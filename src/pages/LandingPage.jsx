/**
 * LandingPage — assembles all Phase 1 marketing sections.
 * Rendered at the "/" route by App.jsx.
 */

import Hero               from '../components/sections/Hero.jsx';
import BenefitsStrip      from '../components/sections/BenefitsStrip.jsx';
import PolytechnicDirectory from '../components/sections/PolytechnicDirectory.jsx';
import AdmissionJourney   from '../components/sections/AdmissionJourney.jsx';
import FreeReviewSection  from '../components/sections/FreeReviewSection.jsx';
import FinalCTA           from '../components/sections/FinalCTA.jsx';

function LandingPage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <PolytechnicDirectory />
      <AdmissionJourney />
      <FreeReviewSection />
      <FinalCTA />
    </>
  );
}

export default LandingPage;
