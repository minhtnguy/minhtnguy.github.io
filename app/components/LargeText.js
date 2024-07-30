export default function LargeText({ children }) {
	return (
		<div className="font-semibold text-primary-black text-3xl lg:px-64 px-4">
			{children}
		</div>
	);
}
