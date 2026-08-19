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
   <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/breadcrumb-bg.png')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#072B52]/70" />

  <div className="relative mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

    {/* Back Button */}
    <Link
      href="/#services"
      className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#F7941D]"
    >
      <ArrowLeft size={18} />
      Back to Services
    </Link>

    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

      {/* Content */}
      <div>

        {/* Label */}
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

          <span className="text-xs font-bold uppercase tracking-[2px] text-white">
            Our Services
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-4">

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

        <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-[280px] sm:w-[280px]">

          <div className="absolute inset-8 rounded-full bg-[#00AEEF]/10 blur-3xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-2xl sm:h-36 sm:w-36">

            <Icon
              size={58}
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