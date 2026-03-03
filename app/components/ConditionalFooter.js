"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import RevealingFooter from "./RevealingFooter";

export default function ConditionalFooter() {
	const pathname = usePathname();
	const isPlayground = pathname === "/playground";

	useEffect(() => {
		document.body.style.paddingBottom = isPlayground ? "0" : "";
		return () => {
			document.body.style.paddingBottom = "";
		};
	}, [isPlayground]);

	if (isPlayground) return null;
	return <RevealingFooter />;
}
