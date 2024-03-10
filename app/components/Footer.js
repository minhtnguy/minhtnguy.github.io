import Image from "next/image";
export default function Footer() {
	return (
		<div className="md:py-20 py-10 flex flex-col items-center justify-center space-y-2">
			<Image src="/smiley.svg" alt="Smiley" width={30} height={30} />
			<p className="text-primary-blue font-medium">minh nguyen</p>
			<p className="text-sm text-gray-500">last updated march 2024</p>
		</div>
	);
}
