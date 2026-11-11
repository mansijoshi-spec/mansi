import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import cloutWeb from "../assets/images/clout-web.png";
import cloutMobile from "../assets/images/clout-mobile.png";
import rdactd from "../assets/images/rdactd.png";
import workMatrisakhi from "../assets/images/work-matrisakhi.png";
import workLeadnics from "../assets/images/work-leadnics.png";
import work4DCareer from "../assets/images/work-4dcareer.png";
import gradientTop from "../assets/svgs/gradient-top.svg";
import cloutMask from "../assets/svgs/clout-mask.svg";

const PROJECTS = [
  {
    id: 1,
    number: "PROJECT #1",
    name: "CLOUT",
    tags: ["UX Design", "UI Design", "Web Design", "Mobile Design"],
    description:
      "A platform helping aesthetic providers build trust and credibility. Designed complete sign-up, medical certification, endorsement, and profile onboarding flows.",
    bgColor: "bg-powder-blue",
    images: [
      { src: cloutWeb, className: "absolute w-[672px] h-[840px] left-[69px] top-[-145px] object-cover" },
      { src: cloutMobile, className: "absolute w-[357px] h-[267px] left-[-51px] bottom-[87px] object-cover" },
    ],
    href: "/work/clout",
  },
  {
    id: 2,
    number: "PROJECT #2",
    name: "RDACTD",
    tags: ["UI Design", "Web Design", "Mobile Design"],
    description:
      "A complaint resolution platform for users and businesses. Created dashboards, filing flows, and a scoring system to improve response speed.",
    bgColor: "bg-powder-pink",
    images: [
      { src: rdactd, className: "absolute w-[925px] h-[520px] left-[-132px] top-[17px] object-cover" },
    ],
    href: "/work/rdactd",
  },
  {
    id: 3,
    number: "PROJECT #3",
    name: "MATRI SAKHI",
    tags: ["UI Design", "Mobile Design"],
    description:
      "Maternal health app redesign. Simplified navigation, improved accessibility, and increased engagement among diverse user groups.",
    bgColor: "bg-powder-blue",
    images: [
      { src: workMatrisakhi, className: "absolute w-full h-full object-cover object-center" },
    ],
    href: "/work/matrisakhi",
  },
  {
    id: 4,
    number: "PROJECT #4",
    name: "LEADNICS",
    tags: ["UI Design", "Mobile Design"],
    description:
      "Leadnics is a lead management app I designed to streamline sales workflows and improve lead conversion.",
    bgColor: "bg-powder-pink",
    images: [
      { src: workLeadnics, className: "absolute w-full h-full object-cover object-center" },
    ],
    href: "/work/leadnics",
  },
  {
    id: 5,
    number: "PROJECT #5",
    name: "4D Career",
    tags: ["UI Design", "Mobile Design"],
    description:
      "4D Career is a career guidance platform I designed to help users explore career paths, assess skills, and access tailored growth resources.",
    bgColor: "bg-powder-blue",
    images: [
      { src: work4DCareer, className: "absolute w-full h-[114%] top-[-8%] left-0 object-cover" },
    ],
    href: "#",
  },
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-2 rounded-[24px] text-[16px] leading-6 border text-black bg-[rgba(243,247,255,0.5)] border-primary">
      {label}
    </span>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <div
      className={`flex items-center gap-10 py-16 border-b border-pink-stroke/20 last:border-0 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Text side */}
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        <div className="flex flex-col gap-4">
          <p className="text-[16px] leading-6 text-dark-grey">{project.number}</p>
          <p className="text-[48px] font-medium leading-none text-primary">{project.name}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
        <p className="text-[18px] leading-[27px] text-dark-grey max-w-[471px]">
          {project.description}
        </p>
        {project.href === "#" ? (
          <span className="inline-flex items-center gap-2 border border-pink-stroke/40 rounded px-4 py-3 text-[16px] text-dark-grey/40 cursor-not-allowed w-fit">
            <ArrowUpRight size={20} />
            View
          </span>
        ) : (
          <Link
            to={project.href}
            className="inline-flex items-center gap-2 border border-pink-stroke rounded px-4 py-3 text-[16px] text-black hover:bg-powder-pink transition-colors w-fit group"
          >
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            View
          </Link>
        )}
      </div>

      {/* Image side */}
      <div
        className={`flex-shrink-0 w-[700px] h-[511px] ${project.bgColor} overflow-hidden relative rounded-[12px]`}
        style={{
          WebkitMaskImage: `url(${cloutMask})`,
          maskImage: `url(${cloutMask})`,
          WebkitMaskSize: "659px 421px",
          maskSize: "659px 421px",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {project.images.map((img, i) => (
          <img key={i} src={img.src} alt={project.name} className={img.className} />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="bg-bg overflow-hidden">
      {/* Gradient top */}
      <div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
        <img src={gradientTop} alt="" className="w-full h-full" />
      </div>

      <div className="pt-[212px] px-[120px] pb-[120px]">
        {/* Section heading */}
        <div className="mb-10">
          <p className="font-normal text-[72px] leading-none text-primary">My</p>
          <p className="font-serif italic text-[76px] leading-none text-primary">work</p>
        </div>

        {/* Projects */}
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} reverse={i % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
