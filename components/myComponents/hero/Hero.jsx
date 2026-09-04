import { SiGmail } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";
import { VscSymbolNamespace } from "react-icons/vsc";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col py-10 px-7">
      <div className="flex w-full justify-center sm:justify-start">
        <span className="flex items-center justify-center gap-1 mx-auto my-2 main-col sec-bg w-fit py-1 px-3 rounded-full font-medium  text-sm text-center sm:mx-0 sm:justify-start sm:text-left">
          <VscSymbolNamespace className="mb-px" />Front-End & WordPress Developer
        </span>
      </div>
      <h1 className="main-col text-3xl mt-1 font-bold w-full text-center sm:text-start sm:w-[90%] md:w-[75%]">Frontend Developer building blazing-fast Next.js apps & scalable WordPress sites.</h1>
      <p className="soft-col text-[14px] font-normal my-5 w-full text-center sm:text-start sm:w-[90%] md:w-[65%]">I specialize in custom WordPress development with Elementor, focusing on UX and Core Web Vitals optimization. I also build modern Frontend interfaces using React, TypeScript, Tailwind CSS, and shadcn/ui.</p>
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
        <a href="#gallery" className="flex gap-1 text-xs text-center text-white main-bg rounded-2xl px-3 py-2 items-center transition-all duration-300 hover:bg-[#5f7a5e]">
          View My Projects<BiDownArrowAlt className="text-sm" />
        </a>
        <a href="https://github.com/Mohammed-23-ham" target="_blank" rel="noreferrer" className="flex w-10 h-10 text-xl text-center bg-transparent main-col border-[#24453b] main-bg items-center transition-all duration-300 border rounded-full justify-center hover:bg-[#24453b] hover:text-[white]">
          <AiFillGithub className="m-auto" />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-alhamawy-602926342/" target="_blank" rel="noreferrer" className="flex w-10 h-10 text-xl text-center bg-transparent main-col border-[#24453b] main-bg items-center transition-all duration-300 border rounded-full justify-center hover:bg-[#24453b] hover:text-[white]">
          <GrLinkedinOption className="m-auto" />
        </a>
        <a href="mailto:alhamawymohamed@gmail.com" target="_blank" className="flex w-10 h-10 text-xl text-center bg-transparent main-col border-[#24453b] main-bg items-center transition-all duration-300 border rounded-full justify-center hover:bg-[#24453b] hover:text-[white]">
          <SiGmail className="m-auto" />
        </a>
      </div>
    </div>
  )
}

export default Hero