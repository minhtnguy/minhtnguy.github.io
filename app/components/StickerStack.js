"use client";

import Image from "next/image";
import Link from "next/link";
import {
	motion,
	useMotionValueEvent,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { useStickerStackNav } from "./StickerStackNavContext";

const stickerSize =
	"w-auto h-auto max-w-[280px] max-h-[240px] sm:max-w-[340px] sm:max-h-[290px] md:max-w-[400px] md:max-h-[340px] object-contain";

const FONT_SIZE = {
	heroTitle: "text-3xl sm:text-xl md:text-3xl",
	heroBody: "text-sm sm:text-base",
};

const DEFAULT_HOVER_ROTATE = 5;
const DEFAULT_HOVER_SCALE = 1.08;

const stickers = [
	{
		src: "/images/stickers/Hello.png",
		alt: "Hello my name is Minh sticker",
		width: 900,
		height: 671,
		zIndex: "z-40",
		endPosition: { left: "0%", top: "0%", x: "20%", y: "22%" },
		mobileEndPosition: { x: "-10%", y: "45%" },
		endRotate: -8,
		endScale: 0.65,
		mobileEndScale: 0.5,
		hoverRotate: 6,
	},
	{
		src: "/images/stickers/Notion.png",
		alt: "Notion sticker",
		width: 800,
		height: 800,
		zIndex: "z-30",
		endPosition: { left: "0%", top: "100%", x: "150%", y: "-150%" },
		mobileEndPosition: { x: "25%", y: "-170%" },
		endRotate: 3,
		endScale: 1.2,
		mobileEndScale: 0.7,
		hoverRotate: -5,
	},
	{
		src: "/images/stickers/Basquiat.png",
		alt: "Jean-Michel Basquiat sticker",
		width: 884,
		height: 900,
		zIndex: "z-20",
		endPosition: { left: "100%", top: "0%", x: "-140%", y: "10%" },
		mobileEndPosition: { x: "-95%", y: "40%" },
		endRotate: -6,
		endScale: 0.6,
		mobileEndScale: 0.45,
		hoverRotate: 7,
	},
	{
		src: "/images/stickers/LiveFromNY.png",
		alt: "Live From New York sticker",
		width: 512,
		height: 323,
		zIndex: "z-10",
		endPosition: { left: "100%", top: "100%", x: "-180%", y: "-150%" },
		mobileEndPosition: { x: "-105%", y: "-175%" },
		endRotate: 1,
		endScale: 0.95,
		mobileEndScale: 0.5,
		sizeClass:
			"w-auto h-auto max-w-[230px] max-h-[150px] sm:max-w-[460px] sm:max-h-[290px] md:max-w-[560px] md:max-h-[350px] object-contain",
		startScale: 1.5,
		mobileStartScale: 1.2,
		hoverRotate: -4,
	},
];

const SCROLL_HEIGHT = "350vh";
const ANIMATION_END = 0.65;
const CORNER_THRESHOLD = 0.98;
const SCROLL_INDICATOR_DELAY_MS = 1200;
const SCROLL_INDICATOR_ENTER_MS = 0.85;
const SCROLL_INDICATOR_EASE_OUT = [0.23, 1, 0.32, 1];
const MOBILE_MAX_WIDTH = 639;

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
		const onChange = (event) => setIsMobile(event.matches);

		onChange(mediaQuery);
		mediaQuery.addEventListener("change", onChange);

		return () => mediaQuery.removeEventListener("change", onChange);
	}, []);

	return isMobile;
}

function AnimatedSticker({
	sticker,
	animationProgress,
	reducedMotion,
	cornersReady,
	isMobile,
}) {
	const start = { left: "50%", top: "50%", x: "-50%", y: "-50%" };
	const endPosition =
		isMobile && sticker.mobileEndPosition
			? { ...sticker.endPosition, ...sticker.mobileEndPosition }
			: sticker.endPosition;

	const left = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [endPosition.left, endPosition.left]
			: [start.left, endPosition.left],
	);
	const top = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [endPosition.top, endPosition.top]
			: [start.top, endPosition.top],
	);
	const x = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion ? [endPosition.x, endPosition.x] : [start.x, endPosition.x],
	);
	const y = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion ? [endPosition.y, endPosition.y] : [start.y, endPosition.y],
	);
	const endScale =
		isMobile && sticker.mobileEndScale != null
			? sticker.mobileEndScale
			: (sticker.endScale ?? 0.55);
	const startScale =
		isMobile && sticker.mobileStartScale != null
			? sticker.mobileStartScale
			: (sticker.startScale ?? 1);
	const scale = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion ? [endScale, endScale] : [startScale, endScale],
	);
	const rotate = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [sticker.endRotate, sticker.endRotate]
			: [0, sticker.endRotate],
	);

	const imageClass = sticker.sizeClass ?? stickerSize;

	return (
		<motion.div
			className={cn("pointer-events-none absolute", sticker.zIndex)}
			style={{ left, top, x, y, scale, rotate }}
		>
			<motion.div
				role="img"
				aria-label={sticker.alt}
				whileHover={
					cornersReady && !reducedMotion
						? {
								rotate: sticker.hoverRotate ?? DEFAULT_HOVER_ROTATE,
								scale: sticker.hoverScale ?? DEFAULT_HOVER_SCALE,
							}
						: undefined
				}
				transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
				className={cn(
					"relative inline-block origin-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
					cornersReady
						? "pointer-events-auto [@media(hover:hover)_and_(pointer:fine)]:cursor-default"
						: "pointer-events-none",
				)}
			>
				<Image
					src={sticker.src}
					alt={sticker.alt}
					width={sticker.width}
					height={sticker.height}
					className={imageClass}
					priority
					draggable={false}
				/>
			</motion.div>
		</motion.div>
	);
}

