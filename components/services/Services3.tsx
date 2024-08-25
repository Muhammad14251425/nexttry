'use client'
import { Div, H3, P } from '@/libs/motion'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import { data } from '@/libs/service';
import Image from 'next/image';

const Services3 = () => {

    const [vehicle, setVehicle] = useState(data[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [pauseAnimation, setPauseAnimation] = useState(false);

    const startInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            if (!pauseAnimation) {
                setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
            }
        }, 4000);
    }, [pauseAnimation]);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startInterval();
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [pauseAnimation, startInterval]);

    useEffect(() => {
        setVehicle(data[currentIndex]);
    }, [currentIndex]);

    const handleClick = (index: number) => {
        setCurrentIndex(index);
        resetInterval(); // Reset the interval to continue from the newly selected item
    };

    return (
        <div className='bg-[#EBFFE8] h-auto pb-10 lg:pb-0 lg:h-[730px] w-screen mb-8 px-4'>
            <div className='mt-20 max-w-md sm:max-w-lg md:max-w-2xl lg:min-h-screen lg:max-w-5xl xl:max-w-7xl mx-auto'>
                <div className="md:grid md:grid-cols-2 gap-5">
                    <div className="pt-12 md:pt-0 md:mt-24">
                        <P
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-3 font-semibold">
                            Versatile transport solutions tailored to your needs. Choose from a range of vehicles including Mazda trucks, containers in various sizes, flatbeds, dumpers, Hyundais and pickups, and efficient railway cargo services for seamless city-to-city delivery.
                        </P>
                        <H3
                            key={vehicle.title}
                            className="text-2xl text-gray-500 font-semibold mt-6"
                            initial={{ y: '50%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                        >
                            {vehicle.title}
                        </H3>
                        <P
                            key={vehicle.description}
                            className="text-lg mt-4 max-w-md"
                            initial={{ y: '50%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                        >
                            {vehicle.description}
                        </P>
                    </div>

                    <div className="mt-12 md:mt-24 xl:justify-self-end relative">
                        <div className="h-96 lg:w-[450px] xl:w-[510px] rounded-md bg-slate-200 xl:mr-8" />
                        <motion.img
                            key={vehicle.image}
                            initial={{ x: '30%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeIn" } }}
                            exit={{ x: '-30%', transition: { duration: 0.8, ease: "easeOut" } }}
                            src={vehicle.image} alt={vehicle.title} width={400} height={400} className="lg:w-[470px] xl:w-[510px] h-full rounded-md absolute top-6 mx-auto left-0 right-0 md:left-6 object-cover" />
                    </div>
                </div>
                <div
                    className="max-w-2xl grid grid-cols-6 gap-2 mt-20"
                    onMouseEnter={() => setPauseAnimation(true)} // Pause the animation when hovering
                    onMouseLeave={() => setPauseAnimation(false)} // Resume the animation when leaving
                >
                    {
                        data.map((item, index) => (
                            <div key={index} onClick={() => { setVehicle(item); handleClick(index); }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={120}
                                    height={120}
                                    className={`h-20 w-32 object-cover rounded-md cursor-pointer 
                                        ${item.image === vehicle.image ? "shadow-2xl -translate-y-2 transition-all transform duration-500" : "translate-y-0 transition-all transform duration-500"}`}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services3