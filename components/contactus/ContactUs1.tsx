import { contactUsdata } from "@/libs/contactus"
import { Div, H1, P } from "@/libs/motion"
import backgroundImage from "@/public/contactus/backgroundMainImage.jpeg"
import Image from "next/image"



const ContactUs1 = () => {
    return (
        <div className="relative overflow-hidden">
            <Image
                src={backgroundImage}
                alt="background Image"
                className="h-[720px] sm:h-[800px] md:h-[900px] lg:h-[70vh] xl:h-[80vh] 2xl:h-[80vh] 3xl:h-[65vh] w-full object-cover"
            />
            <div className="bg-[#561D25] bg-opacity-80 h-[720px] sm:h-[800px] md:h-[900px] lg:h-[70vh] xl:h-[80vh] 2xl:h-[80vh] 3xl:h-[65vh] top-0 absolute w-full backdrop-blur-sm z-10">
                <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto mt-8 md:mt-5 lg:mt-20 xl:mt-10 2xl:mt-24 px-4 space-y-8 ">
                    <H1
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[#ED3224] sm:tracking-tight md:tracking-normal text-4xl sm:text-6xl font-semibold max-w-xl leading-tight"
                    >
                        Get in Touch with 3ULogistics
                    </H1>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="font-semibold text-lg text-white"
                    >
                        Reach out to us for global transport solutions. We are here to assist you.
                    </P>
                    <div className="lg:pt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-6">
                        {
                            contactUsdata.map((item, index) => (
                                <Div
                                    initial={{ y: 90, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                                    viewport={{ once: true }}
                                    key={index}
                                    className="border-white border rounded-md md:p-10 p-4 sm:p-6 lg:p-6 xl:p-8 flex items-start gap-5 bg-[#561D25] bg-opacity-70 z-20 bg-blend-luminosity shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]"
                                >
                                    <Image src={item.image} alt={item.title} className="h-5 w-5 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
                                    <div className="flex flex-col md:gap-6 lg:gap-4 xl:gap-6">
                                        <h2 className="font-semibold text-xl sm:text-2xl lg:text-xl text-[#ED3224]">{item.title}</h2>
                                        <p className="text-lg sm:text-xl md:text-lg font-semibold text-white">{item.para}</p>
                                    </div>
                                </Div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs1