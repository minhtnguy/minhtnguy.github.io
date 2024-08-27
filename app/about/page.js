import Link from "next/link";
import LogoLink from "../components/LogoLink";
import Image from "next/image";

export default function About() {
	return (
		<main className="md:my-24 md:ml-32 my-8 md:w-1/3 mx-8">
			<LogoLink />
			<h1 className="font-medium text-2xl text-primary-blue pb-10">
				Hello, I&apos;m Minh!
			</h1>
			<div className="text-primary-black space-y-8 md:text-base leading-relaxed">
				<p>
					I am a designer, developer, and researcher who is excited by building
					experiences to connect different communities through technology. These
					days I am interested in accessible web design, data driven
					storytelling, and AI augmented experiences.
				</p>
				<p>
					I graduated from UC Irvine where I studied Computer Science,
					Psychology, and Informatics (HCI). Currently I am pursuing my
					master&apos;s in Integrated Design and Media at NYU.
				</p>

				<Image src="/signature.svg" alt="signature" width={200} height={200} />

				<div className="space-x-8 py-10 text-primary-black">
					<Link
						href="mailto:mtnguy16@uci.edu"
						className="underline underline-offset-4 decoration-1 hover:decoration-primary-blue hover:text-primary-blue"
					>
						Email
					</Link>
					<Link
						href="https://drive.google.com/file/d/1IeXJapfJutgRlgaXTcidE0UnfRaohdyd/view?usp=sharing"
						target="_blank"
						className="underline underline-offset-4 decoration-1 hover:decoration-primary-blue hover:text-primary-blue"
					>
						Resume
					</Link>
					<Link
						href="https://www.linkedin.com/in/minhtnguy/"
						target="_blank"
						className="underline underline-offset-4 decoration-1 hover:decoration-primary-blue hover:text-primary-blue"
					>
						Linkedin
					</Link>
					<Link
						href="https://read.cv/minhnguyen"
						target="_blank"
						className="underline underline-offset-4 decoration-1 hover:decoration-primary-blue hover:text-primary-blue"
					>
						CV
					</Link>
					<Link
						href="https://github.com/minhtnguy"
						target="_blank"
						className="underline underline-offset-4 decoration-1 hover:decoration-primary-blue hover:text-primary-blue"
					>
						Github
					</Link>
				</div>
			</div>
		</main>
	);
}
