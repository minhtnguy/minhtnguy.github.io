"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import RevealingFooter from "./RevealingFooter";

export default function ConditionalFooter() {
	const pathname = usePathname();
	const isPlayground = pathname === "/playground";

	useEffect(() => {
		if (!isPlayground) return;

		document.documentElement.style.setProperty("--footer-height", "0px");
		return () => {
			document.documentElement.style.removeProperty("--footer-height");
		};
	}, [isPlayground]);

	if (isPlayground) return null;
	return <RevealingFooter />;
}
