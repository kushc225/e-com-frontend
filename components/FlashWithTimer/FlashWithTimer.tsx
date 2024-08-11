'use client'
import { FLASH_SALTES_FAKE_DATA } from '@/utils/constant'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import React, { FC } from 'react'
import SliderButton from '../common/SliderButton/SliderButton';

type FlashWithTimerProps = {
    title: string
    cn?: string
    scrollLeft: () => void
    scrollRight: () => void
}
const FlashWithTimer: FC<FlashWithTimerProps> = ({ title, cn, scrollRight, scrollLeft }) => {
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
            <SliderButton scrollLeft={scrollLeft} scrollRight={scrollRight} />
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