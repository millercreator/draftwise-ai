import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Compliance() {
  return (
    <div className="bg-gray-50 py-16 px-4" data-oid="-qqops9">
      <div className="max-w-7xl mx-auto" data-oid="brns59o">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="6nwb_c3"
        >
          {/* Left column - Text content */}
          <div className="space-y-6" data-oid="7et972w">
            <h2
              className="text-4xl font-bold text-gray-900 leading-tight"
              data-oid="zpkwrkl"
            >
              Our certifications say it all.
            </h2>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              data-oid="w9m5_af"
            >
              No one takes security more seriously than G-P. That's why we work
              hard to achieve and maintain the highest security standards in the
              industry.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
              data-oid="v-mkmf7"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" data-oid="krrz-bj" />
            </Button>
          </div>

          {/* Right column - Certification badges */}
          <div
            className="grid grid-cols-3 gap-8 items-center justify-items-center"
            data-oid="9t9-bo8"
          >
            {/* ISO Badge */}
            <div
              className="bg-blue-600 text-white p-4 rounded-lg text-center min-w-[80px] min-h-[80px] flex flex-col items-center justify-center"
              data-oid="otn155x"
            >
              <div className="text-xs font-semibold mb-1" data-oid="0v3tnkn">
                ISO
              </div>
              <div
                className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
                data-oid="h.s0og7"
              >
                <div className="text-xs" data-oid="b9pu.wm">
                  🌐
                </div>
              </div>
            </div>

            {/* AICPA SOC Badge 1 */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid=".pyw94j"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid="6477wb:"
              >
                AICPA
              </div>
              <div
                className="text-lg font-bold text-gray-900"
                data-oid="9dnxf3y"
              >
                SOC
              </div>
            </div>

            {/* AICPA SOC 2 Badge */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid="f8pxqj5"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid="r4i-y.z"
              >
                AICPA
              </div>
              <div
                className="text-sm font-bold text-gray-900"
                data-oid="w6-dbuv"
              >
                SOC 2
              </div>
            </div>

            {/* SOC 2 TYPE II Badge */}
            <div
              className="flex items-center gap-2 bg-white p-2 rounded-lg border"
              data-oid="8e.zdwq"
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex flex-col items-center justify-center"
                data-oid="5ty_h24"
              >
                <div
                  className="text-xs font-bold text-gray-600"
                  data-oid="eiodhba"
                >
                  AICPA
                </div>
                <div
                  className="text-xs font-bold text-gray-900"
                  data-oid="sddzmjx"
                >
                  SOC
                </div>
              </div>
              <div className="text-left" data-oid="5j.okg:">
                <div
                  className="text-sm font-bold text-blue-600"
                  data-oid="zd7oe:4"
                >
                  SOC 2
                </div>
                <div className="text-xs text-blue-600" data-oid=":kjb_tc">
                  TYPE II
                </div>
                <div className="text-xs text-blue-600" data-oid="93wmki5">
                  CERTIFIED
                </div>
              </div>
            </div>

            {/* GDPR Badge */}
            <div
              className="w-20 h-20 bg-blue-700 rounded-lg flex flex-col items-center justify-center text-white relative"
              data-oid="cr-1xje"
            >
              <div className="flex mb-1" data-oid="2e1mj7u">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5"
                    data-oid="-q3mt.e"
                  ></div>
                ))}
              </div>
              <div className="text-sm font-bold" data-oid="afcj94v">
                GDPR
              </div>
            </div>

            {/* CCPA Badge */}
            <div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white relative"
              data-oid="x7l3:k:"
            >
              <div className="text-center" data-oid="va2ynqu">
                <div className="text-sm font-bold" data-oid="_0fnqvh">
                  CCPA
                </div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mt-1"
                  data-oid="0vzuqqj"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
