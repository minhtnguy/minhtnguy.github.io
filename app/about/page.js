import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Back from "../components/Back";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import { Metadata } from "next";

export default function About() {
	// [#FAFCFF]
	return (
		<main className="bg-[#FAFCFF] text-primary-blue min-h-screen">
			<NavBar isBlue={true} />
			<div className="md:py-4 py-12 md:px-16 p-10 space-y-16">
				<div className="space-y-4">
					<h1 className="md:text-6xl text-4xl font-semibold">Minh Nguyen</h1>
					<p className="text-lg italic">she/her</p>
				</div>

				<div className="font-base md:text-xl text-lg space-y-6 leading-relaxed">
					<p className="font-semibold">Hi, I'm Minh.</p>
					<p>
						I am a designer, developer, and researcher who is excited about
						building experiences to connect different communities through
						technology. These days I am interested in accessible web design,
						data driven storytelling, and AI augmented experiences.
					</p>
					<p>
						Currently, I am studying{" "}
						<b className="font-semibold">
							Computer Science, Informatics (HCI), and Psychology
						</b>{" "}
						at UC Irvine.
					</p>
					<p>
						I am a research assistant at the{" "}
						<Link
							href="https://www.daplab.education.uci.edu/"
							target="_blank"
							className="hover:underline hover:underline-offset-8 hover:decoration-wavy text-green-600"
						>
							UCI Design and Partnership Lab (daplab)
						</Link>{" "}
						where I am contributing to the research, design, and development of
						various edtech projects in the lab. I am also a design lead at{" "}
						<Link
							href="https://ctc-uci.com/"
							target="_blank"
							className="hover:underline hover:underline-offset-8 hover:decoration-wavy text-violet-600"
						>
							Commit the Change
						</Link>{" "}
						helping lead student designers and developers to create software for
						local nonprofits.
					</p>
					<p>
						Previously, I was a product design intern at{" "}
						<Link
							href="https://www.oloid.ai/"
							target="_blank"
							className="hover:underline hover:underline-offset-4 hover:decoration-wavy text-pink-600"
						>
							Oloid
						</Link>
						, a B2B startup working on modernizing physical identity and
						security in the workplace.
					</p>
					<p>
						Right now some of my current favorite things include: Bad Bunny,
						papaya salads, Formula 1, and nature documentaries (narrated by
						David Attenborough).
					</p>
					<div className="space-x-8 py-10 underline underline-offset-4 text-gray-500">
						{/* add icons */}
						<Link
							href="mailto:mtnguy16@uci.edu"
							className="hover:text-primary-blue"
						>
							Email
						</Link>
						<Link
							href="https://drive.google.com/file/d/1zU6MCCT1QnxStQ38AiWTHrVmkVfA7o7u/view?usp=sharing"
							target="_blank"
							className="hover:text-primary-blue"
						>
							Resume
						</Link>
						<Link
							href="https://www.linkedin.com/in/minhtnguy/"
							target="_blank"
							className="hover:text-primary-blue"
						>
							Linkedin
						</Link>
						<Link
							href="https://read.cv/minhnguyen"
							target="_blank"
							className="hover:text-primary-blue"
						>
							CV
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
