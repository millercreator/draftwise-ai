const footerLinks = [
	{
		heading: "PRODUCT",
		links: [
			{ label: "Features" },
			{ label: "Use Cases" },
			{ label: "Integrations" },
		],
	},
	{
		heading: "COMPANY",
		links: [{ label: "About" }, { label: "Careers" }, { label: "Blog" }],
	},
	{
		heading: "LEGAL",
		links: [{ label: "Terms" }, { label: "Privacy" }, { label: "Security" }],
	},
	{
		heading: "SOCIAL",
		links: [{ label: "LinkedIn" }, { label: "Twitter" }],
	},
	{
		heading: "CONTACT",
		links: [{ label: "Email" }, { label: "Support" }],
	},
];

const legalLinks = ["Privacy", "Cookies", "Terms", "Website terms"];

export function Footer() {
	return (
		<footer className="bg-black text-white pt-16 pb-8 text-sm">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-12">
				{/* Logo */}
				<div className="min-w-[200px] md:mr-8 mb-8 md:mb-0 flex-shrink-0">
					<div className="flex items-center mb-8 md:mb-8">
						<svg
							width="40"
							height="32"
							viewBox="0 0 40 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.5 16.5L18.5 3.5C19.5 2.5 21 2.5 22 3.5L33 16.5"
								stroke="#2FE6A6"
								strokeWidth="4"
								strokeLinecap="round"
							/>
							<rect
								x="0.5"
								y="19.5"
								width="39"
								height="12"
								rx="6"
								fill="#2FE6A6"
							/>
						</svg>
						<span className="font-bold ml-3 tracking-[0.5px] text-sm">
							Plain
						</span>
					</div>
				</div>
				{/* Columns */}
				<div className="w-full flex flex-col sm:flex-row flex-wrap gap-8">
					{footerLinks.map((col, i) => (
						<div
							key={col.heading}
							className={`min-w-[140px] w-full sm:w-auto ${
								i === 0 ? "sm:mr-12" : ""
							}`}
						>
							<div className="text-muted-foreground tracking-[1.5px] mb-4 font-medium text-sm">
								{col.heading}
							</div>
							<ul className="list-none p-0 m-0">
								{col.links.map((link) => (
									<li
										key={link.label}
										className="mb-3 text-white text-sm tracking-[0.1px] cursor-pointer hover:text-primary transition-colors"
									>
										{link.label}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			{/* Legal links */}
			<div className="max-w-7xl mx-auto mt-8 px-4 md:px-12 flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground text-sm">
				{legalLinks.map((l) => (
					<span key={l} className="mr-3 whitespace-nowrap text-sm">
						{l}
					</span>
				))}
			</div>
			{/* Copyright */}
			<div className="max-w-7xl mx-auto mt-4 px-4 md:px-12 text-muted-foreground text-sm">
				© 2025 Draftwise AI. All rights reserved.
			</div>
		</footer>
	);
}
