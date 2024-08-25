import Image from 'next/image'
import mainImage from "@/public/services/services2Image.jpeg"
import littleTruck from "@/public/services/littelTruck.svg"
import train from "@/public/services/train.svg"
import lightning from "@/public/services/lightining.svg"
import { Div, H2, H4, P } from '@/libs/motion'

const data = [
    {
        image: littleTruck,
        heading: "Trucking Services",
        paragraph: "Efficient and reliable trucking services for all types of cargo."
    },
    {
        image: train,
        heading: "Rail Transport",
        paragraph: "Cost-effective rail transport for large shipments."
    },
    {
        image: lightning,
        heading: "Express Delivery",
        paragraph: "Fast and reliable delivery for urgent shipments."
    },
]

const Services2 = () => {
    return (
        <div className='mt-10 lg:my-20 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 xl:gap-28 lg:gap-16 px-4 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto'>
            <Div
                initial={{ x: -90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Image src={mainImage} alt='many Trucks' className='rounded-lg object-cover lg:h-[580px] lg:w-[680px] shadow-md' />
            </Div>
            <div className='pt-6 space-y-4'>
                <H4
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='text-[#39B641] font-semibold'>Our Comprehensive Services</H4>
                <H2
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='font-semibold text-4xl'>From Small Packages to Large Shipments</H2>
                <P
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='leading-relaxed text-gray-500 text-xl pt-4'>Discover how our logistics solutions can meet your transportation needs, ensuring timely and secure deliveries.</P>
                <div className='pt-7 space-y-8'>
                    {data.map((item, index) => (
                        <div key={index} className='gap-4 flex items-start'>
                            <Div
                                initial={{ y: 90, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Image src={item.image} alt='little truck' className='h-4 w-4' />
                            </Div>
                            <div className='space-y-2'>
                                <H2
                                    initial={{ y: 90, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className='font-semibold'>{item.heading}</H2>
                                <P
                                    initial={{ y: 90, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className='font-light'>{item.paragraph}</P>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services2