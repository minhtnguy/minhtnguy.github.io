import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({
	project,
	title,
	year,
	description,
	tags,
	imageURL,
	bgColor,
	hasShadow = true,
}) {
	const getTagStyle = (tag) => {
		switch (tag) {
			case "ux design":
				return "bg-purple-100 text-purple-700";
			case "dev":
				return "bg-green-100 text-green-700";
			case "data viz":
				return "bg-blue-100 text-blue-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	return (
		<div className="mb-24 transition-all duration-300 hover:scale-[1.02]">
			<div
				className={`${bgColor} flex items-center justify-center p-3 md:p-10 rounded aspect-[16/9] w-full`}
			>
				<Image
					src={imageURL}
					alt="Posty cover image"
					width={700}
					height={400}
					className={`${hasShadow ? "shadow-xl" : ""}`}
				/>
			</div>
			<div className="space-y-2 mt-8">
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-medium">{title}</h3>
					<span className="text-gray-500">{year}</span>
				</div>
				<p className="text-gray-700 w-3/4">{description}</p>
				{/* <div className="space-x-1.5">
					{tags.map((tag, index) => (
						<span
							key={index}
							className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ${getTagStyle(
								tag
							)}`}
						>
							{tag}
						</span>
					))}
				</div> */}
			</div>
			{/* <div className="w-full h-[1px] bg-slate-300 my-20"></div> */}
		</div>
	);
}
