import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar({ isBlue }) {
	const textColor = isBlue ? "text-primary-blue" : "text-white";

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }} // Initial state of the animation
			animate={{ opacity: 1, y: 0 }} // Animation to perform when component mounts
			transition={{ duration: 0.5, ease: "easeInOut" }} // Duration of the animation
		>
			<nav
				className={`top-0 flex justify-between ${textColor} font-medium text-xl  md:py-14 py-8`}
			>
				<Link href="/" className="">
					minh nguyen
				</Link>
				<div className="md:space-x-9 space-x-4">
					<Link
						href="/about"
						className="hover:underline hover:underline-offset-4 hover:decoration-wavy"
					>
						about
					</Link>
					<Link
						href="https://read.cv/minhnguyen"
						target="_blank"
						className="hover:underline hover:underline-offset-4 hover:decoration-wavy"
					>
						CV
					</Link>
				</div>
			</nav>
		</motion.div>
	);
}
