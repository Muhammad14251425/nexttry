import mainImage from "@/public/indexpage/try3mainImage.jpeg"
import Image from "next/image"
import backgroundImage from "@/public/indexpage/hero3subImage.jpeg"
import { Buttton, Div, H2, H3, P } from "@/libs/motion"

const data = [
    {
        quantity: "10,000+",
        para: "Deliveries Completed"
    },
    {
        quantity: "5,000+",
        para: "Happy Clients"
    },
    {
        quantity: "500+",
        para: "Trucks in Fleet"
    },
    {
        quantity: "50+",
        para: "Regions Covered"
    },
]

const Hero2 = () => {
    return (
        <div >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2">
                <Image src={mainImage} alt="truck" className="object-cover h-[500px]" />
                <Div className="bg-[#561D25] py-14 sm:col-span-2 lg:col-span-1 flex flex-col gap-5 pl-10 xl:pl-24 justify-center overflow-hidden">
                    <H3
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[#ED3224] font-semibold"
                    >
                        Reliable Logistics Partner
                    </H3>

                    <H3
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="font-semibold max-w-sm text-4xl text-white"
                    >
                        Get Started with 3ULogistics
                    </H3>

                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-[#D1D5DB] font-semibold py-3"
                    >
                        Request a vehicle or get in touch with us today.
                    </P>

                    <Buttton
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#ED3224] px-5 py-3 w-fit text-white font-semibold rounded-md">
                        Request a Vehicle
                    </Buttton>
                </Div>

            </div>
            <div className="relative">
                <Image src={backgroundImage} alt="background truck Image" className="object-cover h-[700px] sm:h-[450px] w-full" />
                <div className="bg-[#561D25] h-[700px] sm:h-[450px] top-0 absolute w-full opacity-80 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 mt-14 space-y-4">
                        <H2 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-[#ED3224] font-semibold">Our Achievements</H2>
                        <H3 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-white font-semibold text-3xl">Trusted by Thousands</H3>
                        <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-[#D1D5DB] font-semibold pt-5">Delivering excellence in logistics and transportation.</P>
                        <div className="pt-16 flex flex-col sm:flex-row sm:items-center gap-4">
                            {data.map((item, index) => (
                                <div key={index} className="border-l ml-2 text-white border-white/30 pl-8 space-y-5 w-[400px]">
                                    <H2 initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="font-semibold text-3xl">{item.quantity}</H2>
                                    <P initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>{item.para}</P>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2