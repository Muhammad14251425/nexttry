"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdMenu } from "react-icons/md";

const data = [{ page: "About Us", href: "about" }, { page: "Our Services", href: "/services" }, { page: "Contact Us", href: "/contactus" } , { page: "Blogs", href: "/blogs" }]

export default function SmallNavbar() {
	const router = useRouter();

	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<MdMenu className="h-7 w-7 cursor-pointer md:hidden" />
				</SheetTrigger>
				<SheetContent className="">
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="bg-white h-full flex flex-col justify-center items-center"
					>
						<motion.ul
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										delayChildren: 0.2,
										staggerChildren: 0.1,
									},
								},
							}}
							className="space-y-6"
						>
							{data.map((item, index) => (
								<motion.li
									key={index}
									variants={{
										hidden: { opacity: 0, y: 10 },
										visible: { opacity: 1, y: 0 },
									}}
									className="text-2xl font-semibold text-gray-800"
									onClick={() => router.push(`${item.href}`)}
								>
									<SheetClose>
										{item.page}
									</SheetClose>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
