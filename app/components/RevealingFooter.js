"use client";

import { clockCursor } from "cursor-effects";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { links } from "../data/links";

const footerLinks = [
	{ label: "LinkedIn", href: links.linkedin, external: true },
	{ label: "Email", href: links.email, external: false },
	{ label: "Resume", href: links.resume, external: true },
];

/**
 * Revealing footer: fixed beneath main content and uncovered as the page scrolls.
 */
export default function RevealingFooter() {
	const footerRef = useRef(null);
	const reducedMotion = useReducedMotion();

	useLayoutEffect(() => {
		const footer = footerRef.current;
		if (!footer) return;

		const syncFooterHeight = () => {
			const height = Math.round(footer.getBoundingClientRect().height);
			document.documentElement.style.setProperty(
				"--footer-height",
				`${height}px`,
			);
		};

		syncFooterHeight();

		const resizeObserver = new ResizeObserver(syncFooterHeight);
		resizeObserver.observe(footer);

		return () => {
			resizeObserver.disconnect();
			document.documentElement.style.setProperty("--footer-height", "0px");
		};
	}, []);

	useEffect(() => {
		const footer = footerRef.current;
		if (!footer) return;

		const effect = clockCursor({
			element: footer,
			zIndex: "0",
			dateColor: "#737373",
			faceColor: "#404040",
			secondsColor: "#ef4444",
			minutesColor: "#525252",
			hoursColor: "#525252",
		});

		return () => effect.destroy();
	}, []);

	return (
		<footer
			ref={footerRef}
			className="revealing-footer fixed bottom-0 left-0 z-[1] w-full bg-neutral-100"
			aria-label="Site footer"
		>
			<div className="relative z-[1] mx-auto flex max-w-xl flex-col items-center px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
				<motion.div
					className="relative inline-block w-full max-w-[120px] origin-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)] sm:max-w-[150px]"
					whileHover={reducedMotion ? undefined : { scale: 1.08 }}
					transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					<Image
						src="/images/stickers/OnMyLaptop.png"
						alt="Minh Nguyen peeking over a laptop covered in stickers"
						width={1000}
						height={800}
						className="h-auto w-full"
					/>
				</motion.div>

				<nav className="mt-8 sm:mt-12" aria-label="Footer links">
					<ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-light text-neutral-500 sm:text-sm ">
						{footerLinks.map((link, index) => (
							<li key={link.label} className="flex items-center gap-3">
								{index > 0 ? (
									<span aria-hidden="true" className="text-neutral-300">
										|
									</span>
								) : null}
								<Link
									href={link.href}
									{...(link.external
										? {
												target: "_blank",
												rel: "noopener noreferrer",
											}
										: {})}
									className="uppercase tracking-widest transition-colors hover:text-neutral-800"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<p className="mt-5 text-xs font-light text-neutral-400 sm:text-xs">
					Last updated June 2026
				</p>
			</div>
		</footer>
	);
}
