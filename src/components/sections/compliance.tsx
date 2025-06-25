import { Button } from "@/components/ui/button";

const badges = [
	{
		src: "/images/badges/iso.png",
		alt: "ISO",
		className: "border-b border-r border-gray-100",
		key: "iso",
	},
	{
		src: "/images/badges/aicpa-soc.png",
		alt: "AICPA SOC",
		className: "border-b border-r border-gray-100",
		key: "soc",
	},
	{
		src: "/images/badges/aicpa-soc-2.png",
		alt: "AICPA SOC 2",
		className: "border-b border-gray-100",
		key: "soc2",
	},
	{
		src: "/images/badges/SOC-2-TYPE-II.png",
		alt: "SOC 2 TYPE II",
		className: "border-r border-gray-100",
		key: "soc2type2",
	},
	{
		src: "/images/badges/gdpr.png",
		alt: "GDPR",
		className: "border-r border-gray-100",
		key: "gdpr",
	},
	{
		src: "/images/badges/ccpa.webp",
		alt: "CCPA",
		className: "",
		key: "ccpa",
	},
];

export function Compliance() {
	return (
		<section className="px-6 pb-16">
			<div
				className="py-10 px-2 flex max-w-6xl justify-center items-center min-h-[400px] rounded-2xl border mx-auto"
				data-oid="myq33w1"
			>
				<div
					className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0"
					data-oid="69tgb8v"
				>
					{/* Left column - Text content */}
					<div
						className="col-span-1 flex flex-col justify-center h-full rounded-l-2xl px-10 pr-6 border-r border-gray-100"
						data-oid="87y802u"
					>
						<h2
							className="text-2xl md:text-3xl nk-bold mb-4"
							data-oid="vev3elf"
						>
							Our certifications say it all.
						</h2>
						<p
							className="text-base text-muted-foreground max-w-xl mb-6"
							data-oid="k3k_0r-"
						>
							No one takes security more seriously than Draftwise AI. That's why
							we work hard to achieve and maintain the highest security
							standards in the industry.
						</p>
						<Button className="w-fit rounded-full" data-oid="d2-66pp">
							Join our waitlist
						</Button>
					</div>

					{/* Right column - Certification badges grid */}
					<div
						className="col-span-2 grid grid-cols-3 grid-rows-2 gap-0 rounded-r-2xl"
						data-oid=":rahuqp"
					>
						{badges.map((badge) => (
							<div
								key={badge.key}
								className={`flex flex-col items-center justify-center p-5 min-h-[120px] ${badge.className}`.trim()}
							>
								<img src={badge.src} alt={badge.alt} className="h-12 mb-2" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
