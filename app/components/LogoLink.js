import Link from "next/link";
import Image from "next/image";

export default function LogoLink({ showText = false }) {
	return (
		<Link href="/" target="" className="flex items-center group mb-10">
			<Image
				src="/logo.svg"
				alt="logo"
				width={30}
				height={30}
				className="group:shadow-sm"
			/>
			{showText && (
				<span className="ml-3 text-lg font-medium text-primary-blue">
					Minh Nguyen
				</span>
			)}
		</Link>
	);
}
