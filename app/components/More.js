import Link from "next/link";

export default function More() {
	return (
		<Link
			href="/about"
			target=""
			className="text-primary-black text-xs hover:text-primary-blue rounded-sm bg-gray-50 space-x-1.5 p-1 hover:border-primary-blue border hover:bg-blue-50 flex items-center inline-flex"
		>
			<p>More</p>
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
				class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l14 0" />
				<path d="M15 16l4 -4" />
				<path d="M15 8l4 4" />
			</svg>
		</Link>
	);
}
