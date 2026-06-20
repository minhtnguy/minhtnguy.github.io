"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useStickerStackNav } from "./StickerStackNavContext";

const NAV_FADE_EASE = [0.23, 1, 0.32, 1];

export default function Nav() {
	const pathname = usePathname();
	const reducedMotion = useReducedMotion();
	const { isStackOpen } = useStickerStackNav();
	const isHome = pathname === "/";
	const isVisible = !isHome || isStackOpen;

	return (
		<>
			{isVisible && !isHome && (
				<div aria-hidden="true" className="h-[4.5rem] shrink-0 sm:h-20" />
			)}
			<AnimatePresence mode="wait">
			{isVisible && (
				<motion.div
					key="main-nav"
					initial={
						reducedMotion || !isHome
							? false
							: { opacity: 0, y: -10 }
					}
					animate={{ opacity: 1, y: 0 }}
					exit={
						reducedMotion
							? { opacity: 0 }
							: { opacity: 0, y: -10 }
					}
					transition={{
						duration: reducedMotion ? 0.15 : 0.85,
						ease: NAV_FADE_EASE,
					}}
					className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
				>
					<nav className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border border-gray-200 bg-gradient-to-b from-gray-100/60 to-gray-50/60 px-4 py-3 backdrop-blur-sm sm:px-8">
						<Link href="/">
							<div className="flex items-center space-x-3">
								<span
									role="img"
									aria-label="Minh Nguyen"
									className="block aspect-[514/79] h-[18px] w-auto bg-primary-blue transition-transform duration-300 hover:rotate-[-1.5deg] sm:h-[20px] [mask-image:url(/MyName.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/MyName.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
								/>
							</div>
						</Link>

						<div className="flex items-center space-x-12">
							<Link
								href="/"
								className="text-xl font-medium text-primary-black transition-transform duration-300 ease-in-out hover:rotate-[-1.5deg] hover:text-primary-blue"
							>
								Work
							</Link>
							<Link
								href="/about"
								className="text-xl font-medium text-primary-black transition-transform duration-300 ease-in-out hover:rotate-[1.5deg] hover:text-primary-blue"
							>
								About
							</Link>
						</div>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
		</>
	);
}
