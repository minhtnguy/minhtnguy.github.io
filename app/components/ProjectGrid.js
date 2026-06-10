"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { getProjects } from "@/app/data/projects";
import CursorTooltip from "@/app/components/CursorTooltip";
import LottieAnimation from "@/app/components/LottieAnimation";

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

const imagePathMap = {
	"/images/droneforce/Droneforce.png": "/projects/droneforce",
	"/images/figgy/figgy.png": "/projects/figgy",
	"/images/moodi/moodi.jpg": "/projects/moodi",
	"/images/careergram/loading.json": "/projects/careergram",
	"/images/edsight/edsight.png":
		"https://medium.com/@mtnguy16/creating-edsight-2-0s-design-system-d0504eee786f",
	"/images/oloid/main.png": "/projects/oloid",
	"/images/playground/inspo-shuffle.png": "/playground",
};

const projectConfigs = [
	{
		imageSrc: "/images/droneforce/Droneforce.png",
		imageType: "image",
		imageProps: { fill: true, className: "object-cover" },
		containerClass: "overflow-hidden relative",
		fullBleed: true,
	},
	{
		imageSrc: "/images/figgy/figgy.png",
		imageType: "image",
		imageProps: { height: 375, width: 500, className: "object-cover" },
		containerClass: "overflow-hidden relative p-2 sm:p-3 md:p-4",
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
				src: "/images/playground/AI-led-panels.jpg",
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

export default function ProjectGrid() {
	const projects = getProjects();
	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<>
			<CursorTooltip
				description={hoveredProject?.description}
				isVisible={!!hoveredProject}
			/>
			<section className="px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-12 md:pt-24 md:pb-16 lg:px-24 xl:px-48">
				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:gap-y-16">
					{projectConfigs.map((config, index) => {
						const project = projects.find(
							(p) => p.href === imagePathMap[config.imageSrc],
						);

						if (!project) return null;

						const cardInnerContent =
							config.imageType === "lottie" ? (
								<div className="my-6 sm:my-8 md:my-12 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-40">
									<LottieAnimation
										src={config.imageSrc}
										className="h-48 w-full sm:h-56 md:h-64 lg:h-72"
									/>
								</div>
							) : config.imageType === "grid" && config.imageGrid ? (
								<div className="h-full w-full overflow-hidden">
									<div className="h-full w-full origin-center scale-[1.2]">
										<div className="grid h-full min-h-0 w-full grid-cols-3 grid-rows-3 gap-8 overflow-hidden">
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
														className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden"
													>
														<Image
															src={src}
															alt=""
															width={width}
															height={height}
															className="shrink-0 rounded-sm border border-[#E2E2E2]"
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
									"h-[380px] w-full rounded-md border border-[#E2E2E2] sm:h-[480px]",
									config.imageType === "grid"
										? "dot-grid-bg"
										: config.fullBleed
											? ""
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
								<div className="mb-5 flex items-center justify-between">
									<p className="text-sm font-normal text-[#686868] sm:text-base">
										{project.title}
									</p>
									<p className="text-sm text-[#B7B7B7] sm:text-base">
										{project.year}
									</p>
								</div>
								{config.fullWidth ? (
									<div
										className={cn(
											project.href === "/playground"
												? "playground-card-rainbow rounded-lg p-[2px]"
												: "rounded-md outline-none transition-[outline-color] hover:outline-2 hover:outline-offset-2 hover:outline-primary-blue",
										)}
									>
										{cardDiv}
									</div>
								) : (
									cardDiv
								)}
								{project.tags?.length > 0 && (
									<div className="mt-6 flex flex-wrap gap-1.5">
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
								className="space-y-6 transition-all duration-300 ease-in-out hover:scale-[0.95]"
							>
								<Link
									href={project.href}
									target={project.target || ""}
									className="block"
								>
									{content}
								</Link>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
