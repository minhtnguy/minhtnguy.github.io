import Image from "next/image";
<link
	rel="stylesheet"
	href="https://unpkg.com/blocks.css/dist/blocks.min.css"
/>;

export function LongCard({
	title,
	subtitle,
	tags,
	description,
	img,
	alt,
	href,
	target,
}) {
	return (
		<div className="w-full border-2 border-primary-blue md:p-8 p-4 flex flex-col my-8 rounded-sm  hover:shadow-[6px_8px_0px_rgb(9,96,228)] ease-out hover:translate-y-1 transition-all">
			<div className="flex md:flex-row flex-col md:gap-36 gap-8 items-center justify-between">
				<div className="text-primary-black md:space-y-10 space-y-4 md:w-3/4">
					<div className="md:space-y-3 space-y-2">
						<h1 className="font-semibold md:text-3xl text-xl">{title}</h1>
						<div className="space-y-1">
							<p className="md:text-lg text-md text-gray-700">{subtitle}</p>
							<p className="md:text-sm text-xs text-gray-500">{tags}</p>
						</div>
					</div>
					<p className="md:text-lg text-md">{description}</p>
				</div>
				<div className="rounded-lg">
					<Image src={img} width={500} height={400} alt={alt} />
				</div>
			</div>
		</div>
	);
}

export function ShortCard({
	title,
	subtitle,
	tags,
	description,
	img,
	alt,
	href,
	target,
}) {
	return (
		<div className="w-full border-2 h-full border-primary-blue md:p-8 p-4 flex flex-col flex-grow my-8 rounded-sm  hover:shadow-[6px_8px_0px_rgb(9,96,228)] ease-out hover:translate-y-1 transition-all">
			<div className="flex md:flex-row flex-col md:gap-36 gap-8 items-center justify-between">
				<div className="text-primary-black md:space-y-10 space-y-4">
					<div className="md:space-y-2 space-y-1">
						<h1 className="font-semibold md:text-2xl text-lg">{title}</h1>
						<div className="space-y-1">
							<p className="md:text-lg text-md text-gray-700">{subtitle}</p>
							<p className="md:text-sm text-xs text-gray-500">{tags}</p>
						</div>
					</div>
					<p className="md:text-lg text-md lg:w-[450px]">{description}</p>
				</div>
				<div className="rounded-lg">
					<Image src={img} width={400} height={300} alt={alt} />
				</div>
			</div>
		</div>
	);
}
