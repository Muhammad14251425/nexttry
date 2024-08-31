'use client'
import { Buttton, Div } from "@/libs/motion";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react"


const ContactUsForm = () => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Buttton
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => { setOpen(true) }} className="bg-[#ED3224] px-4 py-2 text-white rounded-full">ContactUs</Buttton>
            {open && (
                <div className="fixed w-screen inset-0 -top-6 h-screen z-30 bg-black/65 " />
            )}
            <AnimatePresence>
                {open && (
                    <Div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed right-0 left-0 sm:mx-auto top-40 border border-[#ED3224] z-50 bg-white lg:px-10 px-5 rounded-xl max-w-md min-h-[470px] mx-5">
                        <button onClick={() => setOpen(false)} className="font-bold text-xl border absolute rounded-full p-4 -right-4 bg-white -top-4"><X /></button>
                        <h2 className="text-center text-2xl font-semibold py-4 pb-5">Contact Us Form</h2>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    required
                                    name="firstName"
                                    type="text"
                                    placeholder="First name"
                                    className="w-full p-3 px-4 border border-gray-300 outline-[#ED3224] rounded-3xl"
                                />
                                <input
                                    required
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full p-3 px-4 border border-gray-300 outline-[#ED3224] rounded-3xl"
                                />
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full p-3 px-4 border border-gray-300 outline-[#ED3224] rounded-3xl"
                                />
                            </div>
                            <div>
                                <input
                                    required
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone number"
                                    className="w-full p-3 px-4 border border-gray-300 outline-[#ED3224] rounded-3xl"
                                />
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="reason"
                                    placeholder="How can we help?"
                                    className="w-full p-3 px-4 border border-gray-300 outline-[#ED3224] rounded-3xl"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                // disabled={}
                                className="w-full py-2 disabled:cursor-not-allowed bg-[#ED3224] text-white font-bold  rounded-3xl hover:bg-[#ED3224] transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </Div>
                )}

            </AnimatePresence>
        </>
    )
}

export default ContactUsForm