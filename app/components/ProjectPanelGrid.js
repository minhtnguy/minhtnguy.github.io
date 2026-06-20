"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import LottieAnimation from "@/app/components/LottieAnimation";

const projects = [
	{
		id: "droneforce",
		type: "overlay-image",
		src: "/images/droneforce/salesforce-logo.png",
		background: "/images/droneforce/launch.gif",
		alt: "Salesforce logo",
		title: "Droneforce — Agentic Drones for Salesforce Field Service",
		tags: ["design", "dev", "AI", "emerging tech"],
		href: "/projects/droneforce",
		span: "md:col-span-2 md:row-start-1",
		wide: true,
		hoverReveal: {
			color: "#0E0E96",
			name: "Droneforce",
			categories: "Emerging Tech, AI, UX Engineer",
			description:
				"An agentic drone workflow for inspections, monitoring, and various field service use cases at Salesforce.",
		},
	},
	{
		id: "figgy",
		type: "image",
		src: "/images/figgy/figgy.png",
		alt: "Figgy preview",
		title: "Figgy — AI Component Agent for Figma",
		tags: ["design", "dev", "AI", "hackathon"],
		href: "/projects/figgy",
		fit: "contain",
		padding: false,
		imageClass: "scale-[1.09] object-contain object-[50%_45%]",
		span: "md:col-span-1 md:row-start-1",
		hoverReveal: {
			color: "#EA580C",
			name: "Figgy",
			categories: "Hackathon, AI",
			description: "Context-aware component suggestions in Figma with AI.",
		},
	},
	{
		id: "careergram",
		type: "lottie",
		src: "/images/careergram/loading.json",
		alt: "Careergram tangram animation",
		title: "Careergram — AI Career Exploration",
		tags: ["design", "dev", "AI", "edtech"],
		href: "/projects/careergram",
		padding: true,
		lottieClass: "h-[65%] w-[65%]",
		span: "md:col-span-1 md:row-start-2",
		hoverReveal: {
			color: "#DB2777",
			name: "Careergram",
			categories: "EdTech, AI, Design Engineer",
			description:
				"Helping students explore career pathways through AI-assisted self-reflection.",
		},
	},
	{
		id: "thesis",
		type: "thesis-moodboard",
		title: "Thesis — Multimodal AI Moodboarding",
		tags: ["design", "dev", "AI"],
		href: null,
		span: "md:col-span-2 md:row-start-2",
		wide: true,
		hoverReveal: {
			color: "#5B21B6",
			name: "Room for Thought",
			categories: "Coming soon!",
			description:
				"A multimodal AI workspace that explores how gesture, voice, and spatial interaction can support collaborative thinking.",
		},
	},
	{
		id: "ajis",
		type: "image",
		src: "/images/ajis/ajis.png",
		alt: "American Journal of Irish Studies preview",
		title: "AJIS — American Journal of Irish Studies",
		tags: ["design", "dev"],
		href: "/projects/ajis",
		fit: "contain",
		padding: true,
		imageClass: "scale-[0.88] object-contain",
		span: "md:col-span-1 md:col-start-1 md:row-start-3",
		hoverReveal: {
			color: "#005247",
			name: "American Journal of Irish Studies",
			categories: "Web Dev / Design",
			description:
				"An academic journal website for Irish and Irish-American culture, history, and literature.",
		},
	},
	{
		id: "edsight",
		type: "image",
		src: "/images/edsight/edsight-preview.png",
		alt: "Edsight design system preview",
		title: "Edsight — Design System for Edsight 2.0",
		tags: ["design", "dev", "edtech"],
		href: "https://medium.com/@mtnguy16/creating-edsight-2-0s-design-system-d0504eee786f",
		target: "_blank",
		fit: "contain",
		padding: false,
		imageClass:
			"scale-[1.32] object-contain object-[100%_70%] translate-x-[20%]",
		span: "md:col-span-1 md:col-start-2 md:row-start-3",
		hoverReveal: {
			color: "#B52D48",
			name: "Edsight",
			categories: "EdTech, UX Design",
			description:
				"A new design system built to reimagine Edsight's data analytics dashboard for educators.",
		},
	},
	{
		id: "oloid",
		type: "image",
		src: "/images/oloid/oloid-cover.png",
		alt: "Oloid preview",
		title: "Oloid — Modernizing Physical Access in the Workplace",
		tags: ["design", "B2B SaaS"],
		href: "/projects/oloid",
		fit: "contain",
		padding: true,
		span: "md:col-span-1 md:col-start-3 md:row-start-3",
		hoverReveal: {
			color: "#2563EB",
			name: "Oloid",
			categories: "B2B SaaS, Product Design",
			description:
				"Modernizing physical access and security in the workplace through a redesigned admin portal.",
		},
	},
];

