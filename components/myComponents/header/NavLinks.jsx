'use client';
import { useState, useEffect } from "react";

function NavLinks() {
    const [active, setActive] = useState('')

    useEffect(() => {
        const ids = ['hero', 'skills', 'gallary', 'contact']
        const obs = new IntersectionObserver((entries) => {
            // pick the most visible entry
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

        // cleanup
        return () => obs.disconnect()
    }, [])

    const linkClass = (id) => `inline-block main-col hover:text-[#F5C9B0] transition-all duration-300 ease-in-out ${active===id ? 'sec-col' : ''}`

    return (
        <div className='flex items-center justify-center gap-4'>
            <a href="#hero" className={linkClass('hero')}>Hero</a>
            <a href="#skills" className={linkClass('skills')}>Skills</a>
            <a href="#gallary" className={linkClass('gallary')}>Gallary</a>
            <a href="#contact" className={linkClass('contact')}>Contact</a>
        </div>
    )
}
export default NavLinks