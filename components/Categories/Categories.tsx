import React, {FC}  from 'react'

type CategoriesProps = {
  title : string
  bg?: string
}
const Categories : FC<CategoriesProps> = ({title, bg = "#DB4444"}) => {
  return (
    <div className='w-full flex items-center gap-4'>
      <div style={{background : bg}} className={`w-6 h-12 rounded-md`}>
      </div>
      <p className='font-bold ' style={{color : bg}}>{title}</p>
    </div>
  )
}

export default Categories