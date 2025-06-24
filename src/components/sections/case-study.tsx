import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CaseStudy() {
  return (
    <div className="m-8" data-oid="s:ph_h:">
      <Card className="bg-orange-50 shadow-lg" data-oid="rahev64">
        <CardContent className="p-8 lg:p-16" data-oid="3mej_d-">
          <div className="max-w-7xl mx-auto" data-oid="_6qmalm">
            <div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              data-oid="hb0y423"
            >
              {/* Left Content */}
              <div className="space-y-8" data-oid=":j80opu">
                {/* Logo */}
                <div
                  className="text-2xl font-bold text-gray-900 tracking-wide"
                  data-oid="de7-x08"
                >
                  VENROY
                </div>

                {/* Main Headline */}
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                  data-oid="x314ehs"
                >
                  With Flagship, Venroy has raised the bar in visual
                  merchandising.
                </h1>

                {/* Description */}
                <p
                  className="text-lg text-gray-700 leading-relaxed max-w-lg"
                  data-oid="-47wam."
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
                  data-oid="_sjmm_f"
                >
                  <div data-oid="tc10.re">
                    <div className="flex items-baseline" data-oid="r_x19va">
                      <span
                        className="text-6xl lg:text-7xl font-bold text-orange-500"
                        data-oid="41jud:d"
                      >
                        83
                      </span>
                      <span
                        className="text-3xl lg:text-4xl font-bold text-orange-500 ml-1"
                        data-oid="_fvcy_i"
                      >
                        %
                      </span>
                    </div>
                    <p
                      className="text-gray-700 mt-2 text-sm leading-relaxed"
                      data-oid="mh6.7u2"
                    >
                      Reduction in time required by VM team to physically visit
                      stores.
                    </p>
                  </div>

                  <div data-oid="nt6o:oj">
                    <div className="flex items-baseline" data-oid="rla75wn">
                      <span
                        className="text-6xl lg:text-7xl font-bold text-orange-500"
                        data-oid="jilfur5"
                      >
                        50
                      </span>
                      <span
                        className="text-3xl lg:text-4xl font-bold text-orange-500 ml-1"
                        data-oid="qi53shi"
                      >
                        %
                      </span>
                    </div>
                    <p
                      className="text-gray-700 mt-2 text-sm leading-relaxed"
                      data-oid="pfh5-8l"
                    >
                      Reduction in time spent executing in-store VM.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4" data-oid="iog:fe_">
                  <Button
                    className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-base font-medium"
                    data-oid="6sazr:p"
                  >
                    View full customer story
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative" data-oid="806_p.g">
                <div
                  className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                  data-oid="cji_:t6"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2016.png-bX2HMDHrNW9W72mXqo9KGKZwevBW8e.jpeg"
                    alt="Two people in a vibrant retail environment with colorful murals and artistic decorations"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                    data-oid="sl:dc99"
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
