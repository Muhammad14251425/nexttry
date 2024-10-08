import React from 'react'
import greenMainPic from '@/public/aboutus/mainImage.jpg'
import Image from 'next/image'
import arrow from "@/public/aboutus/arrow.svg"
import { Buttton, Div, H1, H3, P } from '@/libs/motion'


const About1 = () => {
    return (
        <div className='relative'>
            <Image src={greenMainPic} alt='main background image' className='w-full h-[700px] object-cover' />
            <div className='absolute top-0 max-w-7xl mx-auto w-screen inset-0 h-full flex items-center px-4'>
                <Div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='h-[450px] w-[580px] bg-white rounded-3xl px-16 py-10 space-y-3'>
                    <H3
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='font-semibold text-[#ED3224]'>Fast, Reliable, Efficient</H3>
                    <H1
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-4xl font-semibold max-w-md leading-tight'>Revolutionizing Logistics for a Modern World</H1>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className=' max-w-md  text-gray-500 pt-2' >At 3Ulogistics, we are dedicated to transforming the logistics industry with our innovative solutions. Our mission is to ensure your goods are delivered swiftly and securely.</P>
                    <div className='pt-6 flex gap-5'>
                        <Buttton
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='bg-[#ED3224] h-12 w-36 rounded-md text-white '>Learn More</Buttton>
                        <Buttton
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='flex items-center gap-2 group hover:bg-[#ED3224] hover:bg-opacity-40 transition-colors duration-700 px-4 py-2 rounded-md'>
                            Our Services
                            <Image src={arrow} alt='arrow' className='h-5 w-7 group-hover:translate-x-1 transform duration-300' />
                        </Buttton>
                    </div>
                </Div>
            </div>
        </div>
    )
}

export default About1