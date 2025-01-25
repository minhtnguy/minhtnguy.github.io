import Image from "next/image";

export default function PhotoGrid({ images = [], padding = "my-14" }) {
	if (!images || images.length === 0) {
		return null; // or return a loading state/placeholder
	}

	const gridCols =
		images.length === 2
			? "md:grid-cols-2 grid-cols-1"
			: "md:grid-cols-3 grid-cols-1";

	return (
		<figure
			className={`md:my-14 my-8 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-40`}
		>
			<div className={`grid ${gridCols} gap-4`}>
				{images.map((img, index) => (
					<Image
						key={index}
						src={img.src}
						alt={img.alt}
						width={500}
						height={500}
						className="w-full aspect-square object-cover rounded-md"
					/>
				))}
			</div>
			{images[0]?.caption && (
				<figcaption className="flex justify-center text-sm mt-4 font-light text-gray-600">
					{images[0].caption}
				</figcaption>
			)}
		</figure>
	);
}
