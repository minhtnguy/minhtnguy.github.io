"use client";

import StickerStack from "./components/StickerStack";
import ViewTransition from "@/app/components/ViewTransition";

export default function Home() {
	return (
		<ViewTransition>
			<div className="bg-[#FFFFFF] relative z-10 overflow-visible">
				<StickerStack />
			</div>
		</ViewTransition>
	);
}
