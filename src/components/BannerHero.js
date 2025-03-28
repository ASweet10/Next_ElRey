import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import Link from "next/link"
import Image from 'next/image'

const BannerHero = () => {
  return (
    <div className="app__graniteBg text-center min-h-[80vh]">
        <div className='flex flex-col md:flex-row mx-2 md:mx-28 pt-28 pb-20 gap-20 items-center'>
            <div className='flex flex-col items-center md:w-1/2 order-2 md:order-1'>
                <h1 className="text-4xl md:text-5xl font-bold font-cormorant leading-normal text-white">Our Menu</h1>
                <h2 className="my-4 text-gray-300 text-base md:text-lg mx-4 md:mx-24 underline underline-offset-2">Award-winning burritos and homemade salsas</h2>
                <h2 className='text-white'>Plus tacos, enchiladas, and sides made to order.</h2>
                <div className="flex gap-4 justify-center mt-8">
                    <Link href={'/menu'}
                        className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold text-xl px-4 py-3 rounded-md flex items-center gap-2 font-cormorant"
                    >
                        View Menu
                        <FaRegArrowAltCircleRight className='text-xl' />
                    </Link>
                </div> 
            </div>

            <div className="w-full md:w-1/2 relative order-1 md:order-2">
                <Image src='/salsa.jpg' layout='responsive' width={0} height={0} className="rounded-sm" alt='Burrito' />
            </div>
        </div>
    </div>
  )
}

export default BannerHero