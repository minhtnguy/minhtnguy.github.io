"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTooltip({ description, isVisible }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		if (isVisible) {
			window.addEventListener("mousemove", updatePosition);
		}

		return () => {
			window.removeEventListener("mousemove", updatePosition);
		};
	}, [isVisible]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed pointer-events-none z-50 bg-gray-100 border border-[#E2E2E2] rounded-xl px-3 py-2 shadow-lg max-w-xs"
					initial={{
						scaleX: 0,
						opacity: 0,
					}}
					animate={{
						scaleX: 1,
						opacity: 0.95,
					}}
					exit={{
						scaleX: 0,
						opacity: 0,
					}}
					transition={{
						duration: 0.2,
						ease: "easeOut",
					}}
					style={{
						left: `${position.x + 20}px`,
						top: `${position.y + 20}px`,
						transformOrigin: "left center",
					}}
				>
					<p className="text-xs text-primary-black leading-relaxed">
						{description}
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
