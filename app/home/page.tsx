import Categories from '@/components/Categories/Categories'
import ProductCard from '@/components/Products/ProductCard'
import FlashWithTimer from '@/components/FlashWithTimer/FlashWithTimer'
import ChooseCategories from '@/components/ChooseCategories/ChooseCategories'
import HomePageAccordion from '@/components/Mapper/Accordion/HomePageAccordan'
import HomeCorasual from '@/components/Mapper/HomeCarousel/HomeCarousel'
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";import { MdComputer } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { ACCORDION_FAKE_DATA, PRODUCT } from '@/utils/constant'
import React from 'react'


const Home = () => {
  return (
    <div>
      <div className=' w-full md:flex gap-9'>
        <div className='px-2 h-[20rem] md:h-[24rem] overflow-scroll w-full mt-3 md:w-2/6'>
          {
            ACCORDION_FAKE_DATA?.map((ele, idx: number) => {
              return (<HomePageAccordion key={"HOME_PAGE" + idx} title={ele.title} values={ele.values} />)
            })
          }
        </div>

        <div className='h-[15rem] mt-7 md:w-4/6 md:mt-3'>
          <HomeCorasual />
        </div>
      </div>

      <div className='mt-10'>
        <Categories title="Today's" />

        <div className=' mt-10'>
          <FlashWithTimer title='Flash Sales' />
        </div>
      </div>


      <div className='mt-12 flex gap-12 overflow-x-scroll overflow-y-hidden'>
        {PRODUCT.map((ele, idx : number) => (<>
          <div>
            <ProductCard
            key={"ProductCard" + idx}
              title={ele.title}
              originalPrice={ele.originalPrice}
              discountedPrice={ele.discountedPrice}
              discountPercentage={ele.discountPercentage}
              imageUrl={"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}
              rating={ele.rating}
              reviewsCount={ele.reviewsCount}

            />
          </div>
        </>))}
      </div>



      <div className='mt-12 mb-10'>
        <Categories title='Categories' />
        <div className='mt-10 flex gap-20 justify-between'>
          <div>
            <ChooseCategories Component={IoIosPhonePortrait} active={false} title='Phone' />
          </div>
          <div>
            <ChooseCategories Component={MdComputer} active={false} title='Computers' />
          </div>
          <div>
            <ChooseCategories Component={BsSmartwatch } active={false} title='Smart Watch' />
          </div>
          <div>
            <ChooseCategories Component={CiCamera} active={false} title='Camera' />
          </div>
          <div>
            <ChooseCategories Component={CiHeadphones } active={false} title='HeadPhone' />
          </div>
          <div>
            <ChooseCategories Component={GiConsoleController} active={false} title='Gaming ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home