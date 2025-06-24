import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

const testimonials = [
	{
		quote: "It’s a game-changer for legal teams, enabling them to draft and review contracts with unprecedented speed and accuracy.",
		name: "John Roche",
		title: "Startups and VC Partnerships at Intercom",
		avatar: {
			src: "https://i.pravatar.cc/200?img=3",
			alt: "John Roche",
			fallback: "JR",
		},
	},
	{
		quote: "Draftwise has transformed the way our team collaborates on contracts. The efficiency gains are remarkable!",
		name: "Jane Smith",
		title: "General Counsel at Capsule",
		avatar: {
			src: "https://i.pravatar.cc/200?img=3",
			alt: "Jane Smith",
			fallback: "JS",
		},
	},
	{
		quote: "The AI-powered suggestions are spot on and save us hours every week.",
		name: "Alex Kim",
		title: "Legal Operations at Chromatools",
		avatar: {
			src: "https://i.pravatar.cc/200?img=4",
			alt: "Alex Kim",
			fallback: "AK",
		},
	}
];

export function Testimonials() {
	const [api, setApi] = React.useState<CarouselApi>();

	const handlePrev = () => {
		if (api) api.scrollPrev();
	};
	const handleNext = () => {
		if (api) api.scrollNext();
	};

	return (
		<div
			className="max-w-6xl mx-auto px-6 py-20 text-center"
			data-oid="jnz.4mt"
		>
			<Carousel
				className="w-full"
				opts={{ loop: true }}
				plugins={[
					Autoplay({ delay: 5000 }),
				]}
				setApi={setApi}
			>
				<CarouselContent>
					{testimonials.map((t, i) => (
						<CarouselItem key={i}>
							<div className="mb-16 flex flex-col items-center justify-center">
								{/* Testimonial Quote */}
								<blockquote
									className="nk-medium text-3xl md:text-4xl mb-12 max-w-3xl mx-auto"
									data-oid="x1l5bei"
								>
									{`"${t.quote}"`}
								</blockquote>
								{/* Profile Section */}
								<div
									className="flex items-center justify-center gap-4"
									data-oid=":-4a-00"
								>
									<Avatar className="size-10" data-oid="5mcezm6">
										<AvatarImage
											src={t.avatar.src}
											alt={t.avatar.alt}
											data-oid="f.avx5_"
										/>
										<AvatarFallback data-oid="71tt.qb">
											{t.avatar.fallback}
										</AvatarFallback>
									</Avatar>
									<div className="text-left font-body" data-oid="7f-f4th">
										<div className="font-semibold text-sm" data-oid="6wdaki5">
											{t.name}
										</div>
										<div className="text-muted-foreground text-sm" data-oid="t28cy7a">
											{t.title}
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="flex justify-center items-center gap-4 mt-6">
				<button
					onClick={handlePrev}
					className="inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition h-10 w-10"
					aria-label="Previous testimonial"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={handleNext}
					className="inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition h-10 w-10"
					aria-label="Next testimonial"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
