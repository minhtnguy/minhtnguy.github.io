import Link from "next/link";
import { links } from "../data/links";

/**
 * Revealing Footer Effect: fixed at bottom with z-index below main content.
 * As the user scrolls, the main content (with higher z-index) scrolls up
 * and "reveals" this footer underneath.
 */
export default function RevealingFooter() {
	return (
		<footer
			className="revealing-footer fixed bottom-0 left-0 z-[1] w-full bg-primary-blue text-white"
			aria-label="Site footer"
		>
			<div className="mx-auto flex min-h-[4rem] max-w-6xl flex-col items-center justify-center gap-4 px-6 py-8 sm:flex-row sm:justify-between sm:gap-8">
				<div className="text-center sm:text-left">
					<Link href="/" className="hover:text-white">
						<p className="text-xl font-bold text-white/40 hover:text-white hover:rotate-[-3deg] transition-transform duration-300">
							Minh Nguyen
						</p>
					</Link>
				</div>
				<nav
					className="flex flex-wrap gap-6 sm:gap-12"
					aria-label="Footer links"
				>
					<Link
						href={links.email}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl font-bold text-white/40 hover:text-white hover:rotate-[-2.5deg] transition-transform duration-300"
					>
						Email
					</Link>
					<Link
						href={links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl font-bold text-white/40 hover:text-white hover:rotate-[2.5deg] transition-transform duration-300"
					>
						LinkedIn
					</Link>
					<Link
						href={links.resume}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl font-bold text-white/40 hover:text-white hover:rotate-[-2.5deg] transition-transform duration-300"
					>
						Resume
					</Link>
				</nav>
			</div>
		</footer>
	);
}
