import Image from 'next/image'
import pattern from "@/public/indexpage/pattern.jpg"
import greater from "@/public/indexpage/greater.svg"
import arrow from "@/public/arrow.svg"
import { Div } from '@/libs/motion'
import ImageBlur from './ImageBlur'
import CubeTextAnimation from './Hero4'

const Hero = () => {
    return (
        <Div className='max-w-7xl mx-auto relative pb-6'>
            <Image src={pattern} alt='pattern' className='h-[700px] w-full opacity-10 blur-sm' />
            <div className='absolute top-2 grid grid-cols-2'>
                <div className='p-6 px-14'>
                    <div className='flex items-center gap-8 mt-12'>
                        <button className='px-4 py-2 text-xs font-semibold text-[#51D055] border rounded-full border-[#51D055]' >What{"'"}s New</button>
                        <h2 className='flex items-center gap-1 text-[#51D055] text-xs font-semibold tracking-wide'>Introducing our new fleet of eco-friendly trucks
                            <Image src={greater} alt='greater' className='h-3 w-3' />
                        </h2>
                    </div>
                    <div className='my-10 text-6xl font-semibold'>
                        <CubeTextAnimation />
                        <p className='max-w-md text-lg font-normal text-gray-500 mt-8' >Fast, reliable logistics and transportation services. Delivering products through trucks and trains.</p>
                    </div>
                    <div className='flex items-center gap-10'>
                        <button className='bg-[#51D055] text-white px-8 py-5 font-semibold rounded-md'>Explore Our Services</button>
                        <button className='flex items-center gap-2 group'>Learn More <Image src={arrow} alt='greater than' className='h-3 w-3 group-hover:translate-x-3 transform duration-300' /> </button>
                    </div>
                </div>
                <div className='mr-10 mt-5'>
                    <ImageBlur />
                </div>
            </div>
        </Div>
    )
}

export default Hero