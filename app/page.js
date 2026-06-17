"use client";

import StickerStack from "./components/StickerStack";
import ProjectPanelGrid from "./components/ProjectPanelGrid";
import ViewTransition from "@/app/components/ViewTransition";

export default function Home() {
	return (
		<ViewTransition>
			<div className="bg-[#FFFFFF] relative z-10 overflow-visible">
				<StickerStack />
				<section aria-label="Projects">
					<ProjectPanelGrid />
				</section>
			</div>
		</ViewTransition>
	);
}
