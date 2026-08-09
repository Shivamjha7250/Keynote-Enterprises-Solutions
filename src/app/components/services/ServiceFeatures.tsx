import { CheckCircle2 } from "lucide-react";

type ServiceFeaturesProps = {
  title?: string;
  description?: string;
  features: string[];
};

export default function ServiceFeatures({
  title = "Key Features",
  description = "Everything you need for a reliable and professional business solution.",
  features,
}: ServiceFeaturesProps) {
  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[2px] text-[#F7941D]">
            Key Features
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>

        </div>

        {/* Features */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-lg"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                <CheckCircle2
                  size={21}
                  className="text-[#00AEEF]"
                />
              </div>

              <span className="text-sm font-semibold text-[#0B3C5D] sm:text-base">
                {feature}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}