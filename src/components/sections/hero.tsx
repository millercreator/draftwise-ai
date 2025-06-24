import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      className="overflow-hidden relative w-full sm:h-[700px]"
      data-oid="21vburf"
    >
      <div data-oid="768-uid" className="w-full sm:absolute sm:h-full z-10">
        <div
          className="flex flex-col items-center sm:items-start justify-center sm:justify-start sm:pt-30 h-full max-w-7xl mx-auto px-6 py-12 gap-y-10"
          data-oid=":4or3b5"
        >
          <div
            data-oid="hgp3s2g"
            className="space-y-4 text-center sm:text-start "
          >
            <h1
              className="nk-bold text-4xl lg:text-5xl text-gray-800 leading-tight sm:max-w-md lg:max-w-xl mx-auto sm:mx-0"
              data-oid="02u7.zy"
            >
              AI-Powered Legal Drafting for Your Firm
            </h1>
            <p
              className="font-body text-base lg:text-lg max-w-xl mx-auto sm:mx-0 text-muted-foreground"
              data-oid="qaxs47a"
            >
              Empower your legal team to draft complex contracts in minutes,
              review with confidence, and accelerate deal cycles—using AI
              trained on real legal precedent and your firm’s templates.
            </p>
          </div>
          <Button data-oid="btrhmf5">Join the waitlist</Button>
        </div>
      </div>
      <div
        data-oid="iuuoox8"
        className="flex justify-end w-full sm:absolute sm:h-full h-100 overflow-hidden px-6 pt-6"
      >
        <div
          data-oid="_idoj::"
          className="aspect-square bg-red-500 rounded-xl sm:max-w-5xl relative sm:top-90 w-full sm:left-6/12 lg:left-4/12 xl:left-2/12 2xl:left-1/12 h-[400px] border-8 border-black"
        ></div>{" "}
      </div>
    </section>
  );
}
