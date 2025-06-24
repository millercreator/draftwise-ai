import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      className="overflow-hidden relative w-full sm:h-[700px]"
      data-oid="0ov_rwh"
    >
      <div className="w-full sm:absolute sm:h-full z-10" data-oid="q5vged0">
        <div
          className="flex flex-col items-center sm:items-start justify-center sm:justify-start sm:pt-30 h-full max-w-7xl mx-auto px-6 py-12 gap-y-10"
          data-oid="8qm:cau"
        >
          <div
            className="space-y-4 text-center sm:text-start "
            data-oid="hqr7imq"
          >
            <h1
              className="nk-bold text-4xl lg:text-5xl leading-tight sm:max-w-md lg:max-w-xl mx-auto sm:mx-0"
              data-oid="wh0zn2h"
            >
              AI-Powered Legal Drafting for Your Firm
            </h1>
            <p
              className="font-body text-base lg:text-lg max-w-xl mx-auto sm:mx-0 text-muted-foreground"
              data-oid="ocsunpu"
            >
              Empower your legal team to draft complex contracts in minutes,
              review with confidence, and accelerate deal cycles—using AI
              trained on real legal precedent and your firm’s templates.
            </p>
          </div>
          <Button data-oid=":xoqo7g">Join the waitlist</Button>
        </div>
      </div>
      <div
        className="flex justify-end w-full sm:absolute sm:h-full h-100 overflow-hidden px-6 pt-6"
        data-oid=":2j-bm-"
      >
        <div
          className="aspect-square rounded-xl sm:max-w-5xl relative sm:top-90 w-full sm:left-6/12 lg:left-4/12 xl:left-2/12 2xl:left-1/12 h-[400px] border-8 border-black"
          data-oid="r9isjy."
        >
          <img
            className="w-full h-full object-cover"
            src="/images/product/cover.png"
            data-oid="gpg_27x"
          />
        </div>{" "}
      </div>
    </section>
  );
}
