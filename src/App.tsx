import { Hero } from "./components/sections/hero";
import { ValuePropositionStrip } from "./components/sections/value-proposition-strip";
import { ProductFeatures } from "./components/sections/product-features";
// import { TargetAudience } from "./components/sections/target-audience";
import { CaseStudy } from "./components/sections/case-study";
import { Testimonials } from "./components/sections/testimonials";
import { Compliance } from "./components/sections/compliance";
import { IntegrationShowcase } from "./components/sections/integration-showcase";

function App() {
  return (
    <>
      <Hero data-oid="rhyqb2l" />
      <IntegrationShowcase data-oid="9gan_7e" />
      <ValuePropositionStrip data-oid="pu:e6di" />
      <ProductFeatures data-oid="-923u3b" />
      {/* <TargetAudience data-oid="lk6ts6-" /> */}
      <CaseStudy data-oid="293yu72" />
      <Testimonials data-oid="f0re0au" />
      <Compliance data-oid="ajvzb85" />
      {/* Add more sections as needed */}
    </>
  );
}

export default App;
