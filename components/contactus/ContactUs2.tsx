import { Div, H2, P, Span } from "@/libs/motion"
import location from "@/public/contactus/contactus2/location.svg"
import Image from "next/image"

const data = [
    {
        heading: "Customer Support",
        email: "support@3ulogistics.com",
        phoneNumber: "+1 (555) 123-4567"
    },
    {
        heading: "Business Inquiries",
        email: "business@3ulogistics.com",
        phoneNumber: "+1 (555) 123-4567"
    },
    {
        heading: "Partnerships",
        email: "partners@3ulogistics.com",
        phoneNumber: "+1 (555) 123-4567"
    },
    {
        heading: "General Inquiry",
        email: "info@3ulogistics.com",
        phoneNumber: "+1 (555) 123-4567"
    },
]
const locations = [
    {
        name: "lahore",
        data: "123 Logistics Lane, New York, NY 10001"
    },
    {
        name: "Karachi",
        data: "456 Cargo Blvd, Los Angeles, CA 90001"
    },
]

const ContactUs2 = () => {
    return (
        <div className='max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-10 sm:py-20'>
                <div className='space-y-6'>
                    <H2
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='font-semibold text-3xl'>Connect with Us</H2>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-gray-500 text-xs max-w-xs leading-loose tracking-wider'>For any inquiries or assistance, feel free to contact us. We&apos;re here to help.</P>
                </div>
                <div className='col-span-2 grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    {data.map((item, index) => (
                        <Div
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index === 0 ? 0 : index === 1 ? 0.2 : index === 2 ? 0.4 : 0.6 }}
                            viewport={{ once: true }}
                            key={index} className='p-10 space-y-5 bg-[#222222]/10 rounded-md'>
                            <h2 className='text-lg font-semibold'>{item.heading}</h2>
                            <p className='font-semibold text-[#ED3224] text-xs'>{item.email}</p>
                            <p className='font-light text-xs'>{item.phoneNumber}</p>
                        </Div>
                    ))}
                </div>
            </div>
            <div className='bg-gray-200 h-[1px] w-full' />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-10 lg:py-20'>
                <div className='space-y-6'>
                    <H2
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='font-semibold text-3xl'>Our Locations</H2>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-gray-500 text-xs max-w-xs leading-loose tracking-wider'>Find our offices across the globe.</P>
                </div>
                <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {locations.map((item, index) => (
                        <Div
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index === 0 ? 0 : 0.2 }}
                            viewport={{ once: true }}
                            key={index} className='p-10 space-y-5 bg-[#222222]/10 rounded-md'>
                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                            <p className='font-light text-xs'>{item.data}</p>
                        </Div>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 items-center '>
                <div className='space-y-5' >
                    <H2
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='text-5xl font-semibold'>Visit Our Office</H2>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-gray-400 tracking-wider max-w-xl font-light'>Our headquarters is located in the heart of Lahore City. Come visit us!</P>
                    <P
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-400 tracking-wider max-w-xl font-light">Iqbal, 619 Allama, Umer Block Umar Block Town, Lahore, Punjab 54000</P>
                    <Span
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3">
                        <Image src={location} alt="location" className="h-5 w-5" />
                        <span className="text-gray-400 font-light">3ULogistics Headquarters</span>
                    </Span>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2107203333094!2d74.28070879493973!3d31.50871587267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c61883b2d%3A0x375fda7aa6927c36!2s3U%20Movers!5e1!3m2!1sen!2s!4v1723079245328!5m2!1sen!2s"
                    width="600"
                    height="350"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-3xl hidden md:block lg:hidden xl:block"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2107203333094!2d74.28070879493973!3d31.50871587267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c61883b2d%3A0x375fda7aa6927c36!2s3U%20Movers!5e1!3m2!1sen!2s!4v1723079245328!5m2!1sen!2s"
                    width="470"
                    height="350"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-3xl hidden sm:block md:hidden lg:block xl:hidden"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2107203333094!2d74.28070879493973!3d31.50871587267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c61883b2d%3A0x375fda7aa6927c36!2s3U%20Movers!5e1!3m2!1sen!2s!4v1723079245328!5m2!1sen!2s"
                    width="350"
                    height="350"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-3xl sm:hidden"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </div>
    )
}

export default ContactUs2