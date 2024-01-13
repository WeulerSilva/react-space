"use client"


import Link from "next/link"
import { useState } from "react"
import { navItem } from "./NavItem"

type Props = {
    showSpan: boolean
}

export const NavList = ({showSpan}: Props) => {
    const [activeClass, setActiveClass] = useState<number | null>(null);


    const handleActiveClass = (index: number) => {
        setActiveClass(index === activeClass ? null : index)
    }

    return (
        <>
            {navItem.map((item, index) => (
            <Link href={item.href}>
                <li className={`ml-8 font-[Barlow] mb-8 font-normal track tracking-[2.70px] md:text-sm md:tracking-widest text-gray-300 md:mx-3 
                               md:mt-2 md:hover:border-b-4 md:hover:border-gray-300 md:hover:text-white md:pb-[30px] md:relative md:top-8
                               ${index === activeClass ? 'border-b-4 border-b-white/100 text-gray-50' : 'bg-transparent'}`}
                    onClick={() => handleActiveClass(index)}
                    >
                    {showSpan &&
                        <span className="mr-[14px] font-bold">
                            {item.value}
                        </span>
                    }
                        
                        {item.span}
                </li>
            </Link>
            ))}
        </>
    )
}