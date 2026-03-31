import Seo from "../components/Seo";
import { PortfolioShowcaseSection } from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function ProjectsPage() {
  return (
    <>
      <Seo {...seoPages.projects} />
      <PortfolioShowcaseSection introAligned="center" showEyebrow={false} />
    </>
  );
}
