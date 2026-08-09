import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Excellent networking and cloud dialer services. Their support team is always responsive and helpful.",
    name: "Call Center Manager",
    role: "Call Center",
  },
  {
    text: "Professional website development with timely delivery. Highly recommended for businesses.",
    name: "Business Owner",
    role: "Business Client",
  },
  {
    text: "Reliable CCTV and biometric installation. Very satisfied with their work and support.",
    name: "Corporate Client",
    role: "Corporate Business",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
            What Our{" "}
            <span className="text-[#00AEEF]">
              Clients Say
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Trusted by businesses for reliable IT infrastructure,
            communication systems, software and professional technical
            support.
          </p>

        </div>

        {/* =========================
            TESTIMONIAL CARDS
        ========================= */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
            >

              {/* Orange Quote */}
              <div className="absolute right-5 top-4 text-[#F7941D]/15">
                <Quote size={55} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="#F7941D"
                    className="text-[#F7941D]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="relative mt-6 text-sm leading-7 text-slate-600 sm:text-[15px]">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100" />

              {/* Client */}
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3C5D]">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B3C5D]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F7941D] transition-all duration-300 group-hover:w-full" />

            </div>
          ))}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

      

      </div>
    </section>
  );
}