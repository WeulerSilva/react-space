"use client"

import hamburgSvg from '@/assets/shared/icon-hamburger.svg';
import closeSvg from '@/assets/shared/icon-close.svg';
import { useEffect, useRef, useState } from 'react';
import { NavList } from './NavList';

export const MenuMobile = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [])

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    
    return (
        <div>
            <div onClick={toggleMenu}>
                <img src={menuVisible ? closeSvg.src : hamburgSvg.src} className='text-[#D0D6F9]' width={24} height={21}/>
            </div>
            {menuVisible && 
                <nav ref={menuRef} className='
                                w-[68%]  h-[100vh] bg-white bg-opacity-5 backdrop-blur-[33.55px] absolute right-0
                                top-0 list-none text-base font-normal z-[-1]'>
                    <ul className='mt-[118px]'>
                        <NavList showSpan={false}/>
                    </ul>
                </nav>
            }
        </div>
    )
}