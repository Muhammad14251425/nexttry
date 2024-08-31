import React from 'react'
import truck from "@/public/aboutus/aboutus2/truck.svg"
import train from "@/public/aboutus/aboutus2/train.svg"
import clock from "@/public/aboutus/aboutus2/clock.svg"
import thumbsup from "@/public/aboutus/aboutus2/thumbsup.svg"
import Image from 'next/image'
import { Div, H3, P } from '@/libs/motion'
const data = [
    {
        label: "Rapid Truck Deliveries",
        image: truck
    },
    {
        label: "Efficient Train Transport",
        image: train
    },
    {
        label: "On-Time Every Time",
        image: clock
    },
    {
        label: "Customer Satisfaction Guaranteed",
        image: thumbsup
    },
]

const About2 = () => {
    return (
        <div className='max-w-7xl  mx-auto text-center space-y-8 py-36'>
            <H3
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='text-5xl font-semibold'>Why Choose 3<span className='text-[#ED3224]' >U</span>logistics?</H3>
            <P
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-[#ED3224] text-xl font-light'>Delivering Excellence in Every Mile</P>
            <Div
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex items-center justify-center w-full relative pt-4'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='p-4 bg-gradient-to-r from-[#ED3224]/40 via-[#ED3224]/20 to-transparent rounded-full'>
                                <Image src={item.image} alt={item.label} className='h-8 w-8' />
                            </div>
                            <span className='mt-2 text-center font-medium text-gray-600'>{item.label}</span>
                        </div>
                        {index < data.length - 1 && (
                            <div className='w-28 h-[2px] bg-gradient-to-r from-transparent -mt-5 via-gray-400/40 to-transparent mx-2'></div>
                        )}
                    </div>
                ))}
            </Div>
        </div>
    )
}

export default About2