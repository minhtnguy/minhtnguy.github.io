"use client";

import { motion } from "framer-motion";

export default function ViewTransition({
	children,
	initial = { opacity: 0, y: 20 },
	animate = { opacity: 1, y: 0 },
	exit = { opacity: 0, y: 0 },
	transition = { duration: 0.5 },
	className = "",
}) {
	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
		>
			<div className={className}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					{children}
				</motion.div>
			</div>
		</motion.div>
	);
}
