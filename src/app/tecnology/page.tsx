"use client"

import { ToDoList } from "@/components/ToDoList";
import { Technology } from "@/types/Technology";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from '@/data/data.json';


interface PlanetListProps {
    data: {
        technology: Technology[];
    }
}

const page = () => {
    const [selectTechnology, setSelectTechnology] = useState<Technology | null>(null);

    const firstTechnology = data.technology.find(trip => trip.name === "Veículo de lançamento");
        
    useEffect(() => {
        if (firstTechnology) {
            setSelectTechnology(firstTechnology);
        }
    }, [firstTechnology]);

    const handleCrewClick = (tech: Technology) => {
        setSelectTechnology(tech);
    }


    return (
        <div className={`w-[100vw] h-[100vh] bg-[url('../assets/technology/background-technology-mobile.jpg')] bg-cover bg-center
                        md:bg-[url('../assets/technology/background-technology-tablet.jpg')] md:h-full
                        lg:md:bg-[url('../assets/technology/background-technology-desktop.jpg')] xl:flex xl:h-[100vh] xl:flex-row-reverse`
        }>
            <div className="flex pt-[89px] justify-center flex-col items-center md:pt-[82px] xl:flex-1 xl:justify-center xl:items-end">
                <div className="md:w-full md:flex md:justify-start xl:justify-center xl:relative xl:right-[720px]">
                    <ToDoList number="03" value="LANÇAMENTO ESPACIAL 101"/>
                </div>
                    {selectTechnology &&
                        <Image src={'/'+selectTechnology?.images.portrait} alt="" width={170} height={170} 
                            className="mt-8 w-full h-[170px] md:w-full md:h-[310px] md:mt-[60px] xl:w-[515px] xl:h-[527px]"/>
                    }
                    
            </div>

            <div className="flex justify-center items-center xl:flex-1 xl:justify-start xl:pl-[118px]">
                    <div className="flex justify-center items-center flex-col md:flex-col xl:flex-row xl:w-[600px]">
                        <nav className="flex justify-center items-center w-[100vw] mt-8 space-x-[16px] md:my-[44px] xl:justify-start
                                xl:space-x-0 xl:space-y-8 xl:w-full xl:flex-col xl:my-0 xl:mr-20">
                            {data.technology.map((tech,index) => (
                                <li 
                                    key={index} 
                                    className={`flex justify-center items-center cursor-pointer w-10 h-10 rounded-full list-none 
                                        border hover:bg-white/45 ${selectTechnology?.name === tech.name ? 'bg-white/100 text-black' :
                                         ''} md:w-[60px] md:h-[60px] xl:w-20 xl:h-20`}
                                    onClick={() => handleCrewClick(tech)}
                                >
                                    {index+1}
                                </li>
                                ))}
                        </nav>
                        {selectTechnology &&
                            <div className="flex justify-center flex-col items-center mt-[26px] xl:items-start md:mt-0">
                                <span className="text-sm text-indigo-200 md:text-base md:tracking-[2.70px] md:font-normal">
                                    A TERMINOLOGIA
                                </span>
                                <h2 
                                    className="text-white text-2xl font-normal font-bellefair uppercase mt-2
                                        md:text-[40px] md:my-4 xl:text-[32px] xl:leading-[3rem] xl:my-[16px]">
                                    {selectTechnology.name}
                                </h2>
                                <p 
                                    className="text-indigo-200 text-center font-barlow text-[15px] mt-4 px-6 md:text-base
                                    md:font-normal md:leading-7 md:w-[458px] xl:text-left xl:px-0">
                                    {selectTechnology.description}
                                </p>
                            </div>
                            
                        }
                    </div>
                </div>
        </div>
    )
}

export default page;