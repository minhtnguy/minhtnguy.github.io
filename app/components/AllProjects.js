import Link from "next/link";

export default function AllProjects() {
	return (
		<>
			<div className="w-full border-t border-gray-300 mt-12 mb-6" />
			<Link
				href="/"
				target=""
				className="text-gray-500 hover:text-primary-blue text-base space-x-1 flex items-center hover:ml-3 duration-300 ease-in-out"
			>
				<p>all projects</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right transition-transform duration-300 group-hover:rotate-45"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l14 0" />
					<path d="M15 16l4 -4" />
					<path d="M15 8l4 4" />
				</svg>
			</Link>
		</>
	);
}