const thesisMoodboardItems = [
	{
		type: "tag",
		label: "Artificial Intelligence",
		className: "left-[2%] top-[10%] z-20 -rotate-[5deg] scale-95",
	},
	{
		type: "tag",
		label: "Embodied",
		className: "left-[18%] top-[4%] z-20 rotate-[7deg]",
	},
	{
		type: "tag",
		label: "Voice",
		className: "left-[44%] top-[15%] z-20 -rotate-[2deg] scale-105",
	},
	{
		type: "tag",
		label: "Spatial",
		className: "left-[61%] top-[5%] z-20 rotate-[4deg]",
	},
	{
		type: "tag",
		label: "Brainstorming",
		className: "right-[2%] top-[12%] z-20 -rotate-[6deg] scale-95",
	},
	{
		type: "image",
		src: "/images/thesis/thesis-v1.png",
		alt: "Thesis spatial interface",
		className: "left-[5%] top-[32%] z-10 w-[24%] -rotate-[3deg] max-md:w-[44%]",
	},
	{
		type: "image",
		src: "/images/thesis/thesis-demo.png",
		alt: "Thesis demo in physical space",
		className:
			"right-[5%] top-[28%] z-10 w-[25%] rotate-[4deg] max-md:w-[46%] max-md:top-[40%]",
	},
	{
		type: "tag",
		label: "Images",
		className: "left-[35%] top-[26%] z-20 rotate-[5deg]",
	},
	{
		type: "tag",
		label: "Collaborative",
		className: "left-[55%] top-[39%] z-20 -rotate-[4deg] scale-105",
	},
	{
		type: "tag",
		label: "Multimodal",
		className: "left-[37%] top-[53%] z-20 rotate-[6deg]",
	},
	{
		type: "tag",
		label: "Workspace",
		className: "left-[6%] top-[72%] z-20 -rotate-[2deg]",
	},
	{
		type: "tag",
		label: "Gestures",
		className: "left-[21%] top-[86%] z-20 -rotate-[6deg] scale-95",
	},
	{
		type: "tag",
		label: "soft gradients",
		className: "left-[48%] top-[69%] z-20 -rotate-[3deg]",
	},
	{
		type: "tag",
		label: "high-contrast glow",
		className: "right-[7%] top-[77%] z-20 rotate-[5deg] scale-105",
	},
];

function MoodboardTag({ children, className }) {
	return (
		<span
			className={cn(
				"inline-block origin-center rounded-md border border-[#ECECEC] bg-white px-2.5 py-1.5 text-[9px] leading-tight text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:text-[10px]",
				className,
			)}
		>
			{children}
		</span>
	);
}

function ThesisMoodboard() {
	return (
		<div className="relative h-full w-full overflow-visible bg-gradient-to-b from-[#F9F9FB] via-[#F6F5FA] to-[#EEF1F8]">
			{thesisMoodboardItems.map((item) =>
				item.type === "tag" ? (
					<MoodboardTag
						key={item.label}
						className={cn("absolute", item.className)}
					>
						{item.label}
					</MoodboardTag>
				) : (
					<div
						key={item.src}
						className={cn(
							"absolute origin-center overflow-visible",
							item.className,
						)}
					>
						<Image
							src={item.src}
							alt={item.alt}
							width={480}
							height={720}
							className="h-auto w-full rounded-sm border border-[#bababa] bg-white object-contain shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
						/>
					</div>
				),
			)}
		</div>
	);
}

