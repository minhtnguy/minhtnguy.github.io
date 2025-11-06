"use client";
import { usePathname } from "next/navigation";
import { getProjectTags } from "@/utils/getProjects";

export default function ProjectTags() {
	const pathname = usePathname();
	const slug = pathname.split("/").pop();
	const tags = getProjectTags(slug || "");

	if (!tags || tags.length === 0) return null;

	const getTagStyle = (tag) => {
		switch (tag.toLowerCase()) {
			case "design":
			case "product design":
			case "ux design":
				return "bg-purple-100 text-purple-700";
			case "dev":
				return "bg-green-100 text-green-700";
			case "data viz":
				return "bg-blue-100 text-blue-700";
			case "arduino":
				return "bg-orange-100 text-orange-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	return (
		<div className="flex flex-wrap gap-2 my-4">
			{tags.map((tag, index) => (
				<span
					key={index}
					className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getTagStyle(
						tag
					)}`}
				>
					{tag}
				</span>
			))}
		</div>
	);
}
