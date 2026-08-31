
const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center sm:items-start px-3 py-7 border-t border-[#5f7a5e65] gap-1'>
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="main-col font-bold">Mohammed Al-Hamawy</span>
        <p className="soft-col text-center text-sm sm:text-start">Flawless design-to-code execution for WordPress and front-end projects. Optimized for speed, maintainability, and seamless user experience.</p>
      </div>
      <a href="mailto:alhamawymohamed@gmail.com" className="main-col text-sm underline decoration-[#24453b] decoration-solid">alhamawymohamed@gmail.com</a>
      <div className="w-full h-px my-3 bg-[#5f7a5e] opacity-30 items-start " />
      <p className="text-xs soft-col">© 2026 Mohammed Al-Hamawy. All rights reserved.</p>
    </div>
  )
}

export default Footer