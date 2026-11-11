import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import leadHero from "../assets/images/lead-hero.png";
import leadChallenge from "../assets/images/lead-challenge.png";
import leadSolution from "../assets/images/lead-solution.png";
import leadUi1 from "../assets/images/lead-ui1.png";
import leadUi2 from "../assets/images/lead-ui2.png";
import gradientTop from "../assets/svgs/gradient-top.svg";

const ACCENT = "#46484c";
const ACCENT_LIGHT = "rgba(70,72,76,0.08)";

function SectionHeading({ line1, line2 }) {
  return (
    <div className="mb-10">
      <p className="font-normal text-[72px] leading-none text-primary">{line1}</p>
      <p className="font-serif italic text-[76px] leading-none text-primary">{line2}</p>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-pink-stroke/30 my-0" />;
}

export default function LeadnicsPage() {
  return (
    <div className="bg-bg overflow-hidden">
      {/* Gradient */}
      <div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
        <img src={gradientTop} alt="" className="w-full h-full" />
      </div>

      <div className="px-[120px] pt-[60px] pb-[120px]">
        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-[16px] text-dark-grey hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          Back to Work
        </Link>

        {/* ─── HERO ─── */}
        <section className="mb-[80px]">
          <div className="mb-8">
            <p className="text-[16px] text-dark-grey mb-2">PROJECT #4</p>
            <div className="flex items-baseline gap-4 flex-wrap">
              <p className="font-serif italic text-[72px] leading-none text-primary">Leadnics</p>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[16px] text-dark-grey hover:text-primary transition-colors underline underline-offset-2"
              >
                Available on App Store ↗
              </a>
            </div>
            <div className="flex gap-3 flex-wrap mt-4">
              {["UX Design", "Mobile Design"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-2 rounded-[24px] text-[15px] border"
                  style={{ borderColor: ACCENT, color: "#09111e", backgroundColor: ACCENT_LIGHT }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={leadHero} alt="Leadnics hero" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── OVERVIEW ─── */}
        <section className="py-[80px]">
          <div className="flex gap-[120px] items-start">
            <div className="flex-1">
              <SectionHeading line1="Project" line2="Overview" />
              <p className="text-[24px] leading-[36px] text-dark-grey">
                Leadnics is a mobile CRM and lead management app built for independent sales reps and
                small sales teams. The app needed a complete UX rethink — the existing product was
                feature-rich but unusable in the field, where speed and clarity matter more than
                anything else.
              </p>
            </div>
            <div className="flex-shrink-0 w-[400px]">
              <div className="flex flex-col gap-6 pt-4">
                {[
                  { label: "Role", value: "UX Designer" },
                  { label: "Type", value: "iOS Mobile App" },
                  { label: "Timeline", value: "3 months" },
                  { label: "Tools", value: "Figma" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <p className="text-[14px] font-medium text-dark-grey uppercase tracking-wider">{label}</p>
                    <p className="text-[18px] text-dark-grey">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── CHALLENGE ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="The" line2="Challenge" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                Sales reps using the app were abandoning it after the first week. The onboarding
                was confusing, the lead pipeline view was hard to scan, and updating lead status
                required too many taps — a real problem when you're between calls.
              </p>

              {/* Before / After */}
              <div className="flex gap-4 mb-4">
                <div
                  className="flex-1 p-5 rounded-2xl border"
                  style={{ borderColor: "#fda8ab", backgroundColor: "rgba(253,168,171,0.06)" }}
                >
                  <p className="text-[14px] font-medium uppercase tracking-wider text-dark-grey mb-3">Before</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "12 steps to add a new lead",
                      "Pipeline buried under 3 nav levels",
                      "No quick-action shortcuts",
                      "Desktop-first layout on mobile",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-[#fda8ab] mt-[2px]">✕</span>
                        <p className="text-[15px] leading-[22px] text-dark-grey">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="flex-1 p-5 rounded-2xl border"
                  style={{ borderColor: "#2273f3", backgroundColor: "rgba(34,115,243,0.04)" }}
                >
                  <p className="text-[14px] font-medium uppercase tracking-wider text-dark-grey mb-3">After</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "3 taps to add and categorise a lead",
                      "Pipeline as the home screen",
                      "Swipe-to-action on every lead card",
                      "Thumb-zone optimised for field use",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-[2px]">✓</span>
                        <p className="text-[15px] leading-[22px] text-dark-grey">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[440px]">
              <img src={leadChallenge} alt="Challenge" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── UX STRATEGY + SOLUTION ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="UX Strategy" line2="& Solution" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                The design strategy was built around three principles: speed (every core action in
                under 3 taps), clarity (the pipeline as the mental model, not a feature), and
                confidence (the rep should always know what to do next).
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    step: "01",
                    heading: "Restructure information architecture",
                    body: "Rebuilt the nav around the sales pipeline lifecycle rather than feature categories.",
                  },
                  {
                    step: "02",
                    heading: "Introduce progressive lead capture",
                    body: "Required only name + contact at creation. All other details are optional and prompted contextually.",
                  },
                  {
                    step: "03",
                    heading: "Swipe-based triage",
                    body: "Lead cards support swipe gestures for the 3 most common actions: call, note, move stage.",
                  },
                  {
                    step: "04",
                    heading: "Smart follow-up nudges",
                    body: "AI-powered reminders surface leads that haven't been contacted in the optimal window.",
                  },
                ].map(({ step, heading, body }) => (
                  <div key={step} className="flex gap-5">
                    <span
                      className="text-[40px] font-medium leading-none flex-shrink-0 w-[56px]"
                      style={{ color: ACCENT }}
                    >
                      {step}
                    </span>
                    <div>
                      <p className="text-[18px] font-medium text-dark-grey mb-1">{heading}</p>
                      <p className="text-[16px] leading-[24px] text-dark-grey">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-[440px]">
              <img src={leadSolution} alt="Solution" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── FINAL DESIGN ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Final Design" line2="& UI" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            The final product uses a clean, high-contrast design system built for readability in
            bright outdoor light, with large touch targets, clear status indicators, and a visual
            pipeline that makes the whole sales funnel scannable at a glance.
          </p>
          <div className="flex flex-col gap-6">
            <div className="w-full rounded-2xl overflow-hidden">
              <img src={leadUi1} alt="Leadnics UI screens 1" className="w-full object-cover" />
            </div>
            <div className="w-full rounded-2xl overflow-hidden">
              <img src={leadUi2} alt="Leadnics UI screens 2" className="w-full object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── OUTCOMES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Out-" line2="comes" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            The redesigned app launched on the App Store and saw strong early adoption metrics
            from sales teams who had previously abandoned the product.
          </p>
          <div className="flex gap-[60px] flex-wrap">
            {[
              { value: "70%", label: "reduction in time-to-add-lead" },
              { value: "4.8★", label: "App Store rating at launch" },
              { value: "3x", label: "week-2 retention vs. previous version" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <p className="text-[48px] font-medium leading-none text-primary">
                  {value}
                </p>
                <p className="text-[18px] leading-[27px] text-dark-grey mt-2 max-w-[180px]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── KEY TAKEAWAYS ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Key" line2="Takeaways" />
          <div className="grid grid-cols-2 gap-8 max-w-[900px]">
            {[
              {
                heading: "Design for the context, not the desk",
                body: "Field sales reps use apps standing up, in bright sun, mid-conversation — every interaction had to work in that reality.",
              },
              {
                heading: "Less capture, more action",
                body: "Lowering the barrier to creating a lead unlocked the whole pipeline. Completeness can follow engagement.",
              },
              {
                heading: "Gestures earn their place",
                body: "Swipe actions only work when users trust the outcome. Undo was the feature that made users commit.",
              },
              {
                heading: "The pipeline IS the product",
                body: "Every other feature in the app exists to serve the pipeline view. Organising around that insight transformed the IA.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="p-6 rounded-2xl border border-pink-stroke/50 bg-white/30"
              >
                <p className="text-[18px] font-medium text-dark-grey mb-2">{heading}</p>
                <p className="text-[16px] leading-[24px] text-dark-grey">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── NAV ─── */}
        <div className="flex justify-between items-center pt-8 border-t border-pink-stroke/30">
          <Link
            to="/work/matrisakhi"
            className="inline-flex items-center gap-2 text-[16px] text-dark-grey hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Previous: MATRISAKHI
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors"
          >
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
