// Reusable BentoCard component
function BentoCard(props: {
	title: string;
	description?: string;
	children?: React.ReactNode;
	className?: string;
	titleClassName?: string;
	[key: string]: unknown;
}) {
	const { title, description, children, className, titleClassName, ...rest } =
		props;
	return (
		<div
			className={`bg-white rounded-lg px-2 pt-6 flex flex-col min-h-0 h-full overflow-hidden ${
				className ?? ""
			}`}
			{...rest}
		>
			<div className="space-y-4 p-2">
				<h2 className={`text-2xl nk-semibold text-secondary/60 ${titleClassName ?? ""}`}>{title}</h2>
				{description && (
					<p className="text-muted-foreground max-w-md text-sm ">
						{description}
					</p>
				)}
			</div>
			{children}
		</div>
	);
}

const features = [
	{
		title: "Document Drafting",
		description:
			"Generate NDAs, MSAs, SOWs, and more using plain English + firm templates.",
		className:
			"lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 min-h-[400px] h-full",
		image: (
			<div
				className="flex-1 relative mb-2 rounded-lg p-1 overflow-hidden min-h-[200px] sm:min-h-[300px] h-full w-full flex items-center justify-center"
				data-oid="dx-bm_i"
				style={{
					background: `linear-gradient(135deg, var(--primary, #3b82f6) 0%, var(--secondary, #f59e42) 80%)`,
				}}
			>
				<img
					src="/images/product/document-drafting.jpeg"
					alt="Document Drafting"
					style={{
						position: "absolute",
						left: 100,
						top: 80,
						width: "100%",
						height: "100%",
						borderRadius: "0.5rem",
						objectFit: "cover",
						objectPosition: "top left",
						transform: "scale(1.2)",
					}}
				/>
			</div>
		),
	},
	{
		title: "Reviewing & Redlining",
		description:
			"Instantly flag risks, compare clauses, and track document changes.",
		className:
			"lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 min-h-[350px] h-full",
		image: (
			<div
				className="flex-1 relative mb-2 rounded-lg p-1 overflow-hidden min-h-[200px] sm:min-h-[300px] h-full w-full flex items-center justify-center"
				data-oid="dx-bm_i"
				style={{
					background: `linear-gradient(135deg, var(--primary, #3b82f6) 0%, var(--secondary, #f59e42) 80%)`,
				}}
			>
				<img
					src="/images/product/saas-document-review.jpeg"
					alt="Document Drafting"
					style={{
						position: "absolute",
						left: 100,
						top: 80,
						width: "100%",
						height: "100%",
						borderRadius: "0.5rem",
						objectFit: "cover",
						objectPosition: "top left",
						transform: "scale(1.2)",
					}}
				/>
			</div>
		),
	},
	{
		title: "Clause Intelligence",
		description:
			"Search and reuse approved clauses with real-time risk ratings.",
		className:
			"lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3 sm:col-span-2 flex-col sm:flex-row gap-6 sm:gap-8 min-h-[300px] h-full",
		image: (
			<div
				className="flex-1 relative mb-2 rounded-lg p-1 overflow-hidden min-h-[200px] sm:min-h-[300px] h-full w-full flex items-center justify-center"
				data-oid="dx-bm_i"
				style={{
					background: `linear-gradient(135deg, var(--primary, #3b82f6) 0%, var(--secondary, #f59e42) 80%)`,
				}}
			>
				<img
					src="/images/product/saas-document-clauses.jpeg"
					alt="Document Drafting"
					style={{
						position: "absolute",
						left: 100,
						top: 80,
						width: "100%",
						height: "100%",
						borderRadius: "0.5rem",
						objectFit: "cover",
						objectPosition: "top left",
						transform: "scale(1.2)",
					}}
				/>
			</div>
		),
	},
];

export function ProductFeatures() {
	return (
		<section className="bg-accent py-16 px-4" data-oid="ps_ach7">
			<div className="max-w-6xl mx-auto" data-oid="qegzkry">
				{/* Main Heading */}
				<div className="text-center mb-16" data-oid="7bztr3y">
					<h1
						className="text-2xl sm:text-3xl nk-bold max-w-lg mx-auto"
						data-oid="rf_nwel"
					>
						Everything You Need to Draft & Review Legal Docs
					</h1>
				</div>

				{/* Bento Grid - 4 Cards, always visible */}
				<div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-4 sm:grid-rows-2 lg:grid-rows-2 gap-4 h-auto lg:h-[900px]"
					data-oid="x6opm6w"
				>
					{features.map((feature, i) => (
						<BentoCard
							key={feature.title + i}
							title={feature.title}
							description={feature.description}
							className={
								feature.className +
								"row-span-1 sm:row-span-1 lg:row-span-1 col-span-1 sm:col-span-1 lg:col-span-1"
							}
						>
							{feature.image}
						</BentoCard>
					))}
				</div>
			</div>
		</section>
	);
}
