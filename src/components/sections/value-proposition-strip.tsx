export function ValuePropositionStrip() {
	const values = [
		{
			// ⚡
			icon: "/images/illustrations/icons8-lightning-100.png",
			title: "First Drafts in Seconds",
			description:
				"Generate complete legal documents instantly from a simple prompt.",
		},
		{
			icon: "/images/illustrations/icons8-brain-100.png",
			title: "Built-in Legal Intelligence",
			description: "Spot risks and non-standard language in real time.",
		},
		{
			// 🏛️
			icon: "/images/illustrations/icons8-gear-100.png",
			title: "Firm-Specific Customization",
			description: "AI learns your templates, standards, and tone.",
		},
		{
			// 🔐
			icon: "/images/illustrations/icons8-lock-100.png",
			title: "Secure & Private",
			description: "Fully encrypted, with on-prem or cloud deployment.",
		},
		{
			// 📈
			icon: "/images/illustrations/icons8-improvement-100.png",
			title: "Proven ROI",
			description: "Cut turnaround time by 60% and boost output per lawyer.",
		},
	];

	return (
		<section className="px-6 py-16" data-oid="-:llb9:">
			<div className="max-w-6xl mx-auto" data-oid="uqv7alc">
				<div
					className="flex flex-col md:flex-row sm:items-start sm:justify-between gap-4 mb-12"
					data-oid="ab3yfgu"
				>
					<h1
						className="text-2xl sm:text-3xl max-w-sm nk-bold"
						data-oid="mrli6o4"
					>
						What can Draftwise AI do for your legal team?
					</h1>
					<p
						className="text-muted-foreground max-w-md text-base md:ml-auto md:self-start"
						data-oid="r_l6wcp"
					>
						Empower your legal team with fast drafting, smart risk detection,
						and secure customization.
					</p>
				</div>

				<div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
					data-oid="uadza1_"
				>
					{values.map((value, index) => (
						<div key={index} className="space-y-6" data-oid="qxyeiwg">
							<img
								src={value.icon}
								alt={value.title}
								className="w-16 h-16 rounded-full"
								data-oid="icon-image"
							/>
							{/* Title and description */}
							<div className="space-y-2" data-oid="-rijalq">
								<h3
									className="text-xl md:text-xl nk-semibold"
									data-oid="p3kxucf"
								>
									{value.title}
								</h3>
								<p
									className="text-muted-foreground max-w-sm"
									data-oid="si0ah3f"
								>
									{value.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
