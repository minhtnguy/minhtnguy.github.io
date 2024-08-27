"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import ProjectPreview from "./components/ProjectPreview";
import More from "./components/More";
import { cn } from "@/utils/cn";
import React, { use } from "react";
import { motion } from "framer-motion";
import { getProjects, projects } from "./data/projects";
import { useState } from "react";
import ViewTransition from "@/app/components/ViewTransition";
import LogoLink from "./components/LogoLink";

export default function Home() {
	const projects = getProjects();
	const [isHovered, setIsHovered] = useState(false);
	return (
		<ViewTransition>
			<main className="flex flex-col md:flex-row">
				<div className="w-full md:w-5/12 px-8 md:px-8">
					<div className="my-8 md:my-24 md:ml-24">
						<div className="space-y-4">
							<LogoLink />
							<h1 className="font-medium text-2xl text-primary-blue">
								Minh Nguyen
							</h1>
							<p className="text-primary-black md:w-96 text-base">
								I design and build software with curiosity and joy. Currently
								studying Design @ NYU IDM.
							</p>
							<More />
						</div>
						<div className="mt-16">
							<h2 className="font-medium text-primary-blue">Projects</h2>
							<div>
								{projects.map((project, index) => (
									<Link
										href={project.href}
										target={project.target}
										key={project.title}
									>
										<ProjectCard
											key={project.title}
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
				<div className="md:w-7/12">
					<ProjectPreview project={isHovered} />
				</div>
			</main>
		</ViewTransition>
	);
}
