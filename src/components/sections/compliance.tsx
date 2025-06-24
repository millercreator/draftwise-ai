import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Compliance() {
  return (
    <div className="bg-gray-50 py-16 px-4" data-oid="myq33w1">
      <div className="max-w-7xl mx-auto" data-oid="69tgb8v">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="jhfv8o."
        >
          {/* Left column - Text content */}
          <div className="space-y-6" data-oid="87y802u">
            <h2
              className="text-4xl font-bold text-gray-900 leading-tight"
              data-oid="vev3elf"
            >
              Our certifications say it all.
            </h2>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              data-oid="k3k_0r-"
            >
              No one takes security more seriously than G-P. That's why we work
              hard to achieve and maintain the highest security standards in the
              industry.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
              data-oid="d2-66pp"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" data-oid=".o_hyoj" />
            </Button>
          </div>

          {/* Right column - Certification badges */}
          <div
            className="grid grid-cols-3 gap-8 items-center justify-items-center"
            data-oid=":rahuqp"
          >
            {/* ISO Badge */}
            <div
              className="bg-blue-600 text-white p-4 rounded-lg text-center min-w-[80px] min-h-[80px] flex flex-col items-center justify-center"
              data-oid="surw-l8"
            >
              <div className="text-xs font-semibold mb-1" data-oid="rab_azw">
                ISO
              </div>
              <div
                className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
                data-oid="qj.vg.i"
              >
                <div className="text-xs" data-oid="e8anlx9">
                  🌐
                </div>
              </div>
            </div>

            {/* AICPA SOC Badge 1 */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid="ka0198w"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid="jn2j4t-"
              >
                AICPA
              </div>
              <div
                className="text-lg font-bold text-gray-900"
                data-oid="qcz096s"
              >
                SOC
              </div>
            </div>

            {/* AICPA SOC 2 Badge */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid="6.6xkw7"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid=".s2t2bs"
              >
                AICPA
              </div>
              <div
                className="text-sm font-bold text-gray-900"
                data-oid="4ek:3v5"
              >
                SOC 2
              </div>
            </div>

            {/* SOC 2 TYPE II Badge */}
            <div
              className="flex items-center gap-2 bg-white p-2 rounded-lg border"
              data-oid="wbt7rdg"
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex flex-col items-center justify-center"
                data-oid="i2wlrq_"
              >
                <div
                  className="text-xs font-bold text-gray-600"
                  data-oid="4o1g.e0"
                >
                  AICPA
                </div>
                <div
                  className="text-xs font-bold text-gray-900"
                  data-oid="db4vp0l"
                >
                  SOC
                </div>
              </div>
              <div className="text-left" data-oid="skag1ru">
                <div
                  className="text-sm font-bold text-blue-600"
                  data-oid="i0wsacv"
                >
                  SOC 2
                </div>
                <div className="text-xs text-blue-600" data-oid="havb3-_">
                  TYPE II
                </div>
                <div className="text-xs text-blue-600" data-oid="g3f_fk8">
                  CERTIFIED
                </div>
              </div>
            </div>

            {/* GDPR Badge */}
            <div
              className="w-20 h-20 bg-blue-700 rounded-lg flex flex-col items-center justify-center text-white relative"
              data-oid="la24w21"
            >
              <div className="flex mb-1" data-oid="mm41q.n">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5"
                    data-oid="o1nqdxe"
                  ></div>
                ))}
              </div>
              <div className="text-sm font-bold" data-oid="vlu9dq9">
                GDPR
              </div>
            </div>

            {/* CCPA Badge */}
            <div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white relative"
              data-oid="zfoznrh"
            >
              <div className="text-center" data-oid="ggb0gop">
                <div className="text-sm font-bold" data-oid=".jnecdq">
                  CCPA
                </div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mt-1"
                  data-oid=":4yg9_4"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
