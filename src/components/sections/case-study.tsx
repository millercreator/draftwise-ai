import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Reusable CaseStudyCard component
export function CaseStudyCard({
  title,
  description,
  stats,
  imageUrl,
  imageAlt,
  ctaText,
  onCtaClick,
}: {
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  onCtaClick?: () => void;
}) {
  return (
    <Card className="bg-orange-50 shadow-lg max-w-7xl mx-auto w-full" data-oid="m079uz3">
      <CardContent className="p-4 sm:p-8 lg:p-16" data-oid="w3nhvnm">
        <div className="max-w-7xl mx-auto" data-oid="swiyybl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-oid="9ahiumd">
            {/* Left Content */}
            <div className="space-y-8" data-oid=".ueqt1a">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl nk-bold" data-oid="5aqjsab">
                {title}
              </h1>
              {/* Description */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg" data-oid="hmt3eph">
                {description}
              </p>
              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2" data-oid="5.ojdz_">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex items-baseline">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-500">{stat.value}</span>
                    </div>
                    <p className="text-gray-700 mt-2 text-sm leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-base font-medium"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </Button>
              </div>
            </div>
            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0" data-oid="3p:jtpc">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                  data-oid="4pv.pia"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Case study data array
const caseStudies = [
  {
    title: "“DraftWise is like having a senior associate inside every document.”",
    description:
      "DraftWise empowers legal teams to work smarter and faster. With intelligent document review and drafting, firms can ensure accuracy, consistency, and efficiency at every step.",
    stats: [
      {
        value: "4x",
        label: "Faster NDA drafting for legal teams.",
      },
      {
        value: "100+",
        label: "Top law firms and enterprises trust DraftWise.",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    imageAlt:
      "Professional legal team collaborating over documents in a modern office",
    ctaText: "See how DraftWise works",
  },
];

export function CaseStudy() {
  return (
    <div className="m-2 sm:m-4 md:m-8" data-oid="gvhxu46">
      <CaseStudyCard
        {...caseStudies[0]}
      />
    </div>
  );
}
