import { Destination } from "@/types/Destination"
import { ReactNode } from "react"

type Props = {
    code: string,
    children: ReactNode,
    onClick: () => void
}

export const PlanetName = ({code, children, onClick}: Props) => {
    return (
        <li onClick={onClick} className={`text-white/60 text-sm font-normal font-barlow tracking-widest uppercase list-none border-transparent
            border-b-2 pb-2 hover:border-b-2 hover:text-white hover:border-white hover:pb-1 md:text-base md:tracking-[2.70px]
            ${code}`}>
            {children}
        </li>
    )
}