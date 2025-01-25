export default function SectionHeader({
	subtitle,
	title,
}: {
	subtitle: string;
	title: string;
}) {
	return (
		<div className="gap-3 mt-[72px] mb-[32px]">
			<header className="text-xs text-gray-500 font-semibold pb-3 uppercase">
				{subtitle}
			</header>
			<h2 className="text-3xl font-medium">{title}</h2>
		</div>
	);
}
