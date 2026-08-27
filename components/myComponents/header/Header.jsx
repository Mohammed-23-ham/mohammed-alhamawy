'use client';

import { useState, useEffect } from 'react';

const Header = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsExpanded((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='sticky top-0 left-0 flex justify-between items-center px-6 py-4 bg-white'>
            <div className="flex items-center justify-center">
                <div className="group inline-flex items-center ">
                    <span className="sec-col text-2xl">M</span>
                    <span className={`text-2xl overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out main-col ${isExpanded ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
                        ohammed
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <span className='main-col hover:text-[#F5C9B0] transition-all duration-300 ease-in-out' id='hero'>Hero</span>
                <span className='main-col hover:text-[#F5C9B0] transition-all duration-300 ease-in-out' id='skills'>Skills</span>
                <span className='main-col hover:text-[#F5C9B0] transition-all duration-300 ease-in-out' id='gallary'>Gallary</span>
                <span className='main-col hover:text-[#F5C9B0] transition-all duration-300 ease-in-out' id='contact'>Contact</span>
            </div>
        </div>
    )
}

export default Header