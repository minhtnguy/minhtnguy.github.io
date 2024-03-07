import Link from "next/link";

export default function NavBar({ isBlue }) {
	const textColor = isBlue ? "text-primary-blue" : "text-white";

	return (
		<nav
			className={`top-0 flex justify-between ${textColor} font-medium md:px-16 px-10 md:py-14 py-8`}
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
	);
}
