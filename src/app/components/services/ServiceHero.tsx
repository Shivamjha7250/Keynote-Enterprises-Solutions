import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ServiceHeroProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ServiceHero({
  title,
  description,
  icon: Icon,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#072B52] via-[#0B3C5D] to-[#0E5A88]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#00AEEF]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* Back Button */}
        <Link
          href="/#services"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#F7941D]"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-white">
                Our Services
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#df8214]"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
              >
                Explore Features
              </a>

            </div>
          </div>

          {/* Icon Visual */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-[360px] sm:w-[360px]">

              <div className="absolute inset-10 rounded-full bg-[#00AEEF]/10 blur-3xl" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl bg-white shadow-2xl sm:h-44 sm:w-44">

                <Icon
                  size={68}
                  strokeWidth={1.5}
                  className="text-[#00AEEF]"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}