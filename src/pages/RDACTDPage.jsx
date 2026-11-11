import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import rdactdHero from "../assets/images/rdactd-hero.png";
import rdactdSolution from "../assets/images/rdactd-solution.png";
import rdactdWire1 from "../assets/images/rdactd-wire1.png";
import rdactdWire2 from "../assets/images/rdactd-wire2.png";
import rdactdWire3 from "../assets/images/rdactd-wire3.png";
import rdactdWire4 from "../assets/images/rdactd-wire4.png";
import rdactdUi1 from "../assets/images/rdactd-ui1.png";
import rdactdUi2 from "../assets/images/rdactd-ui2.png";
import rdactdUi3 from "../assets/images/rdactd-ui3.png";
import rdactdUi4 from "../assets/images/rdactd-ui4.png";
import statCircle1 from "../assets/svgs/stat-circle-1.svg";
import statCircle2 from "../assets/svgs/stat-circle-2.svg";
import gradientTop from "../assets/svgs/gradient-top.svg";

const ACCENT = "#e84536";

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

export default function RDACTDPage() {
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
            <p className="text-[16px] text-dark-grey mb-2">PROJECT #2</p>
            <p className="font-normal text-[72px] leading-none" style={{ color: ACCENT }}>
              RDACTD
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              {["UI Design", "Web Design", "Mobile Design"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-2 rounded-[24px] text-[15px] border"
                  style={{ borderColor: ACCENT, color: "#09111e", backgroundColor: "rgba(232,69,54,0.05)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={rdactdHero} alt="RDACTD hero" className="w-full object-cover" />
          </div>
        </section>

        <Divider />

        {/* ─── OVERVIEW ─── */}
        <section className="py-[80px]">
          <div className="flex gap-[120px] items-start">
            <div className="flex-1">
              <SectionHeading line1="Project" line2="Overview" />
              <p className="text-[24px] leading-[36px] text-dark-grey">
                RDACTD is a complaint resolution platform designed to bridge the gap between frustrated
                consumers and slow-moving businesses. The platform gives users a structured way to file
                complaints while providing businesses with dashboards to track, prioritise, and resolve
                issues efficiently — improving both trust and response speed.
              </p>
            </div>
            <div className="flex-shrink-0 w-[400px]">
              <div className="flex flex-col gap-6 pt-4">
                {[
                  { label: "Role", value: "UI Designer" },
                  { label: "Type", value: "Web & Mobile" },
                  { label: "Timeline", value: "2 months" },
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

        {/* ─── CHALLENGES + PROBLEM ─── */}
        <section className="py-[80px]">
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <SectionHeading line1="The" line2="Challenge" />
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                Existing complaint channels — phone, email, social media — are fragmented and offer
                no transparency on resolution status. Users feel ignored. Businesses lack a unified
                view of incoming complaints and struggle to prioritise effectively.
              </p>
              <div
                className="p-6 rounded-2xl border"
                style={{ borderColor: ACCENT, backgroundColor: "rgba(232,69,54,0.04)" }}
              >
                <p className="text-[18px] font-medium text-dark-grey mb-2">Core problem statement</p>
                <p className="text-[18px] leading-[27px] text-dark-grey">
                  How do we create a complaint resolution experience that gives users confidence their
                  issue will be resolved, while giving businesses the tools to actually do it faster?
                </p>
              </div>
            </div>
            <div className="flex-1">
              <SectionHeading line1="Research" line2="Stats" />
              <div className="flex flex-col gap-6">
                {[
                  { value: "82%", label: "users abandon complaint processes due to complexity", circle: statCircle1 },
                  { value: "4.5x", label: "faster resolution with structured intake forms", circle: statCircle2 },
                  { value: "67%", label: "businesses have no centralised complaint tracking", circle: statCircle1 },
                ].map(({ value, label, circle }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="relative w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
                      <img src={circle} alt="" className="absolute inset-0 w-full h-full" />
                      <span className="text-[16px] text-primary font-medium relative z-10">{value}</span>
                    </div>
                    <p className="text-[18px] leading-[27px] text-dark-grey">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── SOLUTION ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="The" line2="Solution" />
          <div className="flex gap-[80px] items-start">
            <div className="flex-1">
              <p className="text-[24px] leading-[36px] text-dark-grey mb-8">
                A dual-sided platform — one interface for users to file and track complaints, and
                a business dashboard to manage, score, and resolve them with full audit trails.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Guided complaint filing with category-based routing",
                  "Real-time status tracking for filed complaints",
                  "Business dashboard with scoring & priority indicators",
                  "Automated escalation triggers for overdue resolutions",
                  "Mobile-responsive design for users on the go",
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
              <img src={rdactdSolution} alt="Solution" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─── DESIGN PROCESS ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Design" line2="Process" />
          <div className="flex items-center justify-center gap-0 overflow-x-auto py-4 mb-10">
            {["Discovery", "Define", "Ideate", "Prototype", "Test", "Deliver"].map((step, i, arr) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-[120px] h-[48px] rounded-full flex items-center justify-center text-[15px] font-medium text-white"
                    style={{ backgroundColor: i === 0 || i === 5 ? ACCENT : i % 2 === 0 ? "#46484c" : "#2273f3" }}
                  >
                    {step}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-[32px] h-[2px]" style={{ backgroundColor: "#fda8ab" }} />
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── WIREFRAMES ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Wire-" line2="frames" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            Wireframes explored both the user filing journey and the business triage dashboard,
            tested with real users before moving to high fidelity.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[rdactdWire1, rdactdWire2, rdactdWire3, rdactdWire4].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <img src={src} alt={`Wireframe ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ─── UI SHOWCASE ─── */}
        <section className="py-[80px]">
          <SectionHeading line1="Final" line2="UI" />
          <p className="text-[24px] leading-[36px] text-dark-grey mb-10 max-w-[700px]">
            The final design uses strong red accents to communicate urgency and action, with clear
            status indicators and progress flows throughout.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[rdactdUi1, rdactdUi2, rdactdUi3, rdactdUi4].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <img src={src} alt={`RDACTD UI ${i + 1}`} className="w-full object-cover" />
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
                Usability testing showed significant improvements in both user confidence and
                business response times across all tested complaint categories.
              </p>
              <div className="flex gap-[39px]">
                {[
                  { value: "3x", label: "faster complaint resolution in testing" },
                  { value: "85%", label: "user satisfaction with transparency" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-start">
                    <p className="text-[40px] font-medium leading-none" style={{ color: ACCENT }}>
                      {value}
                    </p>
                    <p className="text-[16px] leading-[24px] text-dark-grey mt-2 max-w-[160px]">{label}</p>
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
                heading: "Dual-sided design is hard",
                body: "Designing for both users and businesses required separate research tracks and constant balance between competing needs.",
              },
              {
                heading: "Status visibility is everything",
                body: "The single most requested feature in research was knowing where a complaint stood in the process.",
              },
              {
                heading: "Scoring creates accountability",
                body: "Giving businesses a public response score dramatically changed how they prioritised their queue.",
              },
              {
                heading: "Simplify the filing flow",
                body: "Reducing the initial form to 3 required fields increased submission completion by over 60%.",
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
            to="/work/clout"
            className="inline-flex items-center gap-2 text-[16px] text-dark-grey hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Previous: CLOUT
          </Link>
          <Link
            to="/work/matrisakhi"
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors"
          >
            Next: MATRISAKHI →
          </Link>
        </div>
      </div>
    </div>
  );
}
