import Link from "next/link";
export default function Logo() {
	return (
		<Link href="/">
			<div className="w-8 h-8 bg-[#E8F1FF] rounded-md shadow-[inset_0_-1.25px_1px_0px_rgb(0_0_0_/_0.1)] flex items-center justify-center">
				<div className="h-4 w-4 rounded-full bg-gradient-radial from-sky-200 via-primary-blue to-indigo-900 hover:scale-110 transition-all duration-300 ease-in-out group"></div>
			</div>
		</Link>
	);
}
