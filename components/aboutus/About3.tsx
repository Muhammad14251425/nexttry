import image1 from "@/public/aboutus/aboutus3/about3one.jpeg"
import visiontruck from "@/public/aboutus/aboutus3/vision-truck.jpg"
import mision from "@/public/aboutus/aboutus3/mission.jpg"
import quotationmark from '@/public/aboutus/aboutus3/quatationmark.png'
import backgrounImage from "@/public/aboutus/aboutus3/backgroundImage.png"
import Image from 'next/image'
import React from 'react'
import Component from "./ModernDesign"

const About3 = () => {
    return (
        <div className='relative'>
            <Image src={backgrounImage} alt="background Image" />
            <div className="absolute h-[400px] w-[1200px] top-48 left-0 right-0 mx-auto flex gap-3" >
                <Component />
            </div>
        </div>
    )
}

export default About3