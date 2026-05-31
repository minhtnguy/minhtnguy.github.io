"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ViewTransition({
	children,
	initial = { y: 16 },
	animate = { y: 0 },
	exit = { opacity: 0, y: 0 },
	transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
	className = "",
}) {
	const reducedMotion = useReducedMotion();

	return (
		<motion.div
			initial={reducedMotion ? false : initial}
			animate={animate}
			exit={reducedMotion ? false : exit}
			transition={transition}
			className={className}
			suppressHydrationWarning
		>
			{children}
		</motion.div>
	);
}
