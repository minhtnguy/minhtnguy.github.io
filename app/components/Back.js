import Link from "next/link";
export default function Back() {
	return (
		<nav className="flex space-x-1 content-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				className="fill-primary-black"
			>
				<path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
			</svg>
			<Link
				href="/"
				className="hover:underline hover:underline-offset-4 hover:decoration-wavy"
			>
				back
			</Link>
		</nav>
	);
}
