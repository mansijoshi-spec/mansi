import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import mansiHero from "../assets/images/mansi-hero.png";
import cloutWeb from "../assets/images/clout-web.png";
import cloutMobile from "../assets/images/clout-mobile.png";
import rdactd from "../assets/images/rdactd.png";
import mansiAbout from "../assets/images/mansi-about.png";
import gradientTop from "../assets/svgs/gradient-top.svg";
import gradientMiddle from "../assets/svgs/gradient-middle.svg";
import cloutMask from "../assets/svgs/clout-mask.svg";
import ellipse from "../assets/svgs/ellipse.svg";
import mansiMask from "../assets/svgs/mansi-mask.svg";

function Chip({ label, variant = "blue" }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-2 rounded-[24px] text-[16px] leading-6 border text-black ${
        variant === "blue"
          ? "bg-[rgba(243,247,255,0.5)] border-primary"
          : "bg-[rgba(255,229,230,0.5)] border-pink-stroke"
      }`}
    >
      {label}
    </span>
  );
}

export default function Hero() {
  return (
    <div className="bg-bg overflow-hidden">
      {/* ─── GRADIENT BACKGROUNDS ─── */}
      <div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
        <img src={gradientTop} alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-[1397px] left-0 w-[1697px] h-[1358px] pointer-events-none -z-10">
        <img src={gradientMiddle} alt="" className="w-full h-full" />
      </div>

      {/* ─── HERO TITLE ─── */}
      <div className="pt-[140px] px-[120px]">
        <p className="font-normal text-[72px] leading-none text-primary font-sans">UX/UI DESIGN</p>
        <p className="font-serif italic text-[76px] leading-none text-primary">Portfolio</p>
      </div>

      {/* ─── INTRO SECTION ─── */}
      <section className="flex items-center gap-[73px] px-[60px] pt-[40px] pb-[120px]">
        {/* Photo */}
        <div className="flex-shrink-0 w-[352px] h-[364px] rounded-[900px] bg-powder-pink overflow-hidden">
          <img
            src={mansiHero}
            alt="Mansi Joshi"
            className="w-full h-[128.76%] object-cover object-top translate-y-[-29%] translate-x-[2.5%]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 w-[573px]">
          <p className="text-[32px] font-medium leading-none text-black">Hi, I am Mansi Joshi</p>
          <p className="text-[24px] leading-[36px] text-dark-grey font-normal">
            I design intuitive digital experiences for early-stage startups and businesses, with a
            strong focus on trust, flow, and function
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="https://drive.google.com/file/d/1wqTgbtSW3WBF9RIm8B9BCfwNfO0qnEmD/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors"
            >
              <FileText size={20} />
              <span className="underline">View Resume</span>
            </a>
            <a
              href="mailto:mansijoshidesign@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors w-[152px] justify-center"
            >
              <Mail size={20} />
              <span className="underline">Email me</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WORK SECTION ─── */}
      <section className="px-[120px] pt-[40px] pb-[120px]">
        {/* Section header */}
        <div className="mb-10">
          <p className="font-normal text-[72px] leading-none text-primary">My</p>
          <p className="font-serif italic text-[76px] leading-none text-primary">work</p>
        </div>

        {/* Project 1 — CLOUT */}
        <div className="flex gap-10 items-center mb-0">
          {/* Info */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              <p className="text-[16px] leading-6 text-dark-grey">PROJECT #1</p>
              <p className="text-[48px] font-medium leading-none text-primary">CLOUT</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["UX Design", "UI Design", "Web Design", "Mobile Design"].map((t) => (
                <Chip key={t} label={t} variant="blue" />
              ))}
            </div>
            <p className="text-[18px] leading-[27px] text-dark-grey w-[471px]">
              A platform helping aesthetic providers build trust and credibility. Designed complete
              sign-up, medical certification, endorsement, and profile onboarding flows.
            </p>
            <Link
              to="/work/clout"
              className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors w-fit"
            >
              <ArrowUpRight size={20} />
              View
            </Link>
          </div>

          {/* Clout image */}
          <div
            className="flex-shrink-0 w-[700px] h-[511px] bg-powder-blue overflow-hidden relative rounded-[12px]"
            style={{
              WebkitMaskImage: `url(${cloutMask})`,
              maskImage: `url(${cloutMask})`,
              WebkitMaskSize: "659px 421px",
              maskSize: "659px 421px",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <img
              src={cloutWeb}
              alt="Clout web"
              className="absolute w-[672px] h-[840px] left-[69px] top-[-145px] object-cover"
            />
            <img
              src={cloutMobile}
              alt="Clout mobile"
              className="absolute w-[357px] h-[267px] left-[-51px] bottom-[87px] object-cover"
            />
          </div>
        </div>

        {/* Project 2 — RDACTD */}
        <div className="flex gap-10 items-center py-16">
          {/* Info */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              <p className="text-[16px] leading-6 text-dark-grey">PROJECT #2</p>
              <p className="text-[48px] font-medium leading-none text-primary">RDACTD</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["UI Design", "Web Design", "Mobile Design"].map((t) => (
                <Chip key={t} label={t} variant="pink" />
              ))}
            </div>
            <p className="text-[18px] leading-[27px] text-dark-grey w-[471px]">
              A complaint resolution platform for users and businesses. Created dashboards, filing
              flows, and a scoring system to improve response speed.
            </p>
            <Link
              to="/work/rdactd"
              className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors w-fit"
            >
              <ArrowUpRight size={20} />
              View
            </Link>
          </div>

          {/* RDACTD image */}
          <div
            className="flex-shrink-0 w-[700px] h-[511px] bg-powder-pink overflow-hidden relative rounded-[12px]"
            style={{
              WebkitMaskImage: `url(${cloutMask})`,
              maskImage: `url(${cloutMask})`,
              WebkitMaskSize: "659px 421px",
              maskSize: "659px 421px",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <img
              src={rdactd}
              alt="RDACTD"
              className="absolute w-[925px] h-[520px] left-[-132px] top-[17px] object-cover"
            />
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-6 py-4 text-[18px] text-black hover:bg-powder-pink transition-colors"
          >
            <ArrowUpRight size={20} />
            View All Projects
          </Link>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <AboutTeaser />
    </div>
  );
}

function AboutTeaser() {
  return (
    <section className="flex items-center justify-between px-[120px] pt-[40px] pb-[120px]">
      <div className="flex flex-col gap-10 w-[577px]">
        <div>
          <p className="font-normal text-[72px] leading-none text-primary">About</p>
          <p className="font-serif italic text-[76px] leading-none text-primary">Mansi</p>
        </div>
        <p className="text-[24px] leading-[36px] text-dark-grey">
          I design digital experiences that blend user needs with business goals. From startups to
          growing businesses, my work helps products gain trust, improve flow, and convert better.
        </p>
      </div>

      {/* Mansi photo with circular mask */}
      <div className="relative flex-shrink-0 w-[374px] h-[374px]">
        <img src={ellipse} alt="" className="absolute inset-0 w-full h-full" />
        <div
          className="absolute w-[438px] h-[402px] overflow-hidden rounded-full left-[-32px] top-[-20px]"
          style={{
            WebkitMaskImage: `url(${mansiMask})`,
            maskImage: `url(${mansiMask})`,
            WebkitMaskSize: "374px 374px",
            maskSize: "374px 374px",
            WebkitMaskPosition: "32px 20px",
            maskPosition: "32px 20px",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <img
            src={mansiAbout}
            alt="Mansi"
            className="w-full h-[136%] object-cover object-top translate-y-[-36%]"
          />
        </div>
      </div>
    </section>
  );
}
