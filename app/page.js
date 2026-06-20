"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import StickerStack from "./components/StickerStack";
import ProjectPanelGrid from "./components/ProjectPanelGrid";
import ViewTransition from "@/app/components/ViewTransition";

const HOME_FADE_EASE = [0.23, 1, 0.32, 1];

export default function Home() {
	const reducedMotion = useReducedMotion();

	useEffect(() => {
		if (window.location.hash !== "#projects") return;

		const projects = document.getElementById("projects");
		if (!projects) return;

		projects.scrollIntoView({
			behavior: reducedMotion ? "auto" : "smooth",
		});
	}, [reducedMotion]);

	return (
		<ViewTransition
			nested={false}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7, ease: HOME_FADE_EASE }}
		>
			<div className="relative z-10 overflow-visible bg-[#FFFFFF]">
				<StickerStack />
				<section id="projects" aria-label="Projects" className="scroll-mt-20">
					<ProjectPanelGrid />
				</section>
			</div>
		</ViewTransition>
	);
}
