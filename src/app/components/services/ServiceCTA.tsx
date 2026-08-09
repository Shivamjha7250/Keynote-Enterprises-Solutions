import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type ServiceCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export default function ServiceCTA({
  title = "Ready to Get Started?",
  description = "Tell us about your business requirements and our team will help you find the right technology solution.",
  buttonText = "Get Free Consultation",
}: ServiceCTAProps) {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:py-20">

      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B3C5D] to-[#0E5A88] px-6 py-12 text-center shadow-xl sm:px-12 lg:py-14">

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <MessageCircle
            size={27}
            className="text-[#00AEEF]"
          />
        </div>

        <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F7941D] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214]"
          >
            {buttonText}

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0B3C5D]"
          >
            View All Services
          </Link>

        </div>

      </div>

    </section>
  );
}