'use client'
import Categories from '@/components/Categories/Categories'
import ProductCard from '@/components/Products/ProductCard'
import FlashWithTimer from '@/components/FlashWithTimer/FlashWithTimer'
import ChooseCategories from '@/components/ChooseCategories/ChooseCategories'
import HomePageAccordion from '@/components/Mapper/Accordion/HomePageAccordan'
import HomeCorasual from '@/components/Mapper/HomeCarousel/HomeCarousel'
import Bus from '@/public/bus.svg'
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci"; import { MdComputer } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { ACCORDION_FAKE_DATA, PRODUCT, WHY_E_COM } from '@/utils/constant'
import React, { FC, useRef } from 'react'
import SliderButton from '@/components/common/SliderButton/SliderButton'
import Image from 'next/image'
import Footer from '@/components/common/Footer/Footer'


const Home = () => {

  const productSliderRef = useRef<HTMLDivElement>(null)
  const categoryListRef = useRef<HTMLDivElement>(null);
  const ourProductionRef = useRef<HTMLDivElement>(null)
  const featureRef = useRef<HTMLDivElement>(null)

  // product list slider logic
  const scrollProductLeft = () => {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft -= 300
    }
  }

  const scrollProductRight = () => {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft += 300;
    }
  };

  // category list slider logic
  const scrollCategoryLeft = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollLeft -= 300
    }
  }

  const scrollCategoryRight = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollLeft += 300;
    }
  };


  // scroll slider for our product
  const scrollOurProuductLeft = () => {
    if (ourProductionRef.current) {
      ourProductionRef.current.scrollLeft -= 300;
    }
  }
  const scrollOurProuductRight = () => {
    if (ourProductionRef.current) {
      ourProductionRef.current.scrollLeft += 300;
    }
  }

  // scroll slider for our feature
  const scrollFeatureLeft = () => {
    if (featureRef.current) {
      featureRef.current.scrollLeft -= 300;
    }
  }
  const scrollFeatureRight = () => {
    if (featureRef.current) {
      featureRef.current.scrollLeft += 300;
    }
  }

  return (
    <div>

      {/* carousel section start  */}
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
      {/* carousel section end */}


      {/* Today's section start */}

      <div className='mt-10'>
        <Categories title="Today's" />

        <div className=' mt-10'>
          <FlashWithTimer title='Flash Sales' scrollLeft={scrollProductLeft} scrollRight={scrollProductRight} />
        </div>
      </div>
      <div className='mt-12 flex gap-12 overflow-x-scroll overflow-y-hidden scroll-smooth' ref={productSliderRef}>
        {PRODUCT.map((ele, idx: number) => (<>
          <div >
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
      {/* Today's section end */}


      {/* Categories section start */}

      <div className='mt-12 mb-10 '>
        <div className='flex justify-between'>
          <Categories title='Categories' />
          <SliderButton scrollLeft={scrollCategoryLeft} scrollRight={scrollCategoryRight} />
        </div>
        <div ref={categoryListRef} className='scroll-smooth mt-10 flex gap-20 justify-between overflow-x-scroll'>
          <div className='cursor-pointer'>
            <ChooseCategories Component={IoIosPhonePortrait} active={false} title='Phone' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={MdComputer} active={false} title='Computers' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={BsSmartwatch} active={true} title='Smart Watch' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={CiCamera} active={false} title='Camera' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={CiHeadphones} active={false} title='HeadPhone' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={GiConsoleController} active={false} title='Gaming' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={GiConsoleController} active={false} title='Gaming' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={GiConsoleController} active={false} title='Gaming' />
          </div>
          <div className='cursor-pointer'>
            <ChooseCategories Component={GiConsoleController} active={false} title='Gaming' />
          </div>
        </div>
      </div>
      {/* Categories section end */}


      {/* Our Product section start */}

      <div>
        <div className='flex justify-between'>
          <Categories title='Our Products' />
          <SliderButton scrollLeft={scrollOurProuductLeft} scrollRight={scrollOurProuductRight} />
        </div>
        <div ref={ourProductionRef} className='mt-12 flex gap-12 overflow-x-scroll overflow-y-hidden scroll-smooth'>

          {PRODUCT.map((ele, idx: number) => (<>
            <div key={"PRODUCT" + idx}>
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
      </div>

      {/* Our Product section end */}





      {/* Feature section start */}
      <div className='mt-12 mb-10'>
        <div className='flex justify-between'>
          <Categories title='Feature' />
          <SliderButton scrollLeft={scrollFeatureLeft} scrollRight={scrollFeatureRight} />
        </div>
        <div ref={featureRef} className='mt-12 flex gap-12 overflow-x-scroll overflow-y-hidden scroll-smooth'>

          {PRODUCT.map((ele, idx: number) => (<>
            <div key={"PRODUCT_CARD" + idx}>
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
      </div>
      {/* Feature section end */}



      {/* Best Selling section start */}
      <div className='mt-12 mb-10'>
        <div className='flex justify-between'>
          <Categories title='This Month' />
          <SliderButton scrollLeft={scrollFeatureLeft} scrollRight={scrollFeatureRight} />
        </div>
        <div ref={featureRef} className='mt-12 flex gap-12 overflow-x-scroll overflow-y-hidden scroll-smooth'>

          {PRODUCT.map((ele, idx: number) => (<>
            <div key={"PRODUCT_CARD" + idx}>
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
      </div>
      {/* Best Selling section end */}



      {/* other option start  */}
      <div className='w-full mt-12 md:mt-32'>
        <div className='md:flex space-y-12 md:justify-around  md:space-y-0'>
          {WHY_E_COM.map((ele, idx : number) => (<div key={"WHY_E_COM" + idx} className='flex flex-col justify-center items-center gap-3 '>
            <ImageWrapper path={ele.imagePath} />
            <div className='text-center '>
              <h3 className='uppercase font-bold text-lg md:text-xl'>{ele.title}</h3>
              <p className='text-xs' >{ele.description}</p>
            </div>
          </div>))}
        </div>
        <div>

        </div>
      </div>
      {/* other option end */}


        {/* fotter part start */}
        <Footer/>
        {/* fotter part end */}
    </div>
  )
}

export default Home




type ImageWrapperProps = {
  path: string,
}
const ImageWrapper: FC<ImageWrapperProps> = ({
  path,

}) => {
  return (
    <div>
      <div className='bg-slate-300 h-[5rem] w-[5rem] rounded-full flex justify-center items-center'>
        <div className='bg-black h-[3rem] w-[3rem] rounded-full flex justify-center items-center'>
          <Image src={path} alt='bus' height={30} width={30} />
        </div>
      </div>
    </div>
  )
}
