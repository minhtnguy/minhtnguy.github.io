import Link from "next/link";
import LogoLink from "../components/LogoLink";
import { links } from "../data/links";
import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";
import Signature from "@/app/components/Signature";

export default function About() {
	return (
		<main className="min-h-screen">
			<Nav />
			<div className="max-w-2xl mx-auto px-8 py-10">
				{/* <Logo /> */}
				<h1 className="font-medium text-2xl text-primary-blue py-10">
					Hello, I&apos;m Minh!
				</h1>
				<div className="text-primary-black space-y-8 md:text-base leading-relaxed text-left">
					<p>
						I am a designer and creative technologist who is excited by building
						experiences to connect different communities through technology.
						These days I am interested in accessible web design, data driven
						storytelling, and AI augmented experiences.
					</p>
					<p>
						I graduated from UC Irvine where I studied Computer Science,
						Psychology, and Informatics (HCI). Currently I am pursuing my
						master&apos;s in Integrated Design and Media at NYU.
					</p>

					<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 sm:pb-8 text-primary-black">
						<Link
							href={links.email}
							className="text-zinc-400 hover:text-primary-blue transition-transform duration-300 hover:rotate-[5deg]"
						>
							Email
						</Link>
						<Link
							href={links.linkedin}
							target="_blank"
							className="text-zinc-400 hover:text-primary-blue transition-transform duration-300 hover:rotate-[2.5deg]"
						>
							Linkedin
						</Link>
						<Link
							href={links.resume}
							target="_blank"
							className="text-zinc-400 hover:text-primary-blue transition-transform duration-300 hover:rotate-[-2.5deg]"
						>
							Resume
						</Link>
						<Link
							href={links.github}
							target="_blank"
							className="text-zinc-400 hover:text-primary-blue transition-transform duration-300 hover:rotate-[-5deg]"
						>
							GitHub
						</Link>
					</div>

					<Signature
						className="text-primary-black"
						width={200}
						aria-label="Minh Nguyen signature"
					/>
				</div>
			</div>
		</main>
	);
}
