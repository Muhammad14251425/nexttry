import twitter from "@/public/footer/twitter.svg"
import facebook from "@/public/footer/facebook.svg"
import instagram from "@/public/footer/instagram.svg"
import linkedin from "@/public/footer/linkedIn.svg"
import Image from "next/image"

const Footer = () => {
    return (
        <div className='bg-[#EBFFE8] h-80 '>
            <div className='pt-24 max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    <ul className='flex items-center gap-5 font-semibold'>
                        <button>About Us</button>
                        <button>Our Services</button>
                        <button>Contact Us</button>
                        <button>Blogs</button>
                    </ul>
                    <div className='flex items-center gap-5 font-semibold'>
                        <Image src={twitter} alt="twitter logo" className="h-5 w-5" />
                        <Image src={facebook} alt="twitter logo" className="h-5 w-5" />
                        <Image src={instagram} alt="twitter logo" className="h-5 w-5" />
                        <Image src={linkedin} alt="twitter logo" className="h-5 w-5" />
                    </div>
                </div>
                <p className="pt-24 text-center text-gray-500 font-light">© 3ULogistics 2023, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer