import Link from "next/link";
import Logo from "./Logo";
import { links } from "../data/links";

export default function Nav() {
	return (
		<div className="px-4 sm:px-6 sticky top-4 z-10 my-4">
			<nav className="max-w-5xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between bg-gradient-to-b from-gray-100/60 to-gray-50/60 border border-gray-200 backdrop-blur-sm rounded-full">
				<Link href="/">
					<div className="flex items-center space-x-3">
						{/* <Logo /> */}
						<span className=" text-primary-blue text-xl font-medium hover:text-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] group">
							Minh Nguyen
						</span>
					</div>
				</Link>

				<div className="flex items-center space-x-12">
					<Link
						href="/"
						className=" text-primary-black text-xl font-medium hover:text-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] ease-in-out"
					>
						Work
					</Link>
					<Link
						href="/about"
						className=" text-primary-black text-xl font-medium hover:text-primary-blue transition-transform duration-300 hover:rotate-[1.5deg] ease-in-out"
					>
						About
					</Link>
					{/* <Link
					href={links.linkedin}
					target="_blank"
					className=" text-primary-black hover:text-primary-blue transition-transform duration-300 hover:rotate-[1.5deg] ease-in-out text-sm"
				>
					LinkedIn
				</Link>
				<Link
					href={links.resume}
					target="_blank"
					className=" text-primary-black hover:text-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] ease-in-out text-sm"
				>
					Resume
				</Link>
				<Link
					href={links.email}
					target="_blank"
					className=" text-primary-black hover:text-primary-blue transition-transform duration-300 hover:rotate-[1.5deg] ease-in-out text-sm"
				>
					Email
				</Link> */}
				</div>
			</nav>
		</div>
	);
}
