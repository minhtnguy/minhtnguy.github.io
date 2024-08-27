import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
	title,
	year,
	description,
	tags,
	onHover,
	onLeave,
}) {
	const [isHovered, setIsHovered] = useState(false);
	// const tagList = tags.split(", ");
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
		<div
			className="text-primary-black relative group py-4 w-full"
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			<div className="py-4 -ml-4 -mr-4 px-4 transition duration-300 ease-in-out hover:bg-gray-50 rounded-lg space-y-4">
				<div className="text-sm space-y-0.5">
					<p className="font-medium">{title}</p>
					<p className="text-gray-500">{description}</p>
				</div>
				<div className="space-x-1.5">
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
				</div>
			</div>
		</div>
	);
}
