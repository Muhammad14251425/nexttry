import MainImage from "@/public/HeaderFooter/mainLogo.png"
import arrow from "@/public/arrow.svg"
import Image from "next/image"
import Link from "next/link"
import SmallNav from "./SmallNav";
import SmallNavbar from "./SmallNavbar";

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between p-3">
            <Link href="/"><Image src={MainImage} alt="main Image" className="h-14 w-20" /></Link>
            <div className="md:flex items-center gap-8 font-light hidden">
                <Link href="/aboutus"><button className="hover:font-semibold transition-all duration-300">About Us</button></Link>
                <Link href="/services"><button className="hover:font-semibold transition-all duration-300">Services</button></Link>
                <Link href="/contactus"><button className="hover:font-semibold transition-all duration-300">Contact Us</button></Link>
                <Link href="/blogs"><button className="hover:font-semibold transition-all duration-300">Blogs</button></Link>
            </div>
            <div className="flex items-center gap-4">
                <button className="group flex gap-3 items-center bg-[#ED3224] border-black text-white hover:border rounded-full px-5 text-base py-2">
                    Contact us
                    <span>
                        <Image src={arrow} alt="arrow" className="group-hover:translate-x-4 h-4 w-5 transform duration-300" />
                    </span></button>
                    {/* <SmallNav /> */}
                    <SmallNavbar />
            </div>
        </div>
    )
}

export default Header