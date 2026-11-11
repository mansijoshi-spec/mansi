import aboutPhoto from "../assets/images/about-photo.png";
import videoDecoration from "../assets/images/video-decoration.png";
import statCircle1 from "../assets/svgs/stat-circle-1.svg";
import statCircle2 from "../assets/svgs/stat-circle-2.svg";
import gradientTop from "../assets/svgs/gradient-top.svg";
import gradientMiddle from "../assets/svgs/gradient-middle.svg";

const SKILLS = [
  { area: "UX", detail: "Research synthesis, User flows, UX strategy" },
  { area: "UI", detail: "Mobile & web UI, Design systems, Accessibility" },
  { area: "Tools", detail: "Figma, Sketch, Adobe XD" },
];

const EXPERIENCE = [
  {
    title: "Freelance – UX/UI Designer (2020–2023)",
    detail:
      "Worked with startups to redesign websites, apps, and dashboards.\nClients: CLOUT, RDACTD, 4D Career, The Herb Company.",
  },
  {
    title: "Metafic – UX/UI Designer (Oct 2021–Dec 2024)",
    detail:
      "Lead design for platforms in health tech, SaaS, and service industries.\nProjects: MatriSakhi, Leadnics.",
  },
];

export default function About() {
  return (
    <div className="bg-bg overflow-hidden">
      {/* Gradients */}
      <div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
        <img src={gradientTop} alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-[1521px] left-[208px] w-[1697px] h-[1358px] pointer-events-none -z-10">
        <img src={gradientMiddle} alt="" className="w-full h-full" />
      </div>

      <div className="pt-[140px]">
        {/* ─── Bio + Photo ─── */}
        <section className="flex gap-[127px] items-center px-[120px] pb-[80px]">
          <div className="flex-shrink-0 w-[462px] h-[381px] overflow-hidden rounded-2xl">
            <img src={aboutPhoto} alt="Mansi" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-[24px] leading-[36px] text-dark-grey">
              I'm a UX/UI designer with 3+ years of experience working across health tech, SaaS, and
              service platforms. I specialise in turning complex problems into intuitive interfaces,
              with a focus on business impact.
            </p>
          </div>
        </section>

        {/* ─── Quick Highlights ─── */}
        <section className="flex flex-col gap-8 px-[120px] pb-[80px]">
          <p className="font-serif italic text-[32px] text-primary text-center w-full">
            Quick highlights
          </p>
          <div className="flex gap-[39px] justify-center">
            {[
              { value: "3+", label: "years experience", circle: statCircle1 },
              { value: "15+", label: "projects shipped", circle: statCircle2 },
              { value: "5+", label: "startups collaborated with", circle: statCircle1 },
            ].map(({ value, label, circle }) => (
              <div key={label} className="flex flex-col items-center w-[214px]">
                <div className="relative w-[201px] h-[201px] flex items-center justify-center">
                  <img src={circle} alt="" className="absolute inset-0 w-full h-full" />
                  <span className="text-[32px] text-primary font-normal relative z-10">{value}</span>
                </div>
                <p className="text-[18px] leading-[27px] text-dark-grey text-center mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Quote strip ─── */}
        <section className="flex items-center justify-center gap-10 py-16 px-[120px] border-y border-pink-stroke/30">
          <img src={videoDecoration} alt="" className="w-[183px] h-[67px] object-cover" />
          <p className="font-serif italic text-[32px] leading-[48px] text-dark-grey text-center w-[894px]">
            I design intuitive digital experiences for early-stage startups and businesses, with a
            strong focus on trust, flow, and function
          </p>
          <img src={videoDecoration} alt="" className="w-[183px] h-[67px] object-cover" />
        </section>

        {/* ─── Skills ─── */}
        <section className="px-[120px] pt-[120px] pb-[120px]">
          <div className="mb-10">
            <p className="font-normal text-[72px] leading-none text-primary">My</p>
            <p className="font-serif italic text-[76px] leading-none text-primary">skills</p>
          </div>
          <div className="flex flex-col gap-6">
            {SKILLS.map(({ area, detail }) => (
              <div key={area} className="flex gap-[42px] items-center">
                <span className="font-medium text-[24px] text-dark-grey w-[87px] flex-shrink-0">
                  {area}
                </span>
                <span className="text-[24px] leading-[36px] text-dark-grey">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section className="px-[120px] pb-[120px]">
          <div className="mb-10">
            <p className="font-normal text-[72px] leading-none text-primary">My</p>
            <p className="font-serif italic text-[76px] leading-none text-primary">experience</p>
          </div>
          <div className="flex flex-col gap-10">
            {EXPERIENCE.map(({ title, detail }) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="font-medium text-[24px] text-dark-grey">{title}</p>
                <p className="text-[24px] leading-[36px] text-dark-grey whitespace-pre-line">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── How it all started ─── */}
        <section className="px-[120px] pb-[120px]">
          <div className="mb-10">
            <p className="font-normal text-[72px] leading-none text-primary">How it all</p>
            <p className="font-serif italic text-[76px] leading-none text-primary">started</p>
          </div>
          <div className="relative w-full">
            <p className="text-[24px] leading-[36px] text-dark-grey w-[567px]">
              I began in development during my college years, but somewhere between the code and the
              user flows, I found myself drawn to the why behind the product. That curiosity turned
              into passion and that passion turned into a career in UX/UI.
            </p>
            <p className="text-[24px] leading-[36px] text-dark-grey w-[551px] ml-[655px] mt-[216px]">
              Since 2021, I've worked on real-world projects, led design teams, and helped bring
              user-centered ideas to life. I've learned how to turn ambiguity into clarity and bring
              designs from rough sketches to polished, tested experiences.
            </p>
          </div>
        </section>

        {/* ─── Outside of work ─── */}
        <section className="px-[120px] pb-[120px]">
          <div className="mb-10">
            <p className="font-normal text-[72px] leading-none text-primary">Outside of</p>
            <p className="font-serif italic text-[76px] leading-none text-primary">work</p>
          </div>
          <div className="flex flex-col gap-[68px] w-[566px]">
            <p className="text-[24px] leading-[36px] text-dark-grey">
              When I'm not designing, I'm probably planning a trip I may or may not take, doodling
              whatever's on my mind, or flipping between books and playlists.
              <br />
              <br />
              Coffee is a constant. So is curiosity.
            </p>
            <p className="text-[24px] leading-[36px] text-dark-grey">
              These quiet breaks refuel my design brain and honestly, they make the work better too.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
