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
      <Hero data-oid="3..6j7o" />
      <ValuePropositionStrip data-oid="b0b17iy" />
      <ProductFeatures data-oid="56rsx74" />
      {/* <TargetAudience data-oid="lk6ts6-" /> */}
      <CaseStudy data-oid="t_e_8mp" />
      <Testimonials data-oid="8pp:see" />
      <Compliance data-oid="d4tirxu" />
      <IntegrationShowcase data-oid="8vdlf8." />
      {/* Add more sections as needed */}
    </>
  );
}

export default App;
