export default function TimelineTable({ data }: { data: Array<{ week: string; activity: string }> }) {
	return (
		<div className="my-8 overflow-x-auto">
			<table className="w-full border-collapse">
				{/* <thead>
					<tr className="border-b border-gray-300">
						<th className="text-left py-3 px-4 text-xs text-gray-500 font-semibold uppercase">
							Week
						</th>
						<th className="text-left py-3 px-4 text-xs text-gray-500 font-semibold uppercase">
							Activity
						</th>
					</tr>
				</thead> */}
				<tbody>
					{data.map((row, index) => (
						<tr
							key={index}
							className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
						>
							<td className="py-3 px-4 text-base text-primary-black font-medium">
								{row.week}
							</td>
							<td className="py-3 px-4 text-base text-primary-black">
								<span dangerouslySetInnerHTML={{ __html: row.activity }} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
