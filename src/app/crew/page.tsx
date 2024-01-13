"use client"

import { ToDoList } from "@/components/ToDoList";
import { Crew } from "@/types/Crew";
import { useEffect, useState } from "react";
import data from '@/data/data.json';
import Image from "next/image";


interface PlanetListProps {
    data: {
        crew: Crew[];
    }
}


const page = () => {
    const [selectCrew, setSelectCrew] = useState<Crew | null>(null);

    const firstCrew = data.crew.find(trip => trip.name === "Douglas Hurley");
        
    useEffect(() => {
        if (firstCrew) {
            setSelectCrew(firstCrew);
        }
    }, [firstCrew]);

    const handleCrewClick = (trip: Crew) => {
        setSelectCrew(trip);
    }


    return (
        <div className="bg-[url('../assets/crew/background-crew-mobile.jpg')] bg-cover bg-center w-[100vw] h-[100vh]
                        md:bg-[url('../assets/crew/background-crew-tablet.jpg')] xl:bg-[url('../assets/crew/background-crew-desktop.jpg')]
                        flex justify-center items-center flex-col md:justify-end md:h-full xl:h-[100vh] xl:justify-between">
            <div className="mt-[88px] md:w-[100vw] md:flex md:justify-start xl:mt-0 xl:relative xl:top-[162px] xl:mb-[30px] xl:pl-[142px]">
                    <ToDoList number="02" value="Conheça a sua tripulação"/>
            </div>

            <div className="md:flex md:flex-col-reverse xl:flex-row-reverse xl:w-full xl:justify-between xl:items-center">
                <div className="flex justify-center flex-col items-center border-b-2 border-gray-500 
                                md:border-none xl:flex-1 xl:justify-center">
                        {selectCrew &&
                            <Image src={'/'+selectCrew.images.webp} alt="" width={170} height={170} 
                                className="mt-8 md:w-[440px] md:h-[550px] md:mt-[25px] xl:max-w-[566px] xl:max-h-[712px] xl:h-full xl:w-full"
                            />
                        }
                </div>

                <div className="flex justify-center items-center xl:flex-1 xl:justify-start xl:pl-[118px]">
                    <div className="flex justify-center items-center flex-col md:flex-col-reverse xl:flex-col-reverse xl:w-[600px]">
                        <nav className="flex justify-center items-center w-[100vw] mt-8 space-x-[26px] md:my-[30px] xl:justify-start
                                xl:pl-[43px] xl:w-full">
                            {data.crew.map((crew,index) => (
                                <li 
                                    key={index} 
                                    className={`cursor-pointer w-4 h-4 rounded-full list-none hover:bg-white/45
                                        ${selectCrew?.name === crew.name ? 'bg-white/100' : 'bg-gray-700'} `}
                                    onClick={() => handleCrewClick(crew)}
                                >
                                </li>
                                ))}
                        </nav>
                        {selectCrew &&
                            <div className="flex justify-center flex-col items-center xl:items-start">
                                <h2 
                                    className="opacity-50 text-base font-normal font-bellefair uppercase mt-8
                                        md:text-2xl md:mt-4 md:mb-[40px] xl:text-[32px] xl:leading-[3rem] xl:mb-[15px] xl:mt-[150px]">
                                    {selectCrew.role}
                                </h2>
                                <h1 
                                    className="text-2xl font-normal font-bellefair uppercase mb-4 md:text-[48px] xl:text-[56px]
                                        xl:mb-[27px]">
                                        {selectCrew.name}
                                </h1>
                                <p 
                                    className="w-[327px] text-indigo-200 text-[15px] font-normal font-barlow leading-[25px] text-center
                                        md:w-[462px] md:text-base md:text-center md:leading-7 xl:text-lg xl:leading-loose xl:text-left
                                        xl:mb-[120px]">
                                    {selectCrew.bio}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default page;