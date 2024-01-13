"use client"

import { ToDoList } from "@/components/ToDoList";
import Image from "next/image";
import data from '@/data/data.json';
import React, { useEffect, useState } from "react";
import { PlanetName } from "@/components/PlanetName";
import { Destination } from "@/types/Destination";
import moonPng from '@/assets/destination/image-moon.png';
import { AvgDescription } from "@/components/AvgDescription";

interface PlanetListProps {
    data: {
        destination: Destination[];
    }
}

const Page = () => {
    const [selectPlanet, setSelectPlanet] = useState<Destination | null>(null);

    const moonDestination = data.destinations.find(planet => planet.name === 'Lua');
        
    useEffect(() => {
        if (moonDestination) {
            setSelectPlanet(moonDestination);
        }
    }, [moonDestination]);

    const handlePlanetClick = (planet: Destination) => {
        setSelectPlanet(planet)
    }

    console.log()
    return (
        
        <div className={`w-[100vw] h-[100vh] bg-[url('../assets/destination/background-destination-mobile.jpg')] bg-cover bg-center
                        md:bg-[url('../assets/destination/background-destination-tablet.jpg')]
                        lg:md:bg-[url('../assets/destination/background-destination-desktop.jpg')] md:h-full xl:flex xl:h-[100vh]`
        }>
            <div className="flex pt-[89px] justify-center flex-col items-center md:pt-[42px] xl:flex-1 xl:justify-center">
                <div className="md:w-full md:flex md:justify-start xl:justify-center md:pt-[39px]">
                    <ToDoList number="01" value="escolha seu destino"/>
                </div>
                    {selectPlanet &&
                        <Image src={'/'+selectPlanet.images.png} alt="" width={170} height={170} 
                            className="mt-8 md:w-[300px] md:h-[300px] md:mt-[60px] xl:w-[445px] xl:h-[445px]"/>
                    }
                    
            </div>
            <div className="xl:flex-1 xl:flex xl:items-end">
                <div className="xl:flex xl:flex-col">
                    <nav className="flex justify-center space-x-[26px] xl:justify-start xl:pl-[43px]">
                        {data.destinations.map((planet,index) => (
                            <PlanetName key={index} onClick={() => handlePlanetClick(planet)} 
                                code={selectPlanet?.name === planet.name ? 'border-white/100 text-gray-100' : ''}
                            >
                                {planet.name}
                            </PlanetName>
                        ))}
                    </nav>

                    {selectPlanet && 
                    <div className="flex flex-col items-center xl:justify-start xl:items-start xl:ml-[43px]">
                        <h1 className="mt-4 text-white text-[56px] font-normal font-bellefair uppercase md:text-[80px] xl:text-[100px]">
                            {selectPlanet.name}
                        </h1>
                        <p className="w-[327px] text-indigo-200 text-[15px] font-normal font-barlow leading-[25px] text-center md:w-[573px] 
                                    md:text-base md:leading-7 xl:text-lg xl:leading-loose xl:text-left xl:w-[444px]">
                            {selectPlanet.description}
                        </p>
                        <div className="w-4/5 bg-gray-700 h-[1px] mt-8"></div>

                        <div className="flex flex-col items-center mt-8 md:flex-row md:mt-0">
                                <AvgDescription title="Distancia med." value={selectPlanet.distance}/>
                                <AvgDescription title="tempo de viagem" value={selectPlanet.travel}/>
                        </div>
                    </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Page;