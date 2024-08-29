import Image from 'next/image'
import pattern from "@/public/indexpage/pattern.jpg"
import greater from "@/public/indexpage/greater.svg"
import arrow from "@/public/arrow.svg"
import { Div } from '@/libs/motion'
import ImageBlur from './ImageBlur'
import CubeTextAnimation from './Hero4'

const Hero = () => {
    return (
        <div className='relative'>
            <Div className='max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto relative lg:pb-6'>
                <Image src={pattern} alt='pattern' className=' lg:h-[700px] w-full dark:opacity-10 opacity-0 object-cover' />
                <div className='absolute top-2 grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-0'>
                    <div className='lg:p-6 lg:px-8 xl:px-14'>
                        <div className='flex flex-col 480:flex-row items-start 480:items-center gap-8 480:mt-12'>
                            <button className='text-xs sm:text-base px-4 py-2 lg:text-xs font-semibold text-[#ED3224] border rounded-full border-[#ED3224]' >What{"'"}s New</button>
                            <h2 className='flex items-center gap-1 text-[#ED3224] text-xs sm:text-base lg:text-xs font-semibold tracking-wide'>Introducing our new fleet of eco-friendly trucks
                                <Image src={greater} alt='greater' className='h-3 w-3' />
                            </h2>
                        </div>
                        <div className='my-10 text-6xl font-semibold'>
                            <CubeTextAnimation />
                            <p className='max-w-xl lg:max-w-md text-lg font-normal text-gray-500 mt-8' >Fast, reliable logistics and transportation services. Delivering products through trucks and trains.</p>
                        </div>
                        <div className='flex items-center gap-3 480:gap-10 mb-16'>
                            <button className='bg-[#ED3224] text-white px-2 py-3 sm:px-8 sm:py-3 lg:py-5 font-semibold rounded-md'>Explore Our Services</button>
                            <button className='border px-3 py-3 rounded-md border-black 480:border-none flex items-center gap-2 group'>Learn More <Image src={arrow} alt='greater than' className='h-3 w-3 group-hover:translate-x-3 transform duration-300' /> </button>
                        </div>
                    </div>
                    <div className='mr-10 mt-5 hidden lg:block'>
                        <ImageBlur />
                    </div>
                </div>
            </Div>
            <div className='sm:ml-40 mt-48 sm:mt-4 md:ml-52 900:ml-64 md:-mt-10  lg:hidden mx-4 sm:mx-0'>
                <ImageBlur />
            </div>
        </div>
    )
}

export default Hero