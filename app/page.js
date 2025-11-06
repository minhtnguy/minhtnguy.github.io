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
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import CursorTooltip from "./components/CursorTooltip";
import LottieAnimation from "./components/LottieAnimation";
import { links } from "./data/links";

export default function Home() {
	const projects = getProjects();
	const [hoveredProject, setHoveredProject] = useState(null);

	// Map image paths to project hrefs for matching
	const imagePathMap = {
		"/images/droneforce/launch.gif": "/projects/droneforce",
		"/images/figgy/figgy.png": "/projects/figgy",
		"/images/recollection/shuffle.png": "/projects/recollection",
		"/images/careergram/loading.json": "/projects/careergram",
		"/images/moodi/moodi.jpg": "/projects/moodi",
		"/images/fph/fph.png": "/projects/fph",
		"/images/edsight/edsight.png":
			"https://medium.com/@mtnguy16/creating-edsight-2-0s-design-system-d0504eee786f",
		"/images/oloid/main.png": "/projects/oloid",
	};

	// Project display configuration
	const projectConfigs = [
		{
			imageSrc: "/images/droneforce/launch.gif",
			imageType: "image",
			imageProps: {
				height: 375,
				width: 500,
				className: "object-cover rounded-sm",
			},
			containerClass: "flex items-center justify-center p-12",
		},
		{
			imageSrc: "/images/figgy/figgy.png",
			imageType: "image",
			imageProps: { height: 375, width: 500, className: "object-cover" },
			containerClass: "overflow-hidden relative p-4",
		},
		{
			imageSrc: "/images/recollection/shuffle.png",
			imageType: "image",
			imageProps: { fill: true, className: "object-cover" },
			containerClass: "overflow-hidden relative",
		},
		{
			imageSrc: "/images/careergram/loading.json",
			imageType: "lottie",
			containerClass: "overflow-hidden relative",
		},
		{
			imageSrc: "/images/moodi/moodi.jpg",
			imageType: "image",
			imageProps: {
				height: 375,
				width: 500,
				className: "object-cover rounded-sm",
			},
			containerClass: "flex items-center justify-center p-12",
		},
		{
			imageSrc: "/images/fph/fph.png",
			imageType: "image",
			imageProps: { fill: true, className: "" },
			containerClass: "overflow-hidden relative",
		},
		{
			imageSrc: "/images/edsight/edsight.png",
			imageType: "image",
			imageProps: { fill: true, className: "" },
			containerClass: "overflow-hidden relative",
		},
		{
			imageSrc: "/images/oloid/main.png",
			imageType: "image",
			imageProps: { height: 375, width: 550, className: "object-cover" },
			containerClass: "overflow-hidden relative",
		},
	];

	return (
		<ViewTransition>
			<CursorTooltip
				description={hoveredProject?.description}
				isVisible={!!hoveredProject}
			/>
			<div className="bg-primary-blue my-24 mx-48">
				<div className=" bg-[#FFFFFC] ">
					<div className="flex justify-between ">
						<div className="w-[480px]">
							<div className="space-y-4">
								<h1 className="text-xl font-medium text-primary-blue">
									Minh Nguyen
								</h1>
								<p className="leading-relaxed text-primary-black">
									is a designer engineer who works across design and code to
									quickly prototype ideas you can try, touch, and learn from.
								</p>
								<p className="leading-relaxed text-primary-black">
									Previously @ Salesforce.
								</p>
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<Link href="/about">
								<button className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[-5deg]">
									About
								</button>
							</Link>
							<Link href={links.linkedin} target="_blank">
								<button className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[2.5deg]">
									LinkedIn
								</button>
							</Link>
							<Link href={links.resume} target="_blank">
								<button className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[-2.5deg]">
									Resume
								</button>
							</Link>
							<Link href={links.email} target="_blank">
								<button className="hover:text-primary-blue transition-transform duration-300 hover:rotate-[5deg]">
									Email
								</button>
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-x-8 gap-y-16 mt-32">
						{projectConfigs.map((config, index) => {
							const project = projects.find(
								(p) => p.href === imagePathMap[config.imageSrc]
							);

							if (!project) return null;

							const isClickable = project.href !== "/projects/recollection";

							const ProjectWrapper = isClickable ? Link : "div";

							return (
								<ProjectWrapper
									key={index}
									{...(isClickable && {
										href: project.href,
										target: project.target || "",
									})}
									className="space-y-6 hover:scale-[0.95] transition-all duration-300 ease-in-out block"
								>
									<div
										className={`h-[375px] w-full bg-[#F5F5F5] border border-[#E2E2E2] rounded-md ${config.containerClass}`}
										onMouseEnter={() => setHoveredProject(project)}
										onMouseLeave={() => setHoveredProject(null)}
									>
										{config.imageType === "lottie" ? (
											<div className="my-12 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-40">
												<LottieAnimation
													src={config.imageSrc}
													className="w-full h-72"
												/>
											</div>
										) : (
											<Image
												src={config.imageSrc}
												alt={project.alt}
												{...config.imageProps}
											/>
										)}
									</div>
									<div className="flex justify-between items-center">
										<p className="text-[#686868] text-base font-mono font-medium">
											{project.title.toUpperCase()}
										</p>
										<p className="text-[#B7B7B7] text-base">{project.year}</p>
									</div>
								</ProjectWrapper>
							);
						})}
					</div>
				</div>
				{/* <Image src="/signature.svg" alt="signature" width={200} height={200} /> */}
			</div>
		</ViewTransition>
	);
}
