import HomePageAccordion from '@/components/Mapper/Accordion/HomePageAccordan'
import HomeCorasual from '@/components/Mapper/HomeCarousel/HomeCarousel'
import { ACCORDION_FAKE_DATA } from '@/utils/constant'
import React from 'react'


const Home = () => {
  return (
    <div className=' w-full md:flex gap-9'>

      <div className='px-2 h-[20rem] md:h-[24rem] overflow-scroll w-full mt-3 md:w-2/6'>
        {
          ACCORDION_FAKE_DATA?.map((ele, idx : number) => {
            return (<HomePageAccordion key={"HOME_PAGE" + idx} title={ele.title} values={ele.values} />)
          })
        }
      </div>

      <div className='h-[15rem] mt-7 md:w-4/6 md:mt-3'>
        <HomeCorasual />
      </div>


    </div>
  )
}

export default Home