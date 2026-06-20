export const ajisFigureClassName =
	"my-14 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-40 rounded-lg shadow-large";

export const ajisMediaClassName =
	"w-full overflow-hidden rounded-md border border-neutral-100";

export default function AjisVideo({ src }) {
	return (
		<figure className={ajisFigureClassName}>
			<div className={ajisMediaClassName}>
				<video src={src} autoPlay muted loop playsInline className="w-full" />
			</div>
		</figure>
	);
}
