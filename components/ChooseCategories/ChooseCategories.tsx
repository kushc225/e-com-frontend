

import React, { FC } from 'react'

type ChooseCategoriesProps = {
    Component : React.ElementType
    title: string
    bg?: string
    imgURL?: string
    textColor?: string
    active?: boolean
}
const ChooseCategories: FC<ChooseCategoriesProps> = ({ Component, title, bg = "#fff", imgURL, textColor = "black", active = false }) => {
    return (
        <div style={{ background: `${active ? '#DB4444' : bg}` }} className={`rounded-md border-2 border-black/10 flex flex-col justify-center items-center h-[11rem] w-[11rem]`}>
            <Component fill={`${active ? "white" : "black"}`} className='h-[5rem] w-[5rem]' />
            <p className='font-bold ' style={{ color: `${active ? "#fff" : textColor}` }}>{title}</p>
        </div>
    )
}

export default ChooseCategories