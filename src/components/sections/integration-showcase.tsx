import { Marquee } from "../ui/marquee";

export function IntegrationShowcase() {
  return (
    <div className="bg-neutral-50 py-8 px-4" data-oid="z:i7nu.">
      <div
        className="max-w-6xl mx-auto text-center space-y-2"
        data-oid="cstk3:3"
      >
        <h2
          className="text-sm font-body text-muted-foreground"
          data-oid="ewct9fu"
          key="olk-eNZW"
        >
          Works with your stack
        </h2>

        <div className="relative" data-oid="qkl0tnh">
          <Marquee
            className="justify-center"
            pauseOnHover
            repeat={10}
            data-oid="94nd.0i"
          >
            <img
              src="/images/brand-logos/alphawave.svg"
              alt="Alphawave"
              className="h-16 aspect-video mr-10"
              data-oid="c1-5-qw"
            />

            <img
              src="/images/brand-logos/biosynthesis.svg"
              alt="Biosynthesis"
              className="h-16 aspect-video mr-10"
              data-oid="vgx1_6m"
            />

            <img
              src="/images/brand-logos/capsule.svg"
              alt="Capsule"
              className="h-16 aspect-video mr-10"
              data-oid="bpv62v:"
            />

            <img
              src="/images/brand-logos/chromatools.svg"
              alt="Chromatools"
              className="h-16 aspect-video mr-10"
              data-oid="vgd5xrg"
            />

            <img
              src="/images/brand-logos/clandestine.svg"
              alt="Clandestine"
              className="h-16 aspect-video mr-10"
              data-oid="78tftjo"
            />

            <img
              src="/images/brand-logos/elasticware.svg"
              alt="Elasticware"
              className="h-16 aspect-video mr-10"
              data-oid="1k7aqpq"
            />
          </Marquee>
          {/* Left blur */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent z-10"
            data-oid="_12o:7h"
          />

          {/* Right blur */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent z-10"
            data-oid="m:advdc"
          />
        </div>
      </div>
    </div>
  );
}
