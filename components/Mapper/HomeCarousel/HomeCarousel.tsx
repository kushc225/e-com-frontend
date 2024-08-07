'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Skeleton } from "@/components/ui/skeleton"

import Autoplay from "embla-carousel-autoplay"

import Image from 'next/image'
const imageUrls = [
    'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
];


const HomeCorasual = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const handleLoad = () => {
        // setIsLoading(false);
    };

    return (
        <div className='h-full md:h-[24rem] '>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className=''>
                    {imageUrls.map((ele, idx: number) => <CarouselItem key={"HOMECAROUSEL" + idx}>
                        <div className='relative h-[15rem] sm:h-[20rem] md:mt-3  md:h-[22rem] md:flex justify-center items-center rounded-md overflow-hidden'>
                            {isLoading && <SkeletonCard />}
                             <Image
                                src={ele}
                                alt="images"
                                fill={true}
                                onLoad={() => handleLoad()}
                            />

                        </div>
                    </CarouselItem>)}
                </CarouselContent>
            </Carousel>

        </div>
    )
}

export default HomeCorasual



export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[12rem] md:w-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] md:w-[20rem]" />
                <Skeleton className="h-4 w-[200px] md:w-[20rem]" />
            </div>
        </div>
    )
}