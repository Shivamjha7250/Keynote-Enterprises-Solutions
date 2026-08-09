import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Network,
  ShieldCheck,
  Code2,
  Server,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-visible bg-gradient-to-br from-[#072B52] via-[#0B3C5D] to-[#0E638F]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[180px] h-[400px] w-[400px] rounded-full bg-[#00AEEF]/20 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[120px] h-[500px] w-[500px] rounded-full bg-[#00AEEF]/20 blur-[120px]" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative z-10">

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-white sm:text-xs">
                Keynote Enterprises Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              Complete IT &

              <br />

              Business Technology

              <br />

              <span className="text-[#F7941D]">
                Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-base leading-7 text-slate-200 sm:text-lg">
              Empowering businesses with reliable IT infrastructure,
              cloud communication, security and software solutions.
            </p>

            {/* Industries */}
            <div className="mt-7 grid max-w-[650px] grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#F7941D]"
                />
                Call Centers
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#F7941D]"
                />
                CA Firms
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#F7941D]"
                />
                Architecture Firms
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#F7941D]"
                />
                Small & Medium Businesses
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#F7941D]"
                />
                Corporate Offices
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214] sm:px-7"
              >
                Get Free Consultation

                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#0B3C5D] sm:px-7"
              >
                Explore Services

                <ArrowRight size={18} />
              </a>

            </div>

          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">

            {/* Main Circle */}
            <div className="relative flex aspect-square w-[280px] items-center justify-center rounded-full border border-white/10 bg-[#0A4D73]/60 sm:w-[380px] lg:w-[460px]">

              {/* Center */}
              <div className="relative z-10 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-2xl bg-[#062E4F] shadow-2xl sm:h-[190px] sm:w-[190px]">

                <Server
                  size={52}
                  className="text-[#00AEEF]"
                />

                <div className="mt-3 text-sm font-bold text-white sm:text-base">
                  IT Infrastructure
                </div>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#F7941D]" />

              </div>

              {/* Cloud */}
              <div className="absolute -top-3 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-[#00AEEF] shadow-xl sm:h-16 sm:w-16">
                <Cloud
                  size={32}
                  className="text-white"
                />
              </div>

              {/* Laptop */}
              <div className="absolute bottom-5 left-[-5px] flex h-20 w-24 rotate-[-7deg] items-center justify-center rounded-xl bg-[#17253D] shadow-xl sm:left-0 sm:h-24 sm:w-28">
                <Network
                  size={30}
                  className="text-[#00AEEF]"
                />
              </div>

              {/* Security */}
              <div className="absolute bottom-7 right-[-5px] flex h-20 w-24 rotate-[7deg] items-center justify-center rounded-xl bg-[#17253D] shadow-xl sm:right-0 sm:h-24 sm:w-28">
                <ShieldCheck
                  size={30}
                  className="text-[#F7941D]"
                />
              </div>

            </div>

            {/* Cloud Card */}
            <div className="absolute left-0 top-2 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00AEEF]/10">
                <Cloud
                  size={21}
                  className="text-[#00AEEF]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0B3C5D]">
                  Cloud Solutions
                </p>
                <p className="text-xs text-slate-500">
                  Secure Infrastructure
                </p>
              </div>
            </div>

            {/* Secure IT */}
            <div className="absolute right-0 top-[45%] hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <ShieldCheck
                  size={21}
                  className="text-[#F7941D]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0B3C5D]">
                  Secure IT
                </p>
                <p className="text-xs text-slate-500">
                  Reliable Protection
                </p>
              </div>
            </div>

            {/* Networking */}
            <div className="absolute bottom-2 left-0 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Network
                  size={21}
                  className="text-[#0B3C5D]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0B3C5D]">
                  Networking
                </p>
                <p className="text-xs text-slate-500">
                  LAN / WAN / VPN
                </p>
              </div>
            </div>

            {/* Software */}
            <div className="absolute bottom-8 right-0 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00AEEF]/10">
                <Code2
                  size={21}
                  className="text-[#00AEEF]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0B3C5D]">
                  Software
                </p>
                <p className="text-xs text-slate-500">
                  Custom Solutions
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="relative z-20 mt-14 w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:mt-16 lg:mt-20">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            <div className="border-b border-slate-200 px-4 py-6 text-center lg:border-b-0 lg:border-r">
              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                500+
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Projects Completed
              </p>
            </div>

            <div className="border-b border-slate-200 px-4 py-6 text-center lg:border-b-0 lg:border-r">
              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                250+
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Happy Clients
              </p>
            </div>

            <div className="px-4 py-6 text-center lg:border-r">
              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                12+
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                IT Services
              </p>
            </div>

            <div className="px-4 py-6 text-center">
              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                24×7
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Technical Support
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}