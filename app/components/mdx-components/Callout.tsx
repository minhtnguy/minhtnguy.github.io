export default function Callout({ subtitle, title, description }) {
	return (
		<div className="my-[72px] bg-blue-50 relative w-screen left-1/2 right-1/2 -mx-[50vw] py-16">
			<div className="mx-auto max-w-2xl px-8 space-y-12">
				<div className="gap-3">
					<header className="text-xs text-gray-500 font-semibold pb-3 uppercase">
						{subtitle}
					</header>
					<p className="text-base">{description}</p>
				</div>
				<h2 className="text-2xl font-medium">{title}</h2>
			</div>
		</div>
	);
}
