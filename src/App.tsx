import { Hero } from "./components/sections/hero";
import { ValuePropositionStrip } from "./components/sections/value-proposition-strip";
import { ProductFeatures } from "./components/sections/product-features";
// import { TargetAudience } from "./components/sections/target-audience";
import { CaseStudy } from "./components/sections/case-study";
import { Testimonials } from "./components/sections/testimonials";
import { Compliance } from "./components/sections/compliance";
import { IntegrationShowcase } from "./components/sections/integration-showcase";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <>
      <Hero data-oid="a6ryif1" />
      <IntegrationShowcase data-oid="w5-k0i5" />
      <ValuePropositionStrip data-oid="_r8n-af" />
      <ProductFeatures data-oid="evgsg3k" />
      {/* <TargetAudience data-oid="lk6ts6-" /> */}
      {/* <CaseStudy data-oid="6zfu50s" /> */}
      <Testimonials data-oid="hjlhi:m" />
      <Compliance data-oid="vy8t5c7" />
      <Footer />
    </>
  );
}

export default App;
