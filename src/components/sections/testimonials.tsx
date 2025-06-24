import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 py-16 text-center"
      data-oid="pjxhvy8"
    >
      {/* Intercom Logo */}
      <div
        className="flex items-center justify-center mb-12"
        data-oid="wu0hbcb"
      >
        <div className="flex items-center gap-3" data-oid="7p95.y.">
          <div
            className="w-8 h-8 bg-black rounded-sm flex items-center justify-center"
            data-oid="5dvisl."
          >
            <div
              className="w-5 h-5 bg-white rounded-sm flex items-center justify-center"
              data-oid="4fzd-45"
            >
              <div
                className="w-3 h-3 bg-black rounded-sm"
                data-oid="m50vf:_"
              ></div>
            </div>
          </div>
          <span
            className="text-xl font-semibold tracking-wide"
            data-oid="1wxec58"
          >
            INTERCOM
          </span>
        </div>
      </div>

      {/* Testimonial Quote */}
      <blockquote
        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900 mb-12 max-w-5xl mx-auto"
        data-oid="bpe5pam"
      >
        {
          "\"Partnering with creators through Passionfroot has been a game-changer for Intercom's Startup program. By collaborating with top newsletters, we've reached thousands of founders.\""
        }
      </blockquote>

      {/* Profile Section */}
      <div
        className="flex items-center justify-center gap-4"
        data-oid="8do:yle"
      >
        <Avatar className="w-12 h-12" data-oid="g17uxey">
          <AvatarImage
            src="/placeholder.svg?height=48&width=48"
            alt="John Roche"
            data-oid="gxktbfk"
          />

          <AvatarFallback data-oid="euh6vc8">JR</AvatarFallback>
        </Avatar>
        <div className="text-left" data-oid="j4layrg">
          <div className="font-semibold text-gray-900" data-oid="0d85-bz">
            John Roche
          </div>
          <div className="text-gray-600 text-sm" data-oid="rnswvwy">
            Startups and VC Partnerships at Intercom
          </div>
        </div>
      </div>
    </div>
  );
}
