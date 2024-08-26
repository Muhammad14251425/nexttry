import { MdMenu } from "react-icons/md";

const SmallNav = () => {
    return (
        <div className="md:hidden relative">
            <MdMenu className="h-7 w-7 cursor-pointer relative" />
            {/* <div className="absolute inset-0 origin-top bg-black rounded-lg translate-y-full group-hover:translate-y-0">

            </div> */}
        </div>
    )
}

export default SmallNav