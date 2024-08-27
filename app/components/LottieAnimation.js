"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieAnimation({ src, className }) {
	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		fetch(src)
			.then((response) => response.json())
			.then((data) => setAnimationData(data))
			.catch((error) =>
				console.error("Error loading Lottie animation:", error)
			);
	}, [src]);

	if (typeof window === "undefined" || !animationData) return null;

	return <Lottie animationData={animationData} className={className} />;
}
