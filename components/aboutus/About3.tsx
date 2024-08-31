import image1 from "@/public/aboutus/aboutus3/about3one.jpeg"
import Image from "next/image"
import vision from "@/public/aboutus/aboutus3/vision.jpg"
import visiontruck from "@/public/aboutus/aboutus3/vision-truck.jpg"
import mision from "@/public/aboutus/aboutus3/mission.jpg"
import missioLogo from "@/public/aboutus/aboutus3/missionLogo.png"
import { Div, H2, H3, P } from "@/libs/motion"

const data = [
    {
        quantity: "2024",
        para: "Founded"
    },
    {
        quantity: "10,000+",
        para: "Deliveries Completed"
    },
    {
        quantity: "98%",
        para: "Customer Satisfaction"
    },
    {
        quantity: "Nationwide",
        para: "Service Reach"
    },
]

const About3 = () => {
    return (
        <div className='bg-[#561D25] py-20'>
            <div className='max-w-7xl mx-auto space-y-3 px-4'>
                <H3
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='text-sm text-[#ED3224]'>Delivering Excellence</H3>
                <H2
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-2xl text-white font-semibold'>Our Achievements</H2>
                <Div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='flex pt-5 gap-4'>
                    <div className='flex flex-col justify-start font-semibold text-lg gap-8 text-white pt-3'>
                        <P
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >3Ulogistics has been at the forefront of the logistics industry, consistently delivering outstanding results.</P>
                        <P
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >Our commitment to innovation and customer satisfaction sets us apart in the fast-paced world of logistics.</P>
                    </div>
                    <Image src={image1} alt="main Image" className="h-52 w-[80%] object-cover rounded-xl" />
                </Div>

                <Div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col pt-20 lg:flex-row-reverse justify-between items-start w-full px-2 lg:px-0">
                    <div className="flex flex-col text-white w-[52%]">
                        <div className="flex items-center gap-4">
                            <H2
                                initial={{ y: 90, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className='text-3xl sm:text-4xl lg:text-6xl font-semibold px-2'>Our Vision</H2>
                            <Image priority src={vision} alt='vision' className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full" />
                        </div>
                        <P
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="px-4 text-base sm:text-lg lg:text-lg tracking-widest font-semibold font-sans mt-4">
                            Working towards revolutionizing and disrupting the logistics industry in Pakistan through technology and services, we are penetrating the industry via digitalization of transport services, ensuring absolute excellence.
                        </P>
                    </div>
                    <Image priority src={visiontruck} alt="truck" className="h-60 sm:h-72 lg:h-52 w-[45%] rounded-md mt-6 lg:mt-0 object-cover" />
                </Div>

                <Div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col pt-20 lg:flex-row justify-between items-start w-full px-2 lg:px-0">
                    <div className="flex flex-col text-white w-[52%]">
                        <Div
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4">
                            <h2

                                className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Our Mission</h2>
                            <Image priority src={missioLogo} alt='vision' className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-20 rounded-full" />
                        </Div>
                        <P
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg lg:text-lg tracking-widest font-semibold font-sans mt-4">
                            To ensure absolute excellence in transport services, we are integrating Phase 1 stage, allowing our clients with transparency in real-time access and updates of their dispatches. Phase 2 will lead our clients to a completely optimized supply chain system, allowing them direct access to their dispatches and removal of unnecessary intermediaries from the process.                        </P>
                    </div>
                    <Image priority src={mision} alt="truck" className="h-60 sm:h-72 lg:h-72 w-[45%] rounded-md mt-6 lg:mt-0 object-cover" />
                </Div>

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
    )
}

export default About3