const getTagStyle = (tag) => {
	switch (tag) {
		case "ux design":
		case "design":
			return "bg-purple-100 text-purple-700";
		case "dev":
			return "bg-green-100 text-green-700";
		case "AI":
			return "bg-blue-100 text-blue-700";
		case "arduino":
			return "bg-orange-100 text-orange-700";
		default:
			return "bg-gray-100 text-gray-700";
	}
};

function HoverRevealPanel({ reveal }) {
	return (
		<div
			className="absolute inset-0 z-20 flex translate-y-full flex-col justify-between rounded p-6 opacity-100 transition-[transform,opacity] duration-[400ms] ease-in-out group-hover:translate-y-0 motion-reduce:translate-y-0 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200 motion-reduce:group-hover:opacity-100 md:p-5 lg:p-8"
			style={{ backgroundColor: reveal.color }}
		>
			<p className="text-sm text-white/55 md:text-xs lg:text-sm">
				{reveal.categories}
			</p>
			<div>
				<h3 className="text-3xl font-medium tracking-tight text-white md:text-2xl lg:text-4xl">
					{reveal.name}
				</h3>
				<p className="mt-3 max-w-md text-sm leading-relaxed text-white md:mt-2 md:text-xs lg:mt-3 lg:text-base">
					{reveal.description}
				</p>
			</div>
		</div>
	);
}

function GridCard({ project }) {
	const isSvg = project.src?.endsWith(".svg");

	const card = (
		<div className="group relative h-full overflow-hidden rounded border border-[#E2E2E2] bg-[#F5F5F5]">
			<div
				className={cn(
					"relative h-full overflow-hidden",
					project.paddingClass ?? (project.padding && "p-3 sm:p-4"),
				)}
			>
				{project.type === "overlay-image" ? (
					<div className="relative h-full w-full">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={project.background}
							alt=""
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/55" aria-hidden="true" />
						<div className="relative z-10 flex h-full w-full items-center justify-center">
							<Image
								src={project.src}
								alt={project.alt}
								width={320}
								height={224}
								className="h-auto w-[40%] max-w-[160px] object-contain md:w-[32%]"
							/>
						</div>
					</div>
				) : project.type === "thesis-moodboard" ? (
					<ThesisMoodboard />
				) : project.type === "lottie" ? (
					<div className="flex h-full w-full items-center justify-center">
						<LottieAnimation
							src={project.src}
							className={project.lottieClass ?? "h-full w-full"}
						/>
					</div>
				) : isSvg ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={project.src}
						alt={project.alt}
						className={cn(
							"h-full w-full",
							project.fit === "contain" ? "object-contain" : "object-cover",
							project.imageClass,
						)}
					/>
				) : (
					<Image
						src={project.src}
						alt={project.alt}
						fill
						sizes="(min-width: 768px) 33vw, 100vw"
						className={cn(
							project.fit === "contain" ? "object-contain" : "object-cover",
							project.imageClass,
						)}
					/>
				)}
				{!project.hoverReveal && (
					<div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-2 pb-2 pt-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
						<p className="text-xs font-medium leading-snug text-neutral-900 sm:text-sm">
							{project.title}
						</p>
						<div className="mt-1 flex flex-wrap gap-1">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className={cn(
										"inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium sm:text-xs",
										getTagStyle(tag),
									)}
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
			{project.hoverReveal && <HoverRevealPanel reveal={project.hoverReveal} />}
		</div>
	);

	const className = cn(
		"w-full transition-transform duration-200 ease-out active:scale-[0.97]",
		!project.hoverReveal && "hover:scale-[1.01]",
		project.wide ? "aspect-square md:aspect-auto md:h-full" : "aspect-square",
		project.span,
	);

	if (project.href) {
		return (
			<Link
				href={project.href}
				target={project.target || ""}
				rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
				className={cn("block", className)}
			>
				{card}
			</Link>
		);
	}
	return <div className={className}>{card}</div>;
}

export default function ProjectPanelGrid() {
	return (
		<div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28">
			<div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-stretch md:gap-4">
				{projects.map((project) => (
					<GridCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
