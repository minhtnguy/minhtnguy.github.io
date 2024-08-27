import Image from "next/image";

export default function WideImage({ src, alt, caption, padding = "my-14" }) {
	return (
		<figure
			className={`${padding} -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-40`}
		>
			<Image
				src={src}
				alt={alt}
				width={1000}
				height={500}
				className="w-full rounded-md"
			/>
			{caption && (
				<figcaption className="flex justify-center text-sm mt-4 font-light text-gray-600">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
