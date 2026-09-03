'use client'
import { useEffect, useState } from 'react'

const navigationItems = [
    { id: 'hero', label: 'Hero' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
]

function NavLinks() {
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 80
            let currentId = navigationItems[0].id

            navigationItems.forEach(({ id }) => {
                const section = document.getElementById(id)
                if (!section) return

                const sectionTop = section.getBoundingClientRect().top + window.scrollY
                if (sectionTop <= scrollPosition) currentId = id
            })

            setActive(currentId)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [])

    return (
        <nav className='flex items-center justify-center gap-4' aria-label='Main navigation'>
            {navigationItems.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setActive(id)}
                    className={`inline-block ${active === id ? 'sec-col' : 'main-col'} text-sm transition-all duration-300 ease-in-out hover:text-[#F5C9B0] sm:text-md`}
                    aria-current={active === id ? 'page' : undefined}
                >
                    {label}
                </a>
            ))}
        </nav>
    )
}

export default NavLinks