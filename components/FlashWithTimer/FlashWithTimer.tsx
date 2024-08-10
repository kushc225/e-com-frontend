import { FLASH_SALTES_FAKE_DATA } from '@/utils/constant'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import React, { FC } from 'react'

type FlashWithTimerProps = {
    title: string
    cn?: string
}
const FlashWithTimer: FC<FlashWithTimerProps> = ({ title, cn }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='md:flex md:items-center '>
                <div>
                    <h4 className='text-3xl font-bold'>{title}</h4>
                </div>

                <div className='md:flex gap-4 hidden md:ml-10 lg:ml-32 '>
                    {FLASH_SALTES_FAKE_DATA?.map((ele) => {
                        return <Timer id={ele.id} key={"FLASHWITHTIMER" + ele.id} time={ele.time} timeLeft={ele.timeLeft} />
                    })}

                </div>
            </div>


            <div className='flex gap-4 '>
                <div className='h-12 w-12 rounded-full bg-red-500 flex justify-center items-center cursor-pointer'>
                    <FaArrowLeft fill='white' />
                </div>
                <div className='h-12 w-12  rounded-full bg-red-500 flex justify-center items-center cursor-pointer'>
                    <FaArrowRight fill='white' />
                </div>
            </div>

        </div>
    )
}

export default FlashWithTimer

export type TimerProps = {
    id?: number
    time: string,
    timeLeft: string
}
const Timer: FC<TimerProps> = ({ id, time, timeLeft }) => {
    return <div className='w-20 flex justify-center flex-col'>
        <p className='font-normal capitalize text-sm '>{time}</p>
        <p className='font-bold text-3xl'>{timeLeft}
        {id !== 4 && <span className='pl-5' style={{ color: "#DB4444" }}>:</span>}</p>
    </div>
}