import { CheckCircle2 } from "lucide-react";

type ServiceBenefitsProps = {
  title?: string;
  description?: string;
  benefits: string[];
};

export default function ServiceBenefits({
  title = "Business Benefits",
  description = "Designed to improve efficiency, reliability and business productivity.",
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <span className="text-xs font-bold uppercase tracking-[2px] text-[#F7941D]">
              Business Benefits
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>

          </div>

          {/* Right */}
          <div className="rounded-2xl bg-[#0B3C5D] p-6 shadow-xl sm:p-8">

            <div className="space-y-5">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#F7941D]"
                  />

                  <span className="text-sm leading-6 text-slate-200 sm:text-base">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}