import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Compliance() {
  return (
    <div className="bg-gray-50 py-16 px-4" data-oid="0sd3b_q">
      <div className="max-w-7xl mx-auto" data-oid="m4d3uo7">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="320w1gd"
        >
          {/* Left column - Text content */}
          <div className="space-y-6" data-oid="in8do8u">
            <h2
              className="text-4xl font-bold text-gray-900 leading-tight"
              data-oid="od.wczj"
            >
              Our certifications say it all.
            </h2>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              data-oid="x-5mkdt"
            >
              No one takes security more seriously than G-P. That's why we work
              hard to achieve and maintain the highest security standards in the
              industry.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
              data-oid="pcu:pmp"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" data-oid="7l.y3aa" />
            </Button>
          </div>

          {/* Right column - Certification badges */}
          <div
            className="grid grid-cols-3 gap-8 items-center justify-items-center"
            data-oid="h6pc_.8"
          >
            {/* ISO Badge */}
            <div
              className="bg-blue-600 text-white p-4 rounded-lg text-center min-w-[80px] min-h-[80px] flex flex-col items-center justify-center"
              data-oid="mqjnrod"
            >
              <div className="text-xs font-semibold mb-1" data-oid="99a1naw">
                ISO
              </div>
              <div
                className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
                data-oid="hhxwv1_"
              >
                <div className="text-xs" data-oid="prvk_iq">
                  🌐
                </div>
              </div>
            </div>

            {/* AICPA SOC Badge 1 */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid="6z30a4m"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid="n0uagu3"
              >
                AICPA
              </div>
              <div
                className="text-lg font-bold text-gray-900"
                data-oid="33f_e40"
              >
                SOC
              </div>
            </div>

            {/* AICPA SOC 2 Badge */}
            <div
              className="w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white"
              data-oid="4.f1lr8"
            >
              <div
                className="text-xs font-bold text-blue-600"
                data-oid="wpb.e9v"
              >
                AICPA
              </div>
              <div
                className="text-sm font-bold text-gray-900"
                data-oid="pn2pqjc"
              >
                SOC 2
              </div>
            </div>

            {/* SOC 2 TYPE II Badge */}
            <div
              className="flex items-center gap-2 bg-white p-2 rounded-lg border"
              data-oid="mtdv99c"
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex flex-col items-center justify-center"
                data-oid="y1u8tgc"
              >
                <div
                  className="text-xs font-bold text-gray-600"
                  data-oid="jxa.yx_"
                >
                  AICPA
                </div>
                <div
                  className="text-xs font-bold text-gray-900"
                  data-oid="pkibvi3"
                >
                  SOC
                </div>
              </div>
              <div className="text-left" data-oid="nditoil">
                <div
                  className="text-sm font-bold text-blue-600"
                  data-oid="4.0m56s"
                >
                  SOC 2
                </div>
                <div className="text-xs text-blue-600" data-oid="-mrc-cw">
                  TYPE II
                </div>
                <div className="text-xs text-blue-600" data-oid="j3zbg5-">
                  CERTIFIED
                </div>
              </div>
            </div>

            {/* GDPR Badge */}
            <div
              className="w-20 h-20 bg-blue-700 rounded-lg flex flex-col items-center justify-center text-white relative"
              data-oid="rld6sqf"
            >
              <div className="flex mb-1" data-oid="ef1y_w-">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5"
                    data-oid="71h_hdf"
                  ></div>
                ))}
              </div>
              <div className="text-sm font-bold" data-oid="4zivx1w">
                GDPR
              </div>
            </div>

            {/* CCPA Badge */}
            <div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white relative"
              data-oid="d3bxa-."
            >
              <div className="text-center" data-oid="txfq-pf">
                <div className="text-sm font-bold" data-oid="k7eyu7v">
                  CCPA
                </div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mt-1"
                  data-oid="jj6kv.r"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
