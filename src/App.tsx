import { Hero } from "./components/sections/hero";
import { NavBar } from "./components/sections/navbar";
import { ValuePropositionStrip } from "./components/sections/value-proposition-strip";
import { ProductFeatures } from "./components/sections/product-features";
import { Testimonials } from "./components/sections/testimonials";
import { Compliance } from "./components/sections/compliance";
import { IntegrationShowcase } from "./components/sections/integration-showcase";
import { Footer } from "./components/sections/footer";

function App() {
	return (
		<>
			<NavBar />
			<Hero data-oid="a6ryif1" />
			<IntegrationShowcase data-oid="w5-k0i5" />
			<ValuePropositionStrip data-oid="_r8n-af" />
			<ProductFeatures data-oid="evgsg3k" />
			<Testimonials data-oid="hjlhi:m" />
			<Compliance data-oid="vy8t5c7" />
			<Footer />
		</>
	);
}

export default App;
