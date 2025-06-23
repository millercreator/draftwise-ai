export function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12" data-oid="ydu18le">
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        data-oid="5wv71oa"
      >
        {/* Left Image */}
        <div className="lg:col-span-1" data-oid="sfu7mal">
          <div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            data-oid="zk99r4e"
          >
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Couple using laptop together"
              width={500}
              height={400}
              className="object-cover w-full h-full"
              style={{ display: "block" }}
              data-oid="4m10120"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="lg:col-span-1 text-center space-y-8" data-oid="-cw3pg:">
          {/* Art Illustration */}
          <div className="flex justify-center mb-8" data-oid=".z7xyv."></div>

          <div className="space-y-6" data-oid="e0j17kh">
            <h1
              className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
              data-oid="z7s106w"
            >
              Powerful banking,
              <br data-oid="qk3h7k6" />
              for the ambitious
            </h1>

            <Button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-md"
              data-oid="i_33rr5"
            >
              Join the waitlist
            </Button>

            <p
              className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto"
              data-oid="36x9:49"
            >
              Open a business account in minutes, from your phone.
              <br data-oid="z7gwa_q" />
              Without going to the bank. Your all-in-one account, with all
              <br data-oid="bj-g41q" />
              essentials - No hidden fees.
            </p>
          </div>
        </div>

        {/* Right Mobile Mockup */}
        <div className="lg:col-span-1 flex justify-center" data-oid="4cww862">
          <div className="relative" data-oid="s:ua2fa">
            <div
              className="w-80 h-96 bg-gray-900 rounded-3xl p-2"
              data-oid="za.f0yq"
            >
              <div
                className="w-full h-full bg-white rounded-2xl overflow-hidden"
                data-oid="c18k_8."
              >
                <img
                  src="/placeholder.svg?height=384&width=320"
                  alt="Mobile app interface showing marketplace"
                  width={320}
                  height={384}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                  data-oid="r5yey76"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
