import React from 'react'
import greenMainPic from '@/public/aboutus/aboutusmain.webp'
import Image from 'next/image'
import arrow from "@/public/aboutus/arrow.svg"


const About1 = () => {
    return (
        <div className='relative'>
            <Image src={greenMainPic} alt='main background image' className='w-full h-[700px] object-cover' />
            <div className='absolute top-0 max-w-7xl mx-auto w-screen inset-0 h-full flex items-center px-4'>
                <div className='h-[450px] w-[580px] bg-white rounded-3xl p-16 space-y-3'>
                    <h3 className='font-semibold text-[#ED3224]'>Fast, Reliable, Efficient</h3>
                    <h1 className='text-4xl font-semibold max-w-md leading-tight'>Revolutionizing Logistics for a Modern World</h1>
                    <p className=' max-w-md  text-gray-500 pt-2' >At 3Ulogistics, we are dedicated to transforming the logistics industry with our innovative solutions. Our mission is to ensure your goods are delivered swiftly and securely.</p>
                    <div className='pt-6 flex gap-5'>
                        <button className='bg-[#ED3224] h-12 w-36 rounded-md text-white '>Learn More</button>
                        <button className='flex items-center gap-2 group hover:bg-[#ED3224] hover:bg-opacity-40 transition-colors duration-700 px-4 py-2 rounded-md'>
                            Our Services
                        <Image src={arrow} alt='arrow' className='h-5 w-7 group-hover:translate-x-1 transform duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1