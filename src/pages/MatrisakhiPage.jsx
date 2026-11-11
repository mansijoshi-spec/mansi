import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import matriHero from "../assets/images/matri-hero.png";
import matriProblem from "../assets/images/matri-problem.png";
import matriClient from "../assets/images/matri-client.png";
import matriScreens1 from "../assets/images/matri-screens1.png";
import matriSolution from "../assets/images/matri-solution.png";
import matriUi1 from "../assets/images/matri-ui1.png";
import matriUi2 from "../assets/images/matri-ui2.png";
import matriDecoration from "../assets/svgs/matri-decoration.svg";
import gradientTop from "../assets/svgs/gradient-top.svg";
import gradientMiddle from "../assets/svgs/gradient-middle.svg";

const ACCENT = "#f38500";

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

export default function MatrisakhiPage() {
  return (
    <div className="bg-bg overflow-hidden">
      {/* Gradients */}
      <div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
        <img src={gradientTop} alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-[1397px] left-0 w-[1697px] h-[1358px] pointer-events-none -z-10">
        <img src={gradientMiddle} alt="" className="w-full h-full" />
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
            <p className="text-[16px] text-dark-grey mb-2">PROJECT #3</p>
            <p className="font-normal text-[72px] leading-none" style={{ color: ACCENT }}>
              MATRISAKHI
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              {["UX Design", "Mobile Design"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-2 rounded-[24px] text-[15px] border"
                  style={{ borderColor: ACCENT, color: "#09111e", backgroundColor: "rgba(243,133,0,0.05)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img src={matriHero} alt="Matrisakhi hero" className="w-full object-cover" />
            <img
              src={matriDecoration}
              alt=""
              className="absolute top-4 right-4 w-[120px] opacity-60 pointer-events-none"
            />
          </div>
        </section>

        <Divider />

        {/* ─── INTRO + OVERVIEW ─── */}
        <section className="py-[80px]">
          <div className="flex gap-[120px] items-start">
            <div className="flex-1">
              <SectionHeading line1="Project" line2="Overview" />
              <p className="text-[24px] leading-[36px] text-dark-grey">
                MatriSakhi is a maternal health mobile app designed to support expectant and new mothers
                across India. The app needed a full UX overhaul to simplify navigation, improve content
                accessibility for diverse literacy levels, and increase daily active usage among its
                growing user base.
              </p>
            </div>
            <div className="flex-shrink-0 w-[400px]">
              <div className="flex flex-col gap-6 pt-4">
                {[
                  { label: "Role", value: "UX/UI Designer" },
                  { label: "Type", value: "Mobile App (iOS & Android)" },
                  { label: "Timeline", value: "4 months" },
                  { label: "Tools", value: "Figma, Sketch" },
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

        {/* ─── PROBLEM STATEMENT ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="The" line2="Problem" />
          <div className="flex gap-[80px] items-center">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                Mothers using the app reported feeling overwhelmed by information overload, confused
                by inconsistent navigation patterns, and frustrated by content that didn't account
                for varying literacy levels and regional languages.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Information architecture was unclear — users couldn't find key resources",
                  "Typography and contrast failed accessibility standards",
                  "Push notifications were triggering churn, not engagement",
                  "No clear onboarding flow for first-time users",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div
                      className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <p className="text-[18px] leading-[27px] text-dark-grey">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-[440px]">
              <img src={matriProblem} alt="Problem" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── CLIENT'S REQUEST ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Client's" line2="Request" />
          <div className="flex gap-[80px] items-center">
            <div className="flex-shrink-0 w-[440px]">
              <img src={matriClient} alt="Client request" className="w-full rounded-2xl object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                The client came with a clear goal: retain more users through the critical first-trimester
                period. They needed a redesign that felt warm, supportive, and trustworthy — not clinical —
                while also being accessible to users with limited smartphone literacy.
              </p>
              <div
                className="p-6 rounded-2xl border"
                style={{ borderColor: ACCENT, backgroundColor: "rgba(243,133,0,0.04)" }}
              >
                <p className="font-serif italic text-[22px] leading-[33px] text-dark-grey">
                  "We want every mother who opens this app to feel like she has a knowledgeable friend
                  with her, not a medical manual."
                </p>
                <p className="text-[14px] text-dark-grey mt-3">— MatriSakhi Product Team</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── SCREENS EXPLORATION ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Early" line2="Screens" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            Initial explorations focused on restructuring the information architecture and creating
            a warmer visual language that matched the app's supportive tone.
          </p>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={matriScreens1} alt="Early screen explorations" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── SOLUTION & KEY FEATURES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Solution &" line2="Key Features" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                The redesign centred on three pillars: clarity, warmth, and accessibility.
                Each screen was rebuilt with a consistent design system using approachable
                typography, high contrast, and illustrated guidance cues.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✦", heading: "Simplified onboarding", body: "3-step intake that personalises the experience immediately" },
                  { icon: "✦", heading: "Warm visual system", body: "Illustration-led design with accessible contrast ratios throughout" },
                  { icon: "✦", heading: "Smart notifications", body: "Contextual, trimester-aware push notifications with opt-out by topic" },
                  { icon: "✦", heading: "Multilingual support", body: "Content structure designed to work across 5 Indian languages" },
                ].map(({ icon, heading, body }) => (
                  <div
                    key={heading}
                    className="p-5 rounded-2xl border border-pink-stroke/50 bg-white/30"
                  >
                    <span className="text-[20px]" style={{ color: ACCENT }}>{icon}</span>
                    <p className="text-[16px] font-medium text-dark-grey mt-2 mb-1">{heading}</p>
                    <p className="text-[15px] leading-[22px] text-dark-grey">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-[440px]">
              <img src={matriSolution} alt="Solution" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── UI SHOWCASE ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Final" line2="UI" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            The final design uses warm oranges and soft neutrals to create a nurturing atmosphere,
            with large touch targets, clear hierarchy, and illustrated moments of delight.
          </p>
          <div className="flex flex-col gap-6">
            <div className="w-full rounded-2xl overflow-hidden">
              <img src={matriUi1} alt="MatriSakhi UI screens 1" className="w-full object-cover" />
            </div>
            <div className="w-full rounded-2xl overflow-hidden">
              <img src={matriUi2} alt="MatriSakhi UI screens 2" className="w-full object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── OUTCOMES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Out-" line2="comes" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            Post-redesign testing showed meaningful improvements across all key retention and
            engagement metrics.
          </p>
          <div className="flex gap-[60px] flex-wrap">
            {[
              { value: "55%", label: "increase in first-week retention" },
              { value: "2x", label: "daily active usage in the first trimester" },
              { value: "4.7★", label: "user satisfaction score in testing" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <p className="text-[48px] font-medium leading-none" style={{ color: ACCENT }}>
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
                heading: "Accessibility is a baseline, not a bonus",
                body: "Designing for users with limited literacy forced us to create a better product for everyone.",
              },
              {
                heading: "Tone is a design decision",
                body: "Shifting from clinical to warm and supportive required every micro-copy, icon, and color to work together.",
              },
              {
                heading: "Data without context overwhelms",
                body: "Health data needed careful progressive disclosure — surface what's relevant now, not everything at once.",
              },
              {
                heading: "Notifications should earn their place",
                body: "Replacing generic alerts with context-aware messages drove higher engagement and reduced uninstalls.",
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
            to="/work/rdactd"
            className="inline-flex items-center gap-2 text-[16px] text-dark-grey hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Previous: RDACTD
          </Link>
          <Link
            to="/work/leadnics"
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors"
          >
            Next: LEADNICS →
          </Link>
        </div>
      </div>
    </div>
  );
}
