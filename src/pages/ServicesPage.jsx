import Seo from "../components/Seo";
import { CtaSection, ServicesSection } from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function ServicesPage() {
  return (
    <>
      <Seo {...seoPages.services} />
      <ServicesSection showEyebrow={false} />
      <CtaSection
        title="Need a system built on a"
        accent="MERN-ready foundation?"
        description="We can deliver the frontend experience you liked in the Next.js version while keeping the overall solution aligned with a MERN deployment path."
        secondaryLabel="View Projects"
        secondaryTo="/projects"
      />
    </>
  );
}
