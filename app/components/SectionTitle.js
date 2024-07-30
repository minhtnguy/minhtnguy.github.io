export default function SectionTitle({ title }) {
	return (
		<div className="space-y-3 mb-12">
			<div className="font-medium text-primary-gray">{title}</div>
			<div className="h-[1px] bg-gray-300"></div>
		</div>
	);
}
