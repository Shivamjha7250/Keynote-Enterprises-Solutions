import {
  CheckCircle2,
  ClipboardList,
  Settings2,
  TestTube2,
  Headphones,
  SearchCheck,
} from "lucide-react";

type ProcessStep = {
  number?: string;
  title: string;
  description: string;
};

type ServiceProcessProps = {
  title?: string;
  description?: string;
  steps: ProcessStep[];
};

const icons = [
  ClipboardList,
  SearchCheck,
  Settings2,
  TestTube2,
  Headphones,
  CheckCircle2,
];

export default function ServiceProcess({
  title = "Our Process",
  description = "A structured approach to delivering reliable and professional technology solutions.",
  steps,
}: ServiceProcessProps) {
  return (
    <section className="bg-[#0B3C5D] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[2px] text-[#F7941D]">
            Our Process
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={`${step.title}-${index}`}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >

                {/* Number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7941D] text-sm font-extrabold text-white">
                  {step.number || String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#00AEEF]/15">
                  <Icon
                    size={21}
                    className="text-[#00AEEF]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}