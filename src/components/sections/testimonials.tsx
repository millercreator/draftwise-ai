import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 py-16 text-center"
      data-oid="jnz.4mt"
    >
      {/* Intercom Logo */}
      <div
        className="flex items-center justify-center mb-12"
        data-oid="2cbwz8y"
      >
        <div className="flex items-center gap-3" data-oid="tniip79">
          <div
            className="w-8 h-8 bg-black rounded-sm flex items-center justify-center"
            data-oid="fc--h3a"
          >
            <div
              className="w-5 h-5 bg-white rounded-sm flex items-center justify-center"
              data-oid="7h-i9tf"
            >
              <div
                className="w-3 h-3 bg-black rounded-sm"
                data-oid="9nrtchd"
              ></div>
            </div>
          </div>
          <span
            className="text-xl font-semibold tracking-wide"
            data-oid=":m849h3"
          >
            INTERCOM
          </span>
        </div>
      </div>

      {/* Testimonial Quote */}
      <blockquote
        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900 mb-12 max-w-5xl mx-auto"
        data-oid="x1l5bei"
      >
        {
          "\"Partnering with creators through Passionfroot has been a game-changer for Intercom's Startup program. By collaborating with top newsletters, we've reached thousands of founders.\""
        }
      </blockquote>

      {/* Profile Section */}
      <div
        className="flex items-center justify-center gap-4"
        data-oid=":-4a-00"
      >
        <Avatar className="w-12 h-12" data-oid="5mcezm6">
          <AvatarImage
            src="/placeholder.svg?height=48&width=48"
            alt="John Roche"
            data-oid="f.avx5_"
          />

          <AvatarFallback data-oid="71tt.qb">JR</AvatarFallback>
        </Avatar>
        <div className="text-left" data-oid="7f-f4th">
          <div className="font-semibold text-gray-900" data-oid="6wdaki5">
            John Roche
          </div>
          <div className="text-gray-600 text-sm" data-oid="t28cy7a">
            Startups and VC Partnerships at Intercom
          </div>
        </div>
      </div>
    </div>
  );
}
