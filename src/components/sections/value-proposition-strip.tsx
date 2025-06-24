import { Globe, Hand, Leaf, Sun, Users, Waves } from "lucide-react";

export function ValuePropositionStrip() {
  const values = [
    {
      icon: Users,
      title: "Respect one another",
      description:
        "We respect everyone we work with and ask for that in return to collectively help make our world a better place.",
    },
    {
      icon: Leaf,
      title: "Grow together",
      description:
        "We're in this together, and we'll grow together. We provide our expertise to help you however possible.",
    },
    {
      icon: Sun,
      title: "Always honest",
      description:
        "We ensure an open and honest environment is provided, so every voice is heard.",
    },
    {
      icon: Hand,
      title: "Few, not many",
      description:
        "A small, close-knit team is more unified than a larger one. The few we hire are experts in their field.",
    },
    {
      icon: Waves,
      title: "Make a difference",
      description:
        "Through design we aim to elevate good causes and give them the tools to be self-sustainable.",
    },
    {
      icon: Globe,
      title: "A better place for all",
      description:
        "By elevating good causes, we assist in their mission of making a better world for people and planet.",
    },
  ];

  return (
    <section className="p-8 md:p-16" data-oid="3jyk40k">
      <div className="container" data-oid="mmdapg2">
        <div className="flex items-center gap-4 mb-16" data-oid=".qat2ty">
          <h1 className="text-4xl nk-bold" data-oid="6jj91yb">
            Our values
          </h1>
          <div className="w-2 h-2 rounded-full" data-oid="monbyux"></div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          data-oid="mf3er.s"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="space-y-6" data-oid="75pcy2x">
                <div
                  className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center"
                  data-oid="ydu1kq."
                >
                  <IconComponent
                    className="w-8 h-8"
                    strokeWidth={1}
                    data-oid="ek:7il4"
                  />
                </div>
                <div className="space-y-4" data-oid="38o.8ua">
                  <h3
                    className="text-xl md:text-2xl nk-semibold"
                    data-oid="efnp_0q"
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-base" data-oid="yqy1q9.">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
