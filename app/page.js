"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import { LongCard, ShortCard } from "./components/Card";
import ProjectCard from "./components/ProjectCard";
import { cn } from "@/utils/cn";
import React from "react";
import { BackgroundGradientAnimation } from "./components/HomeGradient";
import { motion } from "framer-motion";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
	return (
		<main className="md:px-16 px-10">
			<NavBar isBlue={true} />
			<motion.div
				initial={{ opacity: 0, y: 75 }} // Initial state of the animation
				animate={{ opacity: 1, y: 0 }} // Animation to perform when component mounts
				transition={{ duration: 0.5, ease: "easeInOut" }} // Duration of the animation
			>
				<div className="mt-36 mb-64 space-y-3 lg:w-1/2">
					<h1 className="font-semibold text-8xl text-primary-blue">
						minh nguyen
					</h1>
					<p className="font-medium text-3xl text-primary-black">
						<span className="text-[#721AB7]">designer</span> /{" "}
						<span className="text-[#FF7B00]">developer </span>
						studying computer science, informatics, and psychology at UC Irvine
					</p>
				</div>
			</motion.div>
			<SectionTitle title="PROJECTS" />
			<div className="space-y-32">
				{projects.map((project, index) => (
					<Link href={project.href} target={project.target} key={index}>
						<ProjectCard
							key={index}
							title={project.title}
							year={project.year}
							description={project.description}
							img={project.img}
							alt={project.alt}
						/>
					</Link>
				))}
			</div>

			{/* <BackgroundGradientAnimation>
				<NavBar isBlue={true} />
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
			</div>
			<Footer /> */}
		</main>
	);
}

const projects = [
	{
		title: "Careergram",
		subtitle: "Design and Partnership Lab",
		tags: "UX DESIGN, RESEARCH, WEB DEV",
		year: "2023",
		description:
			"Helping students develop deeper identities toward career pathways through student reflection and AI analysis.",
		img: "/images/careergram/careergram.svg",
		alt: "Careergram cover image",
		href: "/projects/careergram",
		target: "",
	},
	{
		title: "Oloid",
		subtitle: "Oloid",
		tags: "PRODUCT DESIGN, PROTOTYPING, BRAND IDENTITY, GRAPHIC DESIGN",
		year: "2022",
		description:
			"Reimagining physical security and access in the workplace. Redesigned the admin management portal for web and mobile interfaces.",
		img: "/images/oloid/oloid.svg",
		alt: "Oloid cover image",
		href: "/projects/oloid",
		target: "",
	},
	{
		title: "Edsight Design System",
		subtitle: "Design and Partnership Lab",
		tags: "UX DESIGN, DESIGN SYSTEMS, BRAND IDENTITY",
		year: "2022",
		description:
			"Creating a consistent and accesible dashboard for Edsight, a data driven dashboard to help math teachers improve their teaching practices.",
		img: "/images/edsight/edsight.svg",
		alt: "Edsight cover image",
		href: "https://medium.com/@mtnguy16/creating-edsight-2-0s-design-system-d0504eee786f",
		target: "_blank",
	},
	{
		title: "Half Court Sports",
		subtitle: "Personal Project",
		tags: "UI/UX DESIGN, USER RESEARCH",
		year: "2022",
		description:
			"Creating a consistent and accesible dashboard for Edsight, a data driven dashboard for math teachers to improve their teaching practices.",
		img: "/images/half-court-sports/half-court-sports.svg",
		alt: "Half Court Sports cover image",
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
