import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CaseStudy() {
  return (
    <div className="m-8" data-oid="hk-hot7">
      <Card className="bg-orange-50 shadow-lg" data-oid="1suyv7y">
        <CardContent className="p-8 lg:p-16" data-oid="x3u.1ty">
          <div className="max-w-7xl mx-auto" data-oid="o-f5ou3">
            <div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              data-oid="lj1qrgk"
            >
              {/* Left Content */}
              <div className="space-y-8" data-oid="n_yhkg1">
                {/* Logo */}
                <div
                  className="text-2xl font-bold text-gray-900 tracking-wide"
                  data-oid="r5srd6o"
                >
                  VENROY
                </div>

                {/* Main Headline */}
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                  data-oid="mra2xzw"
                >
                  With Flagship, Venroy has raised the bar in visual
                  merchandising.
                </h1>

                {/* Description */}
                <p
                  className="text-lg text-gray-700 leading-relaxed max-w-lg"
                  data-oid="i5wbt9f"
                >
                  Venroy has elevated their visual merchandising, blending speed
                  with precision by using Flagship across all their stores. For
                  Venroy, collaboration in Flagship enhances aesthetics, fosters
                  accountability, and maintains brand consistency, from
                  Australia's cities to the beaches of Montauk and Capri.
                </p>

                {/* Statistics */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4"
                  data-oid="xsh9f36"
                >
                  <div data-oid="vvpug8h">
                    <div className="flex items-baseline" data-oid="sr_3_4z">
                      <span
                        className="text-6xl lg:text-7xl font-bold text-orange-500"
                        data-oid=".1ix36v"
                      >
                        83
                      </span>
                      <span
                        className="text-3xl lg:text-4xl font-bold text-orange-500 ml-1"
                        data-oid="67go:8j"
                      >
                        %
                      </span>
                    </div>
                    <p
                      className="text-gray-700 mt-2 text-sm leading-relaxed"
                      data-oid="-.3_op5"
                    >
                      Reduction in time required by VM team to physically visit
                      stores.
                    </p>
                  </div>

                  <div data-oid="l4i8est">
                    <div className="flex items-baseline" data-oid="ii1ohsu">
                      <span
                        className="text-6xl lg:text-7xl font-bold text-orange-500"
                        data-oid="hf74vbj"
                      >
                        50
                      </span>
                      <span
                        className="text-3xl lg:text-4xl font-bold text-orange-500 ml-1"
                        data-oid="agustaz"
                      >
                        %
                      </span>
                    </div>
                    <p
                      className="text-gray-700 mt-2 text-sm leading-relaxed"
                      data-oid="sidpvr5"
                    >
                      Reduction in time spent executing in-store VM.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4" data-oid="c8lvxv0">
                  <Button
                    className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-base font-medium"
                    data-oid="spjro3l"
                  >
                    View full customer story
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative" data-oid="nl0w7er">
                <div
                  className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                  data-oid="9-k57r9"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2016.png-bX2HMDHrNW9W72mXqo9KGKZwevBW8e.jpeg"
                    alt="Two people in a vibrant retail environment with colorful murals and artistic decorations"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                    data-oid="2_h6xe0"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
