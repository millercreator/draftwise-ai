import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      className="overflow-hidden relative w-full sm:h-[700px]"
      data-oid="xy1z3pc"
    >
      {/* Swirl background behind image, not covering text/button */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 right-0 top-0 h-full w-[80vw] sm:w-[55vw] flex items-center"
        style={{
          opacity: 0.5,
          WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 600 700\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M600,0 Q400,350 600,700 Q300,600 0,700 Q200,350 0,0 Q300,100 600,0 Z\' fill=\'black\'/></svg>")',
          maskImage: 'url("data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 600 700\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M600,0 Q400,350 600,700 Q300,600 0,700 Q200,350 0,0 Q300,100 600,0 Z\' fill=\'black\'/></svg>")',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
        }}
      >
        <div className="w-full h-full bg-primary opacity-90" />
      </div>
      <div className="w-full sm:absolute sm:h-full z-100 pt-[100px] sm:pt-0" data-oid="ci:hspd">
        <div
          className="flex flex-col items-center sm:items-start justify-center sm:justify-start sm:pt-30 h-full max-w-7xl mx-auto px-6 py-12 gap-y-10"
          data-oid="xcdo68m"
        >
          <div
            className="space-y-4 text-center sm:text-start relative"
            data-oid="ooeyafg"
          >
            <h1
              className="nk-bold text-4xl lg:text-5xl leading-tight sm:max-w-md lg:max-w-xl mx-auto sm:mx-0 relative"
              data-oid="-7rps9y"
            >
              AI-Powered Legal Drafting for Your Firm
            </h1>
            <p
              className="font-body text-base lg:text-lg max-w-xl mx-auto sm:mx-0 text-muted-foreground relative"
              data-oid="pq4rlom"
            >
              Empower your legal team to draft complex contracts in minutes,
              review with confidence, and accelerate deal cycles—using AI
              trained on real legal precedent and your firm’s templates.
            </p>
          </div>
          <Button data-oid="43rry3k" className="rounded-full relative">Join the waitlist</Button>
        </div>
      </div>
      <div
        className="flex justify-end w-full sm:absolute sm:h-full h-100 overflow-hidden px-6 pt-6"
        data-oid="pf.vyy3"
      >
        <div
          className="aspect-square rounded-xl outline-8  sm:max-w-5xl relative sm:top-90 w-full sm:left-6/12 lg:left-4/12 xl:left-2/12 2xl:left-1/12 h-[400px] outline-black"
          data-oid="o9lbeo0"
        >
          <img
            className="w-full h-full object-top object-cover"
            src="/images/product/saas-dashboard.jpeg"
            data-oid="chlt3n8"
          />
        </div>{" "}
      </div>
    </section>
  );
}
