import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { accordionData } from '@/libs/contactus';
import { Div, H2, P } from '@/libs/motion';
import { FaEnvelope } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-20 mb-10 gap-3 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <H2
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4">FAQ</H2>
                <P
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl mb-4">Do you have any questions for us?</P>
                <P
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-6">
                    If there are question you want to ask. We will answer all your question.
                </P>
                <Div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-between w-full sm:w-[90%]">
                    <div className="relative flex-1">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-0 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="ml-4 px-6 py-2 bg-[#ED3224] text-white rounded-full">
                        Submit
                    </button>
                </Div>
            </div>
            <Div
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-1/2">
                <Accordion type="single" collapsible>
                    {accordionData.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="text-left">{item.trigger}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Div>
        </div>
    );
};

export default FAQ;
