import React, { FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type SliderButtonProps = {
    scrollLeft:() => void
    scrollRight: () => void
}
const SliderButton: FC<SliderButtonProps> = ({scrollLeft, scrollRight}) => {
  return (
    <div className='flex gap-4 '>
    <div onClick={scrollLeft} className='h-12 w-12 rounded-full bg-slate-500/50 flex justify-center items-center cursor-pointer'>
        <FaArrowLeft  fill='white' />
    </div>
    <div onClick={scrollRight} className='h-12 w-12  rounded-full bg-slate-500/50 flex justify-center items-center cursor-pointer'>
        <FaArrowRight fill='white' />
    </div>
</div>
  )
}

export default SliderButton