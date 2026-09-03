'use client'
import { useState } from "react"
import { Categories, ProjectData } from '@/public/data/projectData'

const Gallary = () => {

  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div id='gallary' className='mx-1 my-7 gap-3 border-y px-3 py-7 border-[#5f7a5e65]'>
      <span className="my-13 text-sm soft-col tracking-widest text-center sm:text-start">Portfolio</span>
      <h2 className="my-2 text-2xl font-bold main-col">Featured Work</h2>
      <p className="soft-col text-[16px] font-normal my-5 w-full text-center sm:text-start sm:w-[90%] md:w-[65%]">A selection of client and product builds — each one shipped with a measurable performance or maintainability win.</p>
      <div className="flex flex-col mx-2 my-5">
        <div role="group" aria-label="Filter projects" className="flex w-fit max-w-full flex-row overflow-x-auto rounded-4xl border border-[#5f7a5e65] bg-[#5f7a5e2f] my-5 p-1">
          {[
            ["all", "All"],
            ["wordpress", "WordPress"],
            ["react", "React / Next.js"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
              className={`whitespace-nowrap rounded-4xl px-2 py-1 text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f7a5e] ${
                activeFilter === value
                  ? "sec-bg soft-col"
                  : "bg-transparent soft-col hover:sec-bg"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ProjectData.filter((project) => {
            if (activeFilter === "all") return true
            if (activeFilter === "wordpress") return project.category === Categories.WordPress
            if (activeFilter === "react") return project.category === Categories.React || project.category === Categories.Next
            return false
          }).map((project) => (
            <div key={project.key} className="flex h-full flex-col gap-3 rounded-lg border border-[#5f7a5e65] transition-all duration-300 hover:scale-[1.02] hover:border-[#5f7a5e]">
              <img src={project.img} alt={project.title} className="h-50 w-full rounded-lg object-cover" />
              <div className="flex m-3 flex-1 flex-col gap-2">
                <h3 className="text-lg font-semibold main-col">{project.title}</h3>
                <p className="soft-col text-sm">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="rounded-full bg-[#5f7a5e2f] px-2 py-1 text-xs soft-col">{tech}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block rounded bg-[#5f7a5e] px-3 py-1 text-sm font-medium text-white transition-all duration-300 hover:bg-[#5f7a5e9c]">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallary