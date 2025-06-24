import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 py-16 text-center"
      data-oid="c800ucc"
    >
      {/* Intercom Logo */}
      <div
        className="flex items-center justify-center mb-12"
        data-oid="8sho54:"
      >
        <div className="flex items-center gap-3" data-oid="lfrzs8k">
          <div
            className="w-8 h-8 bg-black rounded-sm flex items-center justify-center"
            data-oid=":2eks72"
          >
            <div
              className="w-5 h-5 bg-white rounded-sm flex items-center justify-center"
              data-oid="5-uj709"
            >
              <div
                className="w-3 h-3 bg-black rounded-sm"
                data-oid="a1v1vq2"
              ></div>
            </div>
          </div>
          <span
            className="text-xl font-semibold tracking-wide"
            data-oid="-770s5_"
          >
            INTERCOM
          </span>
        </div>
      </div>

      {/* Testimonial Quote */}
      <blockquote
        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900 mb-12 max-w-5xl mx-auto"
        data-oid="0db0jy_"
      >
        {
          "\"Partnering with creators through Passionfroot has been a game-changer for Intercom's Startup program. By collaborating with top newsletters, we've reached thousands of founders.\""
        }
      </blockquote>

      {/* Profile Section */}
      <div
        className="flex items-center justify-center gap-4"
        data-oid="o4qfx:l"
      >
        <Avatar className="w-12 h-12" data-oid="agxp.8m">
          <AvatarImage
            src="/placeholder.svg?height=48&width=48"
            alt="John Roche"
            data-oid="w394w9z"
          />

          <AvatarFallback data-oid="kuvlb7k">JR</AvatarFallback>
        </Avatar>
        <div className="text-left" data-oid="z3j3j-1">
          <div className="font-semibold text-gray-900" data-oid="9cpme_.">
            John Roche
          </div>
          <div className="text-gray-600 text-sm" data-oid="l2.jfq6">
            Startups and VC Partnerships at Intercom
          </div>
        </div>
      </div>
    </div>
  );
}
