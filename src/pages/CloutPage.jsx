import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import cloutHero from "../assets/images/clout-hero.png";
import cloutPersona from "../assets/images/clout-persona.png";
import cloutSolution from "../assets/images/clout-solution.png";
import cloutCompetitive from "../assets/images/clout-competitive.png";
import cloutWireframes from "../assets/images/clout-wireframes.png";
import cloutUi1 from "../assets/images/clout-ui1.png";
import cloutUi2 from "../assets/images/clout-ui2.png";
import cloutUi3 from "../assets/images/clout-ui3.png";
import cloutUi4 from "../assets/images/clout-ui4.png";
import statCircle1 from "../assets/svgs/stat-circle-1.svg";
import statCircle2 from "../assets/svgs/stat-circle-2.svg";
import statCircleGold from "../assets/svgs/stat-circle-gold.svg";
import gradientTop from "../assets/svgs/gradient-top.svg";

const ACCENT = "#ad8c49";

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

export default function CloutPage() {
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
            <p className="text-[16px] text-dark-grey mb-2">PROJECT #1</p>
            <p className="font-normal text-[72px] leading-none" style={{ color: ACCENT }}>
              CLOUT
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              {["UX Design", "UI Design", "Web Design", "Mobile Design"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-2 rounded-[24px] text-[15px] border"
                  style={{ borderColor: ACCENT, color: "#09111e", backgroundColor: "rgba(173,140,73,0.06)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={cloutHero} alt="Clout hero" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── OVERVIEW ─── */}
        <section className="py-[80px]">
          <div className="flex gap-[120px] items-start">
            <div className="flex-1">
              <SectionHeading line1="Project" line2="Overview" />
              <p className="text-[24px] leading-[36px] text-dark-grey">
                CLOUT is a platform built to help aesthetic providers — nurses, doctors, and clinicians —
                build professional credibility online. The goal was to create a trusted space where providers
                can verify their credentials, get endorsed by peers, and present a polished professional profile
                to prospective clients.
              </p>
            </div>
            <div className="flex-shrink-0 w-[400px]">
              <div className="flex flex-col gap-6 pt-4">
                {[
                  { label: "Role", value: "UX/UI Designer" },
                  { label: "Type", value: "Web & Mobile" },
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

        {/* ─── PROBLEM + PERSONA ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="The" line2="Problem" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-10">
                Aesthetic providers struggle to differentiate themselves in a crowded market. Clients have no
                reliable way to verify credentials, and providers lack a professional platform to showcase
                their expertise and build trust before a consultation.
              </p>
              <div className="flex flex-col gap-6">
                <div
                  className="p-6 rounded-2xl border"
                  style={{ borderColor: ACCENT, backgroundColor: "rgba(173,140,73,0.04)" }}
                >
                  <p className="text-[18px] font-medium text-dark-grey mb-2">Provider pain point</p>
                  <p className="text-[18px] leading-[27px] text-dark-grey">
                    "I have years of experience and certifications, but there's no professional platform for
                    me to show that to potential clients."
                  </p>
                </div>
                <div
                  className="p-6 rounded-2xl border"
                  style={{ borderColor: "#fda8ab", backgroundColor: "rgba(253,168,171,0.04)" }}
                >
                  <p className="text-[18px] font-medium text-dark-grey mb-2">Client pain point</p>
                  <p className="text-[18px] leading-[27px] text-dark-grey">
                    "I don't know who to trust. Anyone can claim to be a certified practitioner."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[480px]">
              <img src={cloutPersona} alt="User persona" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── RESEARCH STATS ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Research" line2="Insights" />
          <div className="flex gap-[39px] justify-center mb-12">
            {[
              { value: "72%", label: "providers lack a verified profile", circle: statCircleGold },
              { value: "3x", label: "more trust with verified credentials", circle: statCircle1 },
              { value: "68%", label: "clients check credentials before booking", circle: statCircle2 },
            ].map(({ value, label, circle }) => (
              <div key={label} className="flex flex-col items-center w-[214px]">
                <div className="relative w-[201px] h-[201px] flex items-center justify-center">
                  <img src={circle} alt="" className="absolute inset-0 w-full h-full" />
                  <span className="text-[28px] text-primary font-normal relative z-10">{value}</span>
                </div>
                <p className="text-[16px] leading-[24px] text-dark-grey text-center mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── COMPETITIVE ANALYSIS ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Competitive" line2="Analysis" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            I studied existing platforms in health, beauty, and professional networking to identify gaps
            and opportunities for CLOUT to carve a unique position.
          </p>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={cloutCompetitive} alt="Competitive analysis" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── SOLUTION ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="The" line2="Solution" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                CLOUT provides a structured onboarding experience that guides providers through credential
                verification, peer endorsements, and profile setup — making trust visible from the first click.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Multi-step sign-up with medical certification upload",
                  "Peer endorsement system for professional credibility",
                  "Searchable, filterable provider profiles for clients",
                  "Mobile-first design for on-the-go providers",
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
            <div className="flex-shrink-0 w-[480px]">
              <img src={cloutSolution} alt="Solution overview" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── WIREFRAMES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Wire-" line2="frames" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            Early wireframes focused on the core onboarding journey — from sign-up through certification
            to profile go-live. Low-fidelity sketches were validated with 5 providers before moving to hi-fi.
          </p>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={cloutWireframes} alt="Wireframes" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── UI SHOWCASE ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Final" line2="UI" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            The final design system uses a clean, professional aesthetic with gold accents to communicate
            premium quality while keeping accessibility at the forefront.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[cloutUi1, cloutUi2, cloutUi3, cloutUi4].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <img src={src} alt={`Clout UI ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── OUTCOMES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Out-" line2="comes" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                The redesigned onboarding flow was tested with both providers and clients, with measurable
                improvements in perceived trust and completion rates.
              </p>
              <div className="flex gap-[39px]">
                {[
                  { value: "40%", label: "faster onboarding completion" },
                  { value: "90%", label: "user satisfaction in testing" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center w-[180px]">
                    <p className="text-[40px] font-medium leading-none" style={{ color: ACCENT }}>
                      {value}
                    </p>
                    <p className="text-[16px] leading-[24px] text-dark-grey text-center mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── KEY TAKEAWAYS ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Key" line2="Takeaways" />
          <div className="grid grid-cols-2 gap-8 max-w-[900px]">
            {[
              {
                heading: "Trust is designed, not assumed",
                body: "Verification flows need to feel effortless even when they collect sensitive data.",
              },
              {
                heading: "Mobile-first, always",
                body: "Providers access the platform on the go — every interaction needed to work perfectly on small screens.",
              },
              {
                heading: "Progressive disclosure works",
                body: "Breaking the onboarding into clear stages reduced abandonment significantly.",
              },
              {
                heading: "Peer endorsement adds depth",
                body: "Social proof from verified peers became the most compelling trust signal in user testing.",
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
            to="/work"
            className="inline-flex items-center gap-2 text-[16px] text-dark-grey hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Back to all projects
          </Link>
          <Link
            to="/work/rdactd"
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors"
          >
            Next: RDACTD →
          </Link>
        </div>
      </div>
    </div>
  );
}
