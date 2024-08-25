import MainImage from "@/public/HeaderFooter/mainLogo.png"
import arrow from "@/public/arrow.svg"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between p-3">
            <Link href="/"><Image src={MainImage} alt="main Image" className="h-14 w-20" /></Link>
            <div className="md:flex items-center gap-8 font-light hidden">
                <Link href="/aboutus"><button className="hover:font-semibold transition-all duration-300">About Us</button></Link>
                <Link href="/services"><button className="hover:font-semibold transition-all duration-300">Services</button></Link>
                <Link href="/contactUs"><button className="hover:font-semibold transition-all duration-300">Contact Us</button></Link>
                <Link href="/blogs"><button className="hover:font-semibold transition-all duration-300">Blogs</button></Link>
            </div>
            <div>
                <button className="group flex gap-3 items-center bg-[#51D055] border-black hover:border rounded-full px-5 text-base py-2">
                    Contact us 
                <span>
                    <Image src={arrow} alt="arrow" className="group-hover:translate-x-4 h-4 w-5 transform duration-300"  />
                </span></button>
            </div>
        </div>
    )
}

export default Header