import { BsDot } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="skills" className="mx-5">
      <h2 className="my-13 text-sm soft-col tracking-widest text-center sm:text-start">Tools I work with</h2>
      <div className="grid grid-cols-1 gap-7 my-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">Next.js</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">App Router, SSR/ISR, server actions</p>
        </div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">React.js</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Hooks, composition, state patterns</p>
        </div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">WordPress</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Custom themes, ACF, block editor</p>
        </div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">TailwindCSS</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Design tokens & scalable UI</p>
        </div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">Bootstrap</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Legacy & rapid delivery projects</p>
        </div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">Shadcn/UI</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Accessible component systems</p>
        </div>
        <div className="w-0 h-0 hidden md:block"></div>
        <div className="w-full border rounded-xl p-2 border-[#5f7a5e] transition-all duration-300 group hover:-translate-y-1 hover:border-[#24453b] hover:shadow-md hover:shadow-[#24453b58]">
          <span className="flex flex-row items-center gap-2 ">
            <BsDot className="main-col text-xl transition-all duration-300 group-hover:text-[#F5C9B0]" />
            <h3 className="main-col text-xs font-bold">Git</h3>
          </span>
          <p className="soft-col text-[12px] ms-7 mt-1">Branching, reviews, CI workflows</p>
        </div>
      </div>
    </div>
  )
}

export default Skills