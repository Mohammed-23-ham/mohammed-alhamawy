'use client'
import { useState, useEffect } from 'react'
import { Circle } from 'lucide-react'

const ScrollBar = () => {

    const [hover1, setHover1] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const ids = ['hero', 'gallery', 'contact']

        const updateActiveSection = () => {
            if (window.scrollY <= 20) {
                setActive('hero')
                return
            }

            const sections = ids
                .map(id => document.getElementById(id))
                .filter(Boolean)
            const screenCenter = window.innerHeight / 2
            const currentSection = sections.find(section => {
                const bounds = section.getBoundingClientRect()
                return bounds.top <= screenCenter && bounds.bottom >= screenCenter
            })

            if (currentSection) {
                setActive(currentSection.id)
                return
            }

            const closestSection = sections.reduce((closest, section) => {
                const sectionCenter = section.getBoundingClientRect().top + section.offsetHeight / 2
                const closestCenter = closest.getBoundingClientRect().top + closest.offsetHeight / 2
                return Math.abs(sectionCenter - screenCenter) < Math.abs(closestCenter - screenCenter)
                    ? section
                    : closest
            })
            setActive(closestSection?.id || '')
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [])

    const focus1 = active === 'hero'
    const focus3 = active === 'gallery'
    const focus4 = active === 'contact'

    return (
        <ul className='min-w-16 fixed right-1 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-10 hidden md:flex'>
            <li tabIndex={0} onFocus={() => setActive('hero')} onBlur={() => setActive('')} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#hero" className={(hover1 || focus1) ? 'main-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-100 text-xs text-center mb-0.5 pointer-events-auto' : 'soft-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Hero</a>
                <a href="#hero" className={'h-0.5 main-bg rounded-full inline-block transition-all duration-300 ' + (focus1 ? 'w-5 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#hero"><Circle className={'w-1 h-1 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus1 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
            <li tabIndex={0} onFocus={() => setActive('gallery')} onBlur={() => setActive('')} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#gallery" className={(hover3 || focus3) ? 'main-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-100 text-xs text-center mb-0.5 pointer-events-auto' : 'soft-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Gallery</a>
                <a href="#gallery" className={'h-0.5 main-bg rounded-full inline-block transition-all duration-300 ' + (focus3 ? 'w-5 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#gallery"><Circle className={'w-1 h-1 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus3 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
            <li tabIndex={0} onFocus={() => setActive('contact')} onBlur={() => setActive('')} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#contact" className={(hover4 || focus4) ? 'main-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-100 text-xs text-center mb-0.5 pointer-events-auto' : 'soft-col absolute right-full mr-1 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Contact</a>
                <a href="#contact" className={'h-0.5 main-bg rounded-full inline-block transition-all duration-300 ' + (focus4 ? 'w-5 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#contact"><Circle className={'w-1 h-1 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus4 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
        </ul>
    )
}

export default ScrollBar