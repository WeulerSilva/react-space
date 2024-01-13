type Props = {
    number: string,
    value: string
}

export const ToDoList = ({number,value}: Props) => {
    return (
            <h6 className="text-white text-base font-normal font-barlow tracking-[2.70px] uppercase md:text-xl md:tracking-[3.38px]
                            md:mt-[42px] xl:text-[28px] xl:tracking-[4.72px]">
                <span className="font-bold font-barlow tracking-[2.70px] text-gray-500 mr-3 md:ml-6 md:text-xl md:tracking-[3.38px]
                                 xl:text-[28px] xl:tracking-[4.72px]">
                    {number}
                </span>
                {value}
            </h6>
    )
}