export default function StickerStack() {
	const containerRef = useRef(null);
	const reducedMotion = useReducedMotion();
	const isMobile = useIsMobile();
	const { setIsStackOpen } = useStickerStackNav();
	const [cornersReady, setCornersReady] = useState(!!reducedMotion);
	const [textInteractive, setTextInteractive] = useState(!!reducedMotion);
	const [scrollIndicatorReady, setScrollIndicatorReady] = useState(false);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const animationProgress = useTransform(
		scrollYProgress,
		[0, ANIMATION_END, 1],
		reducedMotion ? [1, 1, 1] : [0, 1, 1],
	);

	useMotionValueEvent(animationProgress, "change", (latest) => {
		const isOpen = latest >= CORNER_THRESHOLD;
		setCornersReady(isOpen);
		setTextInteractive(latest >= 0.55);
		setIsStackOpen(isOpen);
	});

	useEffect(() => {
		if (reducedMotion) {
			setIsStackOpen(true);
		}

		return () => setIsStackOpen(false);
	}, [reducedMotion, setIsStackOpen]);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (reducedMotion) return;

		const timer = setTimeout(() => {
			setScrollIndicatorReady(true);
		}, SCROLL_INDICATOR_DELAY_MS);

		return () => clearTimeout(timer);
	}, [reducedMotion]);

	const showScrollIndicator = scrollIndicatorReady && !reducedMotion;

	const textOpacity = useTransform(
		animationProgress,
		[0.55, 0.85],
		reducedMotion ? [1, 1] : [0, 1],
	);
	const textScale = useTransform(
		animationProgress,
		[0.55, 0.85],
		reducedMotion ? [1, 1] : [0.5, 1],
	);

	return (
		<div
			ref={containerRef}
			className="relative w-full"
			style={{ height: SCROLL_HEIGHT }}
		>
			<div className="sticky top-0 h-svh w-full overflow-visible">
				<motion.div
					className="pointer-events-none absolute inset-0 z-20 flex origin-center items-center justify-center px-8 sm:px-12 md:px-36 py-12"
					style={{ opacity: textOpacity, scale: textScale }}
				>
					<div className="flex max-w-md sm:max-w-lg flex-col items-center text-center">
						<h1 className="w-full">
							<span
								role="img"
								aria-label="Minh Nguyen"
								className="mx-auto block aspect-[514/79] w-full max-w-[240px] bg-primary-blue sm:max-w-[320px] md:max-w-[380px] [mask-image:url(/MyName.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/MyName.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
							/>
						</h1>
						<p className="mt-4 sm:mt-6 leading-relaxed text-black text-base sm:text-base md:text-xl font-light">
							is a designer / creative technologist who works across design,
							code, and AI to bring ideas to life.
						</p>
						{/* <Link
							href="/about"
							className={cn(
								"mt-4 sm:mt-6 inline-flex items-center gap-1 leading-relaxed text-neutral-400 text-base sm:text-base md:text-base font-light underline underline-offset-4 decoration-transparent transition-[color,text-decoration-color] duration-300 ease-in-out hover:text-primary-blue hover:decoration-primary-blue",
								textInteractive ? "pointer-events-auto" : "pointer-events-none",
							)}
						>
							More
						</Link> */}
					</div>
				</motion.div>

				<div className="pointer-events-none relative z-10 h-full w-full overflow-visible">
					{stickers.map((sticker) => (
						<AnimatedSticker
							key={sticker.src}
							sticker={sticker}
							animationProgress={animationProgress}
							reducedMotion={reducedMotion}
							cornersReady={cornersReady}
							isMobile={isMobile}
						/>
					))}
				</div>

				<motion.div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-1 text-gray-400"
					initial={{ opacity: 0, y: 12 }}
					animate={
						showScrollIndicator ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
					}
					transition={{
						duration: showScrollIndicator ? SCROLL_INDICATOR_ENTER_MS : 0.25,
						ease: showScrollIndicator
							? SCROLL_INDICATOR_EASE_OUT
							: [0.455, 0.03, 0.515, 0.955],
					}}
				>
					<span className="text-xs font-light uppercase tracking-[0.2em]">
						Scroll
					</span>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
						animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
						transition={
							reducedMotion
								? undefined
								: {
										duration: 1.4,
										repeat: Infinity,
										ease: [0.455, 0.03, 0.515, 0.955],
									}
						}
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M6 9l6 6l6 -6" />
					</motion.svg>
				</motion.div>
			</div>
		</div>
	);
}
