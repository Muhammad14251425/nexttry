import { Div, P } from "@/libs/motion"
import Image from "next/image"

const data = [
    "/indexpage/hero3/img1.png",
    "/indexpage/hero3/img2.png",
    "/indexpage/hero3/img3.png",
    "/indexpage/hero3/img4.png",
    "/indexpage/hero3/img5.png",
    "/indexpage/hero3/img6.png",
    "/indexpage/hero3/img7.png",
    "/indexpage/hero3/img8.png",
    "/indexpage/hero3/img9.png",
    "/indexpage/hero3/img10.png",
    "/indexpage/hero3/img11.png",
    "/indexpage/hero3/img12.png",
]

const Hero3 = () => {
    return (
        <div className='pt-20 max-w-7xl mx-auto px-4 pb-20'>
            <h2 className='text-4xl font-semibold'>Our Fleet in Action</h2>
            <div className='flex items-center gap-6 mt-7'>
                <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='max-w-xs'>Discover the efficiency and reliability of 3ULogistics through our fleet of trucks and trains. Our vehicles are always ready to deliver your products, no matter the size or distance.</P>
                <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='max-w-xs'>Experience seamless logistics operations with our state-of-the-art fleet. From small parcels to large shipments, we ensure timely and safe deliveries.</P>
            </div>
            <div className='pt-6 grid gap-4 mt-6 grid-cols-6'>
                {data.map((item, index) => (
                    <Div
                        initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                        className="overflow-hidden w-[85%] h-40 rounded-md" key={index}>
                        <Image
                            src={item}
                            alt={item}
                            className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
                            width={300}
                            height={300}
                            key={index}
                        />
                    </Div>
                ))}
            </div>
        </div>
    )
}

export default Hero3