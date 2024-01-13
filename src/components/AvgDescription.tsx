import { ReactNode } from "react";

type Props = {
    title: string,
    value: string
}

export const AvgDescription = ({title, value} :Props) => {
    return (
        <div className="flex flex-col justify-center pb-5 md:p-6">
            <h6 className="text-indigo-200 text-sm font-normal font-barlow uppercase tracking-widest text-center">
                {title}
            </h6>
            <span className="text-center text-white text-[28px] font-normal font-bellefair uppercase">
                {value}
            </span>
        </div>
    )
}