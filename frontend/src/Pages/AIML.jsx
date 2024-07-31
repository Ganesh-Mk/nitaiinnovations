import { useEffect } from "react";

import Features from "../Components/Features";
import FeatureMainSection from "../Components/FeatureMainSection";
import { AIFeatures } from "../Data/AIFeaturesData";
import { MLFeatures } from "../Data/MLFeaturesData";
import "../Styles/index.css";

function AIML() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FeatureMainSection
        title="AI Development Services"
        subTitle="AI & ML"
        description="Empower your AI journey with our comprehensive suite of end-to-end
              AI development services, meticulously crafted to align with your
              distinct project requirements. From crafting bespoke AI strategies
              to fuel business growth and leveraging advanced analytics to
              harness the power of data, to deploying cutting- edge Natural
              Language Processing (NLP) solutions for seamless communication, we
              serve as your dedicated AI talent powerhouse."
        imageURL="/images/ai1.png"
      />
      <Features data={AIFeatures} />
      <Features data={MLFeatures} imageURL="/images/ml.png" />
    </>
  );
}

export default AIML;
