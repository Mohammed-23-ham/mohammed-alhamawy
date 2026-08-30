'use client'
import { useState, useEffect } from 'react'
import { Circle } from 'lucide-react'

const ScrollBar = () => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const ids = ['hero', 'skills', 'gallary', 'contact']
        const obs = new IntersectionObserver((entries) => {
            let best = { id: '', ratio: 0 }
            entries.forEach(e => {
                const id = e.target?.id
                if (!id) return
                if (e.isIntersecting && e.intersectionRatio > best.ratio) {
                    best = { id, ratio: e.intersectionRatio }
                }
            })
            setActive(best.id)
        }, { threshold: [0.25, 0.5, 0.75] })

        ids.forEach(id => {
            const el = document.getElementById(id)
            if (el) obs.observe(el)
        })

        return () => obs.disconnect()
    }, [])

    const focus1 = active === 'hero'
    const focus2 = active === 'skills'
    const focus3 = active === 'gallary'
    const focus4 = active === 'contact'

    return (
        <ul className='min-w-18.75 fixed right-2 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-7 hidden sm:flex'>
            <li tabIndex={0} onFocus={() => setActive('hero')} onBlur={() => setActive('')} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#hero" className={(hover1 || focus1) ? 'main-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-100 pointer-events-auto' : 'soft-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Hero</a>
                <a href="#hero" className={'h-2 main-bg rounded-full inline-block transition-all duration-300 ' + (focus1 ? 'w-7 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#hero"><Circle className={'w-3 h-3 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus1 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
            <li tabIndex={0} onFocus={() => setActive('skills')} onBlur={() => setActive('')} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#skills" className={(hover2 || focus2) ? 'main-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-100 pointer-events-auto' : 'soft-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Skills</a>
                <a href="#skills" className={'h-2 main-bg rounded-full inline-block transition-all duration-300 ' + (focus2 ? 'w-7 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#skills"><Circle className={'w-3 h-3 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus2 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
            <li tabIndex={0} onFocus={() => setActive('gallary')} onBlur={() => setActive('')} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#gallary" className={(hover3 || focus3) ? 'main-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-100 pointer-events-auto' : 'soft-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Gallary</a>
                <a href="#gallary" className={'h-2 main-bg rounded-full inline-block transition-all duration-300 ' + (focus3 ? 'w-7 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#gallary"><Circle className={'w-3 h-3 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus3 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
            <li tabIndex={0} onFocus={() => setActive('contact')} onBlur={() => setActive('')} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} className='relative flex justify-center items-center gap-4'>
                <a href="#contact" className={(hover4 || focus4) ? 'main-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-100 pointer-events-auto' : 'soft-col absolute right-full mr-2 whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none'}>Contact</a>
                <a href="#contact" className={'h-2 main-bg rounded-full inline-block transition-all duration-300 ' + (focus4 ? 'w-7 opacity-100' : 'w-0 opacity-0')}></a>
                <a href="#contact"><Circle className={'w-3 h-3 soft-bg rounded-full soft-col transition-all duration-300 ' + (focus4 ? 'opacity-0 scale-75' : 'opacity-100 scale-100')} /></a>
            </li>
        </ul>
    )
}

export default ScrollBar