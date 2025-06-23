import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="overflow-hidden" data-oid="pgf5_gn">
      <div
        className="max-w-7xl mx-auto px-6 py-12 relative container"
        data-oid="lr6fz7u"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-oid=".i.orao"
        >
          {/* Center Content (now left-aligned on tablet/desktop) */}
          <div
            className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
            data-oid="ojo_z0q"
          >
            {/* Art Illustration */}
            <div
              className="flex justify-center lg:justify-start mb-8"
              data-oid="muebfkk"
            ></div>

            <div className="space-y-6" data-oid="tu4iq.u">
              <h1
                className="nk-bold text-4xl lg:text-5xl text-gray-800 leading-tight"
                data-oid="powct5o"
              >
                The AI-Powered Legal Document Assistant Built for Speed,
                Accuracy, and Your Firm’s Unique Style
              </h1>
              <p
                className="font-body text-lg text-gray-700 max-w-xl mx-auto lg:mx-0"
                style={{ marginTop: "1rem" }}
                data-oid=".e.71z_"
              >
                Empower your legal team to draft complex contracts in minutes,
                review with confidence, and accelerate deal cycles—using AI
                trained on real legal precedent and your firm’s templates.
              </p>
              <Button data-oid="g_snmsj">Join the waitlist</Button>
            </div>
          </div>
        </div>
        {/* Right Mobile Mockup - absolutely positioned and larger */}
        <div
          className="lg:fixed lg:bottom-0 lg:right-0 z-10 flex justify-end pointer-events-none lg:w-[100vw] lg:h-[100vh]"
          data-oid="nq9pdhy"
        >
          <div
            className="relative flex items-end justify-end w-full h-full"
            data-oid="tf5konw"
          >
            <div
              className="w-[420px] h-[700px] bg-gray-900 rounded-3xl p-2 hidden lg:block"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
              data-oid="5l5zct0"
            >
              <div
                className="w-full h-full bg-white rounded-2xl overflow-hidden"
                data-oid="ltf:p.o"
              >
                <img
                  src="/placeholder.svg?height=672&width=384"
                  alt="Mobile app interface showing marketplace"
                  width={384}
                  height={672}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                  data-oid="98on3hv"
                />
              </div>
            </div>
            {/* Show a smaller version on mobile/tablet, not fixed */}
            <div
              className="w-[320px] h-[540px] bg-gray-900 rounded-3xl p-2 block lg:hidden mx-auto mt-12 relative pointer-events-auto"
              data-oid="m4y8u3g"
            >
              <div
                className="w-full h-full bg-white rounded-2xl overflow-hidden"
                data-oid=".-vfbr1"
              >
                <img
                  src="/placeholder.svg?height=512&width=288"
                  alt="Mobile app interface showing marketplace"
                  width={288}
                  height={512}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                  data-oid="l:ci:il"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
