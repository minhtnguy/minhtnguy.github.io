import Link from "next/link";
import Logo from "./Logo";
import { links } from "../data/links";

export default function Nav() {
	return (
		<nav className="px-16 py-3 flex items-center justify-between sticky top-0 bg-white shadow-sm z-10">
			<Link href="/">
				<div className="flex items-center space-x-3">
					<Logo />
					<span className="font-medium text-primary-black hover:text-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] group">
						Minh Nguyen
					</span>
				</div>
			</Link>

			<div className="flex items-center space-x-12">
				<Link
					href="/"
					className=" text-primary-black hover:text-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] ease-in-out text-sm"
				>
					About
				</Link>
				<Link
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
				</Link>
			</div>
		</nav>
	);
}
