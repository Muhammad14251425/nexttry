'use client'
import mainImage from "@/public/indexpage/mainImage.jpeg"
import Image from 'next/image'
import { useEffect, useState } from "react"

const ImageBlur = () => {
    const [blur , setBlur] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setBlur(false)
        },100)
    },[])
    return (
        <Image src={mainImage} alt='main Image' className={`rounded-md ${blur ? "scale-0" : "scale-100"} transform transition-transform duration-300`} />
    )
}

export default ImageBlur