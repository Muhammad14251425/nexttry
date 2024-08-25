import { Div, H2, H3, P } from "@/libs/motion"
import image1 from "@/public/indexpage/why/image1.jpeg"
import image2 from "@/public/indexpage/why/image2.jpeg"
import image3 from "@/public/indexpage/why/image3.jpeg"
import Image from "next/image"

const data = [
    {
        heading: "Fast Delivery",
        Para1: "Get your products delivered quickly and efficiently.",
        image: image1,
        Para2: "Our optimized routes and experienced drivers ensure your goods arrive on time."
    },
    {
        heading: "Reliable Service",
        Para1: "Trust us to handle your logistics needs.",
        image: image2,
        Para2: "We pride ourselves on our reliability and commitment to customer satisfaction."
    },
    {
        heading: "Wide Coverage",
        Para1: "Delivering across multiple regions.",
        image: image3,
        Para2: "Our extensive network allows us to deliver to a wide range of locations."
    },
]

const Hero1 = () => {
    return (
        <div className='bg-[#EBFFE8] w-full h-[900px] px-4'>
            <H2 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='text-center my-6 pt-24 text-lg'>Key features of our logistics services.</H2>
            <H3 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='text-center text-5xl font-semibold' >Why Choose 3ULogistics?</H3>
            <Div initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='pt-12 max-w-7xl mx-auto grid grid-cols-3 gap-16'>
                {data.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <H2 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="font-semibold text-2xl">{item.heading}</H2>
                        <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className={`${index === 2 && "pb-5"}`}>{item.Para1}</P>
                        <Div initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} >
                            <Image src={item.image} alt={item.heading} className={`object-cover rounded-lg`} />
                        </Div>
                        <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="pt-4">{item.Para2}</P>
                    </div>
                ))}
            </Div>
        </div>
    )
}

export default Hero1