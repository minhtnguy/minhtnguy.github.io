import Link from "next/link";
import LogoLink from "../components/LogoLink";
import Image from "next/image";
import { links } from "../data/links";
import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";

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

					{/* <Image src="/signature.svg" alt="signature" width={200} height={200} /> */}

					<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 sm:py-10 text-primary-black">
						<Link
							href={links.email}
							className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[5deg]"
						>
							Email
						</Link>
						<Link
							href={links.linkedin}
							target="_blank"
							className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[2.5deg]"
						>
							Linkedin
						</Link>
						<Link
							href={links.resume}
							target="_blank"
							className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[-2.5deg]"
						>
							Resume
						</Link>
						<Link
							href={links.github}
							target="_blank"
							className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[-5deg]"
						>
							GitHub
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
