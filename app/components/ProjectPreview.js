import Image from "next/image";

export default function ProjectPreview({ project }) {
	return (
		<div className="hidden md:sticky top-0 md:h-screen md:flex md:pl-10 md:justify-center md:items-center drop-shadow-xl">
			{project && (
				<Image
					src={project.img}
					width={650}
					height={650}
					alt={project.alt}
					className="transition-opacity duration-300 ease-in-out"
				/>
			)}
		</div>
	);
}
