"use client";

import StickerStack from "./components/StickerStack";
import ProjectPanelGrid from "./components/ProjectPanelGrid";
import ViewTransition from "@/app/components/ViewTransition";

const HOME_FADE_EASE = [0.23, 1, 0.32, 1];

export default function Home() {
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
				<section aria-label="Projects">
					<ProjectPanelGrid />
				</section>
			</div>
		</ViewTransition>
	);
}
