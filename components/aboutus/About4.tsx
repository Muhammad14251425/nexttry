import React from 'react'
import location from '@/public/aboutus/aboutus4/location.svg'
import order from '@/public/aboutus/aboutus4/order.svg'
import truck from '@/public/aboutus/aboutus4/truck.svg'
import Image from 'next/image'
import { Div, H2, P } from '@/libs/motion'

const rightdata = [
    {
        heading: "Place Your Order",
        description: "Start by placing your order through our user-friendly platform."
    },
    {
        heading: "Track Your Shipment",
        description: "Stay updated with real-time tracking of your goods."
    },
    {
        heading: "Receive Your Delivery",
        description: "Your goods are delivered safely and on time."
    },
]

const leftdata = [order, location, truck]

const About4 = () => {
    return (
        <div className='bg-[#222222]/20 py-20'>
            <div className='max-w-md mx-auto text-center space-y-4'>
                <H2
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, }}
                    viewport={{ once: true }}
                    className='text-4xl font-semibold '>Our Logistics Process</H2>
                <P
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className=''>From order placement to delivery, we ensure a seamless logistics experience.</P>
                <div className='flex pt-10 gap-6 justify-center'>
                    <Div
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-center gap-20 relative'>
                        <div className="absolute inset-0 mx-auto h-[90%] w-px border-l-2 border-dashed border-[#ED3224] z-0"></div>
                        {
                            leftdata.map((item, index) => (
                                <div key={index} className='bg-white rounded-full p-5 z-10'>
                                    <Image src={item} alt='image' className='h-5 w-5' />
                                </div>
                            ))
                        }
                    </Div>

                    <div className='flex flex-col flex-grow gap-12 text-left max-w-xs'>
                        {rightdata.map((item, index) => (
                            <div key={index} className='space-y-4'>
                                <H2
                                    initial={{ y: 90, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className='font-bold text-[#ED3224]'>{item.heading}</H2>
                                <P
                                    initial={{ y: 90, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className='font text-black'>{item.description}</P>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About4
