import Link from "next/link";
import AboutStickerWall from "../components/AboutStickerWall";
import { links } from "../data/links";
import Signature from "@/app/components/Signature";

export default function About() {
	return (
		<div>
			<div className="mx-auto max-w-2xl px-8 pb-10 pt-4">
				<h1 className="pb-10 pt-2">
					<span
						role="img"
						aria-label="Hello, I'm Minh!"
						className="block aspect-[176.31/79.61] w-full max-w-[180px] origin-left rotate-[4deg] bg-primary-blue sm:max-w-[230px] [mask-image:url(/Hello.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/Hello.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]"
					/>
				</h1>
				<div className="space-y-8 text-left text-primary-black leading-relaxed md:text-base">
					<p>
						I'm a designer and creative technologist who cares about making
						technology feel more human. I studied Computer Science at UC Irvine
						and recently completed my master's in Integrated Design and Media at
						NYU.
					</p>
					<p>
						I view code as a creative medium, a way to prototype ideas and give
						form to new kinds of experiences. My work often takes shape through
						demos, prototypes, and interactive systems that explore future
						possibilities.
					</p>
					<p>
						In my work and everyday life, I am inspired by pop culture, music,
						sports, and journalism, especially the communities that form around
						them.
					</p>
					<p className="italic text-neutral-400">
						Currently open to new opportunities in design engineering, product
						design, and creative technology.
					</p>

					{/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0 sm:pb-8">
						<Link
							href={links.email}
							className="text-zinc-400 transition-[color,transform] duration-300 ease-in-out hover:rotate-[-5deg] hover:text-primary-blue"
						>
							Email
						</Link>
						<Link
							href={links.linkedin}
							target="_blank"
							className="text-zinc-400 transition-[color,transform] duration-300 ease-in-out hover:rotate-[2.5deg] hover:text-primary-blue"
						>
							Linkedin
						</Link>
						<Link
							href={links.resume}
							target="_blank"
							className="text-zinc-400 transition-[color,transform] duration-300 ease-in-out hover:rotate-[-2.5deg] hover:text-primary-blue"
						>
							Resume
						</Link>
						<Link
							href={links.github}
							target="_blank"
							className="text-zinc-400 transition-[color,transform] duration-300 ease-in-out hover:rotate-[5deg] hover:text-primary-blue"
						>
							GitHub
						</Link>
					</div> */}

					{/* <Signature
						className="text-primary-black"
						width={200}
						aria-label="Minh Nguyen signature"
					/> */}
				</div>
			</div>

			<section className="mx-auto w-full max-w-8xl px-4 pb-24 pt-4 sm:px-8 sm:pt-4">
				<AboutStickerWall />
				<p className="mt-10 text-center text-xs font-light uppercase tracking-[0.2em] text-neutral-400">
					Things on my desk
				</p>
			</section>

			<section className="mx-auto max-w-2xl px-8 pb-36">
				<div className="space-y-4 text-left text-neutral-400 leading-relaxed md:text-base">
					<p>
						This site was built using Next.js, Tailwind CSS, and Framer Motion —
						with help from Cursor and Claude Code.
					</p>
					<p>
						The footer clock is from{" "}
						<Link
							href="https://tholman.com/cursor-effects/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 decoration-neutral-400 transition-[color,text-decoration-color] duration-300 hover:text-primary-blue hover:decoration-primary-blue"
						>
							cursor-effects
						</Link>
						. All images/stickers were manually scanned and uploaded.
					</p>
				</div>
			</section>
		</div>
	);
}
