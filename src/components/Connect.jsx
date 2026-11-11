import { Mail } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Connect() {
  return (
    <section className="bg-powder-pink px-[120px] py-[96px] flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center w-[577px]">
        <div className="text-center">
          <p className="font-normal text-[72px] leading-none text-primary">Connect</p>
          <p className="font-serif italic text-[76px] leading-none text-primary">with me</p>
        </div>
        <p className="text-[24px] leading-[36px] text-dark-grey text-center">
          Let's design something users can't ignore.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="mailto:mansijoshidesign@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-primary rounded px-4 py-3 text-[16px] text-black w-[152px] justify-center hover:bg-white/50 transition-colors"
          >
            <Mail size={20} />
            <span className="underline">Email me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mansi-joshi-025/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-primary rounded px-4 py-3 text-[16px] text-black w-[152px] justify-center hover:bg-white/50 transition-colors"
          >
            <LinkedInIcon />
            <span className="underline">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
