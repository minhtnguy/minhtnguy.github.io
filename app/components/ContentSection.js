export default function ContentSection({ heading, children }) {
	return (
		<div className="space-y-3 text-lg lg:px-64 px-4 ">
			{heading && (
				<h3 className="font-semibold text-primary-black">{heading}</h3>
			)}
			<div className="text-primary-gray space-y-12">{children}</div>
		</div>
	);
}
