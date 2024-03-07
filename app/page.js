import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import { LongCard, ShortCard } from "./components/Card";
import { cn } from "@/utils/cn";
import React from "react";
import { BackgroundGradientAnimation } from "./components/HomeGradient";

export default function Home() {
	return (
		<main className="bg-[#FAFCFF]">
			<BackgroundGradientAnimation>
				<NavBar isBlue={false} />
				<div className="md:space-y-7 space-y-3 md:px-16 px-10 md:py-24 py-8">
					<h1 className="md:text-9xl text-6xl w-72 font-bold text-white">
						MINH NGUYEN
					</h1>
					<p className="md:text-3xl text-lg text-white font-medium">
						designer + developer
					</p>
				</div>
			</BackgroundGradientAnimation>
			<div className="md:px-16 px-10 md:pt-14 pt-8 space-y-10">
				<h2 className="md:text-xl text-lg font-bold text-gray-800">PROJECTS</h2>
				{projects.map((project, index) => (
					<Link href={project.href} target={project.target} key={index}>
						<LongCard
							key={index}
							title={project.title}
							subtitle={project.subtitle}
							tags={project.tags}
							description={project.description}
							img={project.img}
							alt={project.alt}
						/>
					</Link>
				))}
				{/* <h2 className="md:text-xl text-lg font-bold text-gray-800 pt-16">
					OTHER
				</h2>
				<div className="flex md:flex-row flex-col gap-6 flex-1">
					{other.map((other, index) => (
						<Link href={other.href} target={other.target} key={index}>
							<div className="flex flex-1">
								<ShortCard
									key={index}
									title={other.title}
									subtitle={other.subtitle}
									tags={other.tags}
									description={other.description}
									img={other.img}
									alt={other.alt}
									className="h-16 flex flex-1"
								/>
							</div>
						</Link>
					))}
				</div> */}
			</div>
			<Footer />
		</main>
	);
}

const projects = [
	{
		title: "Careergram",
		subtitle: "Design and Partnership Lab",
		tags: "UX DESIGN, RESEARCH, WEB DEV",
		description:
			"Helping students develop deeper identities toward career pathways by improving mentor-mentee conversations through student reflection and AI analysis.",
		img: "/images/careergram/cover.png",
		alt: "Careergram home page",
		href: "/projects/careergram",
		target: "",
	},
	{
		title: "Oloid Internship",
		subtitle: "Oloid",
		tags: "PRODUCT DESIGN, PROTOTYPING, BRAND IDENTITY, GRAPHIC DESIGN",
		description:
			"Reimagining physical security and access in the workplace. Redesigned the admin management portal for web and mobile interfaces.",
		img: "/images/oloid/cover.png",
		alt: "Oloid home page",
		href: "/projects/oloid",
		target: "",
	},
	{
		title: "Edsight Design System",
		subtitle: "Design and Partnership Lab",
		tags: "UX DESIGN, DESIGN SYSTEMS, BRAND IDENTITY",
		description:
			"Creating a consistent and accesible dashboard for Edsight, a data driven dashboard to help math teachers improve their teaching practices.",
		img: "/images/edsight/cover.png",
		alt: "Screenshots of Edsight's design systems",
		href: "https://medium.com/@mtnguy16/creating-edsight-2-0s-design-system-d0504eee786f",
		target: "_blank",
	},
	{
		title: "Half Court Sports",
		subtitle: "Personal Project",
		tags: "UI/UX DESIGN, USER RESEARCH",
		description:
			"Creating a consistent and accesible dashboard for Edsight, a data driven dashboard for math teachers to improve their teaching practices.",
		img: "/images/half-court-sports/cover.png",
		alt: "Screenshots of Edsight's design systems",
		href: "/projects/half-court-sports",
		target: "",
	},
];

const other = [
	{
		title: "Analysis of Montreal Crime Data",
		tags: "DATA ANALYSIS",
		description:
			"Participated in a datathon with the goal of identifying trends in crime rates and proposed solutions to reduce crime in Montreal. Won Social Impact Award.",
		img: "/images/careergram/cover.png",
		alt: "Careergram home page",
		href: "/projects/careergram",
		target: "",
	},
	{
		title: "Toxicity Rising",
		tags: "VR/AR, GAME DESIGN",
		description:
			"Created a VR escape room game with the core goal of teaching players about climate change and rising carbon emissions.",
		img: "/images/oloid/cover.png",
		alt: "Oloid home page",
		href: "/projects/oloid",
		target: "",
	},
];
