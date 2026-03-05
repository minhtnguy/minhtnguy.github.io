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

	const getTagStyle = (tag) => {
		switch (tag) {
			case "ux design":
				return "bg-purple-100 text-purple-700";
			case "dev":
				return "bg-green-100 text-green-700";
			case "design":
				return "bg-purple-100 text-purple-700";
			case "AI":
				return "bg-blue-100 text-blue-700";
			case "arduino":
				return "bg-orange-100 text-orange-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	// Map image paths to project hrefs for matching
	const imagePathMap = {
		"/images/playground/inspo-shuffle.png": "/playground",
		"/images/droneforce/launch.gif": "/projects/droneforce",
		"/images/figgy/figgy.png": "/projects/figgy",
		"/images/recollection/shuffle.png": "/projects/recollection",
		"/images/moodi/moodi.jpg": "/projects/moodi",
		"/images/careergram/loading.json": "/projects/careergram",

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
				className: "object-cover rounded-sm w-full h-full",
				unoptimized: true,
			},
			containerClass:
				"flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden",
		},
		{
			imageSrc: "/images/figgy/figgy.png",
			imageType: "image",
			imageProps: { height: 375, width: 500, className: "object-cover" },
			containerClass: "overflow-hidden relative p-2 sm:p-3 md:p-4",
		},
		{
			imageSrc: "/images/recollection/shuffle.png",
			imageType: "image",
			imageProps: { fill: true, className: "object-cover" },
			containerClass: "overflow-hidden relative",
		},

		{
			imageSrc: "/images/moodi/moodi.jpg",
			imageType: "image",
			imageProps: {
				height: 375,
				width: 500,
				className: "object-cover rounded-sm w-full h-full",
			},
			containerClass:
				"flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden",
		},
		{
			imageSrc: "/images/careergram/loading.json",
			imageType: "lottie",
			containerClass: "overflow-hidden relative",
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
		{
			imageSrc: "/images/playground/inspo-shuffle.png",
			imageType: "grid",
			imageGrid: [
				{
					src: "/images/playground/ai-led-panels.jpg",
					width: 210,
					height: 158,
				},
				{ src: "/images/playground/dots.png", width: 135, height: 180 },

				{
					src: "/images/playground/inspo-shuffle.png",
					width: 143,
					height: 188,
				},

				{
					src: "/images/playground/ephemeral-observations.png",
					width: 165,
					height: 165,
				},
				{
					src: "/images/playground/crazy-object-detection.png",
					width: 180,
					height: 135,
				},
				{
					src: "/images/playground/image-carousel.png",
					width: 195,
					height: 131,
				},
				{ src: "/images/playground/balls.png", width: 150, height: 150 },

				{ src: "/images/playground/stat-station.png", width: 173, height: 143 },
				{ src: "/images/playground/tide-light.jpeg", width: 158, height: 210 },
			],
			containerClass:
				"overflow-hidden relative hover:outline-2 hover:outline-offset-2",
			fullWidth: true,
		},
	];

	return (
		<ViewTransition>
			<CursorTooltip
				description={hoveredProject?.description}
				isVisible={!!hoveredProject}
			/>
			<div className="bg-primary-blue my-8 md:my-16 lg:my-24 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 relative z-10 rounded-t-2xl">
				<div className="bg-[#FFFFFF] p-4 pb-12 sm:p-6 sm:pb-14 md:p-8 md:pb-16 lg:p-12 lg:pb-20 relative z-10">
					<div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
						<div className="w-full md:w-[480px]">
							<div className="space-y-4">
								<h1 className="text-lg sm:text-xl font-medium text-primary-blue">
									Minh Nguyen
								</h1>
								<p className="text-sm sm:text-base leading-relaxed text-primary-black">
									is a designer who works across design and code to quickly
									prototype ideas you can try, touch, and learn from.
								</p>
								{/* <p className="text-sm sm:text-base leading-relaxed text-primary-black">
									Previously @ Salesforce.
								</p> */}
							</div>
						</div>
						<div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
							<Link href="/about">
								<button className="text-sm sm:text-base hover:text-primary-blue transition-transform duration-300 hover:rotate-[-5deg]">
									About
								</button>
							</Link>
							<Link href={links.email} target="_blank">
								<button className="text-sm sm:text-base hover:text-primary-blue transition-transform duration-300 hover:rotate-[5deg]">
									Email
								</button>
							</Link>
							<Link href={links.linkedin} target="_blank">
								<button className="text-sm sm:text-base hover:text-primary-blue transition-transform duration-300 hover:rotate-[2.5deg]">
									LinkedIn
								</button>
							</Link>
							<Link href={links.resume} target="_blank">
								<button className="text-sm sm:text-base hover:text-primary-blue transition-transform duration-300 hover:rotate-[-2.5deg]">
									Resume
								</button>
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-16 mt-16 md:mt-24 lg:mt-32">
						{projectConfigs.map((config, index) => {
							const project = projects.find(
								(p) => p.href === imagePathMap[config.imageSrc],
							);

							if (!project) return null;

							const isClickable = project.href !== "/projects/recollection";

							const cardInnerContent =
								config.imageType === "lottie" ? (
									<div className="my-6 sm:my-8 md:my-12 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-40">
										<LottieAnimation
											src={config.imageSrc}
											className="w-full h-48 sm:h-56 md:h-64 lg:h-72"
										/>
									</div>
								) : config.imageType === "grid" && config.imageGrid ? (
									<div className="w-full h-full overflow-hidden">
										<div className="w-full h-full scale-[1.2] origin-center">
											<div className="grid grid-cols-3 grid-rows-3 gap-8 w-full h-full min-h-0 overflow-hidden">
												{config.imageGrid.map((item, i) => {
													const src =
														typeof item === "string" ? item : item.src;
													const width =
														typeof item === "object" ? item.width : 100;
													const height =
														typeof item === "object" ? item.height : 100;
													return (
														<div
															key={i}
															className="relative w-full h-full min-h-0 flex items-center justify-center overflow-hidden"
														>
															<Image
																src={src}
																alt=""
																width={width}
																height={height}
																className="rounded-sm shrink-0 border border-[#E2E2E2]"
															/>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								) : (
									<Image
										src={config.imageSrc}
										alt={project.alt}
										{...config.imageProps}
									/>
								);

							const cardDiv = (
								<div
									className={cn(
										"h-[300px] sm:h-[375px] md:h-[375px] w-full rounded-md border border-[#E2E2E2]",
										config.imageType === "grid"
											? "dot-grid-bg"
											: "bg-[#F5F5F5]",
										config.containerClass,
									)}
									onMouseEnter={() => setHoveredProject(project)}
									onMouseLeave={() => setHoveredProject(null)}
								>
									{cardInnerContent}
								</div>
							);

							const content = (
								<>
									<div className="flex justify-between items-center mb-5">
										<p className="text-[#686868] text-sm sm:text-base font-normal">
											{project.title}
										</p>
										<p className="text-[#B7B7B7] text-sm sm:text-base">
											{project.year}
										</p>
									</div>
									{config.fullWidth ? (
										<div
											className={cn(
												project.href === "/playground"
													? "rounded-lg p-[2px] playground-card-rainbow"
													: "rounded-md outline-none hover:outline-2 hover:outline-offset-2 hover:outline-primary-blue transition-[outline-color]",
											)}
										>
											{cardDiv}
										</div>
									) : (
										cardDiv
									)}
									{project.tags?.length > 0 && (
										<div className="flex flex-wrap gap-1.5 mt-6">
											{project.tags.map((tag, i) => (
												<span
													key={i}
													className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getTagStyle(
														tag,
													)}`}
												>
													{tag}
												</span>
											))}
										</div>
									)}
								</>
							);

							return (
								<div
									key={index}
									className={cn(
										"space-y-6 hover:scale-[0.95] transition-all duration-300 ease-in-out",
										config.fullWidth && "md:col-span-2",
									)}
								>
									{isClickable ? (
										<Link
											href={project.href}
											target={project.target || ""}
											className="block"
										>
											{content}
										</Link>
									) : (
										<div className="block">{content}</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</ViewTransition>
	);
}
