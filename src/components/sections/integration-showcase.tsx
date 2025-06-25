import { Marquee } from "../ui/marquee";

const brandLogos = [
	{
		src: "/images/brand-logos/slack.svg",
		alt: "Alphawave",
		dataOid: "c1-5-qw",
	},
	{
		src: "/images/brand-logos/biosynthesis.svg",
		alt: "Biosynthesis",
		dataOid: "vgx1_6m",
	},
	{
		src: "/images/brand-logos/microsoft-teams-1.svg",
		alt: "Biosynthesis",
		dataOid: "vg23x1_6m",
	},
	{
		src: "/images/brand-logos/salesforce-2.svg",
		alt: "Capsule",
		dataOid: "bpv62v:",
	},
	{
		src: "/images/brand-logos/chromatools.svg",
		alt: "Chromatools",
		dataOid: "vgd5xrg",
	},
	{
		src: "/images/brand-logos/microsoft-6.svg",
		alt: "Clandestine",
		dataOid: "78tftjo",
	},
	{
		src: "/images/brand-logos/microsoft-office-2013.svg",
		alt: "Elasticware",
		dataOid: "1k7aqpq",
	},
];

function BrandLogoImg({
	src,
	alt,
}: {
	src: string;
	alt: string;
	dataOid: string;
}) {
	return (
		<img
			src={src}
			alt={alt}
			className="h-16 md:h-16 aspect-video mr-10"
			data-oid="-ntsp-2"
		/>
	);
}

export function IntegrationShowcase() {
	return (
		<div className="border-y border-border py-8 px-4" data-oid="lkmf585">
			<div
				className="max-w-6xl mx-auto text-center space-y-2"
				data-oid=":-vbywo"
			>
				<h2
					className="text-sm md:text-base font-body text-muted-foreground"
					data-oid="imazo0f"
				>
					Seamlessly connect with the tools and platforms you already use.
				</h2>

				<div className="relative" data-oid="w2h:j22">
					<Marquee
						className="justify-center"
						pauseOnHover
						repeat={10}
						data-oid="egmy0z7"
					>
						{brandLogos.map((logo) => (
							<BrandLogoImg key={logo.alt} {...logo} data-oid="rx3tyhj" />
						))}
					</Marquee>
					{/* Left blur */}
					<div
						className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10"
						data-oid="mtkjl3:"
					/>

					{/* Right blur */}
					<div
						className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10"
						data-oid="dv62wml"
					/>
				</div>
			</div>
		</div>
	);
}
