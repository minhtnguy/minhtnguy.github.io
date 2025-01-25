import Divider from "@/app/components/Divider";
export default function Overview({ role, timeline, team }) {
	return (
		<div>
			<Divider />
			<div className="grid sm:grid-cols-3 justify-between grid-cols-1 gap-10">
				<div>
					<header className="text-xs text-gray-500 font-semibold pb-3">
						ROLE
					</header>
					{Array.isArray(role) ? (
						role.map((r, index) => <p key={index}>{r}</p>)
					) : (
						<p>{role}</p>
					)}
				</div>
				<div>
					<header className="text-xs text-gray-500 font-semibold pb-3">
						TIMELINE
					</header>
					{Array.isArray(timeline) ? (
						timeline.map((t, index) => <p key={index}>{t}</p>)
					) : (
						<p>{timeline}</p>
					)}
				</div>
				<div>
					<header className="text-xs text-gray-500 font-semibold pb-3">
						TEAM
					</header>
					{Array.isArray(team) ? (
						team.map((t, index) => <p key={index}>{t}</p>)
					) : (
						<p>{team}</p>
					)}
				</div>
			</div>

			<Divider />
		</div>
	);
}
