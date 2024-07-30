import Image from "next/image";

export default function ProjectCard({ title, description, year, img, alt }) {
	return (
		<div className="w-full md:mb-48 mb-24">
			<div className="w-full md:flex justify-between space-y-4 items-end mb-8">
				<div className="space-y-3">
					<h2 className="text-primary-black font-semibold md:text-2xl text-xl">
						{title}
					</h2>
					<p className="text-primary-gray md:text-lg text-base">
						{description}
					</p>
				</div>
				<p className="text-neutral-500 font-light md:text-lg text-base">
					{year}
				</p>
			</div>

			<div className="hover:drop-shadow-2xl transition ease-in-out hover:scale-102 duration-300 border rounded-md  border-gray-100">
				<Image src={img} alt={alt} width={1600} height={800} />
			</div>
		</div>
	);
}
