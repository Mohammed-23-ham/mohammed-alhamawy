'use client';
import NavLinks  from './NavLinks';

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
        <div className='sticky top-0 left-0 flex justify-between items-center px-6 py-4 backdrop-blur-xl'>
            <div className="flex items-center justify-center">
                <div className="group inline-flex items-center ">
                    <span className="sec-col text-xl sm:text-2xl">M</span>
                    <span className={`text-xl sm:text-2xl overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-in-out main-col ${isExpanded ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
                        ohammed
                    </span>
                </div>
            </div>
            <NavLinks />
        </div>
    )
}

export default Header
