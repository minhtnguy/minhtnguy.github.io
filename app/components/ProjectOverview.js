import Image from "next/image";

export default function ProjectOverview({
	title,
	description,
	summary,
	duration,
	role,
	team,
	disciplines,
	img,
	alt,
	children,
}) {
	return (
		<div className="text-primary-gray text-lg">
			<Image src={img} alt={alt} width={1600} height={800} className="my-20" />
			<div className="lg:px-64 px-4">
				<div className="space-y-6 ">
					<h1 className="font-semibold text-5xl text-gray-800">{title}</h1>
					<h4 className="text-xl">{description}</h4>
				</div>
				<div className="h-[1px] bg-gray-300 mt-14"></div>
				<div className="space-y-6 my-14">{children}</div>
				<div className="flex justify-between">
					{role && (
						<div className="space-y-3">
							<p className="font-semibold text-primary-black">Role</p>
							<div className="space-y-1">
								{role.map((r, index) => (
									<p key={index}>{r}</p>
								))}
							</div>
						</div>
					)}
					<div className="space-y-3">
						<p className="font-semibold text-primary-black">Duration</p>
						<div className="space-y-1">
							<p>{duration}</p>
						</div>
					</div>
					{team && (
						<div className="space-y-3">
							<p className="font-semibold text-primary-black">Team</p>
							<div className="space-y-1">
								{team.map((member, index) => (
									<p key={index}>{member}</p>
								))}
							</div>
						</div>
					)}

					{disciplines && (
						<div className="space-y-3">
							<p className="font-semibold text-primary-black">Disciplines</p>
							<div className="space-y-1">
								{disciplines.map((discipline, index) => (
									<p key={index}>{discipline}</p>
								))}
							</div>
						</div>
					)}
				</div>
				<div className="h-[1px] bg-gray-300 my-14"></div>
			</div>
		</div>
	);
}
