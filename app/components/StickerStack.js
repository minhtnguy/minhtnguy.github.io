"use client";

import Image from "next/image";
import {
	motion,
	useMotionValueEvent,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";

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
		endPosition: { left: "0%", top: "0%", x: "20%", y: "10%" },
		endRotate: -8,
		endScale: 0.65,
		hoverRotate: 6,
	},
	{
		src: "/images/stickers/Notion.png",
		alt: "Notion sticker",
		width: 800,
		height: 800,
		zIndex: "z-30",
		endPosition: { left: "0%", top: "100%", x: "150%", y: "-150%" },
		endRotate: 3,
		endScale: 1.2,
		hoverRotate: -5,
	},
	{
		src: "/images/stickers/Basquiat.png",
		alt: "Jean-Michel Basquiat sticker",
		width: 884,
		height: 900,
		zIndex: "z-20",
		endPosition: { left: "100%", top: "0%", x: "-140%", y: "10%" },
		endRotate: -6,
		endScale: 0.6,
		hoverRotate: 7,
	},
	{
		src: "/images/stickers/LiveFromNY.png",
		alt: "Live From New York sticker",
		width: 512,
		height: 323,
		zIndex: "z-10",
		endPosition: { left: "100%", top: "100%", x: "-150%", y: "-150%" },
		endRotate: 1,
		endScale: 0.95,
		sizeClass:
			"w-auto h-auto max-w-[360px] max-h-[230px] sm:max-w-[460px] sm:max-h-[290px] md:max-w-[560px] md:max-h-[350px] object-contain",
		startScale: 1.5,
		hoverRotate: -4,
	},
];

const SCROLL_HEIGHT = "350vh";
const ANIMATION_END = 0.65;
const CORNER_THRESHOLD = 0.98;

function AnimatedSticker({
	sticker,
	animationProgress,
	reducedMotion,
	cornersReady,
}) {
	const start = { left: "50%", top: "50%", x: "-50%", y: "-50%" };

	const left = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [sticker.endPosition.left, sticker.endPosition.left]
			: [start.left, sticker.endPosition.left],
	);
	const top = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [sticker.endPosition.top, sticker.endPosition.top]
			: [start.top, sticker.endPosition.top],
	);
	const x = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [sticker.endPosition.x, sticker.endPosition.x]
			: [start.x, sticker.endPosition.x],
	);
	const y = useTransform(
		animationProgress,
		[0, 1],
		reducedMotion
			? [sticker.endPosition.y, sticker.endPosition.y]
			: [start.y, sticker.endPosition.y],
	);
	const endScale = sticker.endScale ?? 0.55;
	const startScale = sticker.startScale ?? 1;
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
			className={cn("absolute", sticker.zIndex)}
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
	const [cornersReady, setCornersReady] = useState(!!reducedMotion);

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
		setCornersReady(latest >= CORNER_THRESHOLD);
	});

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
					className="pointer-events-none absolute inset-0 z-0 flex origin-center items-center justify-center px-8 sm:px-12 md:px-36 py-12"
					style={{ opacity: textOpacity, scale: textScale }}
				>
					<div className="flex max-w-sm flex-col items-center text-center">
						<h1
							className={cn(
								"font-medium text-primary-blue",
								FONT_SIZE.heroTitle,
							)}
						>
							Minh Nguyen
						</h1>
						<p
							className={cn(
								"mt-4 leading-relaxed text-black",
								FONT_SIZE.heroBody,
							)}
						>
							is a designer / creative technologist <br /> who works across
							design, code, and AI to bring ideas to life.
						</p>
					</div>
				</motion.div>

				<div className="relative z-10 h-full w-full overflow-visible">
					{stickers.map((sticker) => (
						<AnimatedSticker
							key={sticker.src}
							sticker={sticker}
							animationProgress={animationProgress}
							reducedMotion={reducedMotion}
							cornersReady={cornersReady}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
