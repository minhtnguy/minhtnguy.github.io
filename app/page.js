"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import { LongCard, ShortCard } from "./components/Card";
import ProjectCard from "./components/ProjectCard";
import ProjectPreview from "./components/ProjectPreview";
import { cn } from "@/utils/cn";
import React, { use } from "react";
import { motion } from "framer-motion";
import { getProjects, projects } from "./data/projects";
import { useState } from "react";

export default function Home() {
	const projects = getProjects();
	const [isHovered, setIsHovered] = useState(false);
	return (
		<main className="flex flex-col md:flex-row">
			<div className="w-full md:w-5/12 px-8 md:px-8">
				<div className="my-8 md:my-24 md:ml-24">
					<div className="space-y-4">
						<h1 className="font-medium text-2xl text-primary-blue">
							Minh Nguyen
						</h1>
						<p className="text-primary-black w-96 text-sm">
							I design and build software with thoughtful intent and joy.
							Currently studying Design @ NYU IDM.
						</p>
						<Link
							href="/about"
							target=""
							className="text-primary-black text-sm hover:text-primary-blue hover:underline underline-offset-4 decoration-2 decoration-primary-blue pt-4 inline-block"
						>
							<p>More</p>
						</Link>
					</div>
					<div className="mt-16">
						<h2 className="font-medium text-primary-blue">Projects</h2>
						<div>
							{projects.map((project, index) => (
								<Link href={project.href} target={project.target} key={index}>
									<ProjectCard
										key={index}
										title={project.title}
										description={project.description}
										tags={project.tags}
										onHover={() => setIsHovered(project)}
										onLeave={() => setIsHovered(null)}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<ProjectPreview project={isHovered} className="bg-red-50" />
			{/* <div className="flex h-screen ml-20 justify-center items-center drop-shadow-xl">
				{isHovered && (
					<Image
						src="/images/fph/fph-preview.svg"
						width={650}
						height={650}
						alt="careergram preview"
						className="transition-opacity duration-300 ease-in-out"
					/>
				)}
			</div> */}

			{/* <NavBar isBlue={true} />
			<motion.div
				className="md:px-16 px-10"
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
			<div className="md:px-16 px-10 md:pt-12 pt-8 space-y-12">
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
