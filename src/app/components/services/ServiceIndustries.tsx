import {
  Building2,
  BriefcaseBusiness,
  Headphones,
  UsersRound,
  CheckCircle2,
} from "lucide-react";

type Industry = {
  title: string;
  description: string;
};

type ServiceIndustriesProps = {
  title?: string;
  description?: string;
  industries: Industry[];
};

const icons = [
  Headphones,
  BriefcaseBusiness,
  Building2,
  UsersRound,
];

export default function ServiceIndustries({
  title = "Industries We Serve",
  description = "Our solutions can be customized according to the requirements of different businesses and industries.",
  industries,
}: ServiceIndustriesProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[2px] text-[#F7941D]">
            Industries
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>

        </div>

        {/* Industries */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-lg"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#00AEEF]/10">
                  <Icon
                    size={27}
                    className="text-[#00AEEF]"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-[#0B3C5D]">
                  {industry.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-4 flex justify-center">
                  <CheckCircle2
                    size={17}
                    className="text-[#F7941D]"
                  />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}