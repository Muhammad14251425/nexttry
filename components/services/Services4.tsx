import { Div, H4, P } from "@/libs/motion"
import { services4data } from "@/libs/service"
import Image from "next/image"

const Services4 = () => {
    return (
        <div className='max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto pt-2 pb-20 px-4'>
            <h2 className='text-xs lg:text-sm text-center lg:text-left font-semibold text-[#ED3224]'>Services we offer</h2>
            <div className='grid grid-cols-1 gap-4 text-center lg:text-left lg:grid-cols-2 mt-4'>
                <H4
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='text-3xl lg:text-4xl max-w-2xl lg:max-w-md mx-auto lg:mx-0 leading-snug font-bold'>We Manage Logistics For World&apos;s Leading Multinational Companies</H4>
                <P
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-base lg:text-base text-gray-500 font-semibold max-w-xl lg:max-w-none mx-auto'>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.</P>
            </div>
            <Div
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='pt-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {services4data.map((item, index) => (
                    <div key={index} className="group relative group-hover:bg-black/10 overflow-hidden">
                        <Image src={item.image} alt="small Truck" className="object-cover h-[450px] w-full rounded-lg" />
                        <div className="absolute inset-0 bg-black/30 rounded-lg translate-y-full group-hover:translate-y-0"></div>
                        <div className="absolute bottom-0 space-y-5 left-0 right-0 mx-auto opacity-0 transform duration-300 translate-y-0 group-hover:-translate-y-10 group-hover:opacity-100">
                            <Image src={item.Logo} alt={item.name} className='h-12 w-fit mx-auto' />
                            <h5 className="text-white font-semibold text-center text-2xl">{item.name}</h5>
                        </div>
                    </div>
                ))}
            </Div>
        </div>
    )
}

export default Services4