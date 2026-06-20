"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

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

function getMobileTop(top) {
	const value = parseFloat(top);

	if (value >= 60) {
		return `${Math.round(value - 17)}%`;
	}

	if (value >= 30) {
		return `${Math.round(value + 4)}%`;
	}

	return top;
}

function getStickerPosition(sticker, isMobile) {
	if (!isMobile) {
		return { left: sticker.left, top: sticker.top };
	}

	return {
		left: sticker.mobileLeft ?? sticker.left,
		top: sticker.mobileTop ?? getMobileTop(sticker.top),
	};
}

const stickers = [
	{
		src: "/images/stickers/coffee.png",
		alt: "Coffee sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[72px] sm:w-[140px]",
		left: "34%",
		top: "70%",
		rotate: -14,
		zIndex: 1,
	},
	{
		src: "/images/stickers/fortune.png",
		alt: "Fortune cookie sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[80px] sm:w-[225px]",
		left: "38%",
		top: "3%",
		rotate: -6,
		zIndex: 3,
	},
	{
		src: "/images/stickers/LiveFromNY.png",
		alt: "Live From New York sticker",
		width: 512,
		height: 323,
		sizeClass: "w-[112px] sm:w-[200px]",
		left: "18%",
		top: "70%",
		rotate: 4,
		zIndex: 5,
	},
	{
		src: "/images/stickers/jb.png",
		alt: "JB sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[80px] sm:w-[175px]",
		left: "77%",
		top: "13%",
		rotate: 5,
		zIndex: 4,
	},
	{
		src: "/images/stickers/Hello.png",
		alt: "Hello my name is Minh sticker",
		width: 900,
		height: 671,
		sizeClass: "w-[122px] sm:w-[200px]",
		left: "81%",
		top: "65%",
		rotate: -7,
		zIndex: 6,
	},
	{
		src: "/images/stickers/Basquiat.png",
		alt: "Jean-Michel Basquiat sticker",
		width: 500,
		height: 600,
		sizeClass: "w-[70px] sm:w-[150px]",
		left: "69%",
		top: "66%",
		rotate: 8,
		zIndex: 7,
	},
	{
		src: "/images/stickers/Notion.png",
		alt: "Notion sticker",
		width: 800,
		height: 800,
		sizeClass: "w-[98px] sm:w-[150px]",
		left: "53%",
		top: "0%",
		rotate: 4,
		zIndex: 4,
	},
	{
		src: "/images/stickers/bad-bunny.png",
		alt: "Bad Bunny sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[91px] sm:w-[250px]",
		left: "3%",
		top: "20%",
		rotate: -5,
		zIndex: 5,
	},
	{
		src: "/images/stickers/2.png",
		alt: "Two dollar bill sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[77px] sm:w-[140px]",
		left: "45%",
		top: "72%",
		rotate: -8,
		zIndex: 3,
	},
	{
		src: "/images/stickers/ipod.png",
		alt: "iPod sticker",
		width: 512,
		height: 768,
		sizeClass: "w-[70px] sm:w-[150px]",
		left: "29%",
		top: "16%",
		rotate: -12,
		zIndex: 4,
	},
	{
		src: "/images/stickers/viewmaster.png",
		alt: "View-Master sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[94px] sm:w-[165px]",
		left: "56%",
		top: "65%",
		rotate: 5,
		zIndex: 4,
	},
	{
		src: "/images/stickers/rubix-cube.png",
		alt: "Rubik's cube sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[77px] sm:w-[150px]",
		left: "51%",
		top: "34%",
		rotate: 14,
		zIndex: 3,
	},
	{
		src: "/images/stickers/airpods.png",
		alt: "Airpod sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[77px] sm:w-[130px]",
		left: "21%",
		top: "40%",
		rotate: -9,
		zIndex: 3,
	},
	{
		src: "/images/stickers/wallet.png",
		alt: "Wallet sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[84px] sm:w-[150px]",
		left: "40%",
		top: "22%",
		rotate: 4,
		zIndex: 2,
	},
	{
		src: "/images/stickers/froyo.png",
		alt: "Frozen yogurt sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[80px] sm:w-[175px]",
		left: "62%",
		top: "23%",
		rotate: 10,
		zIndex: 3,
	},
	{
		src: "/images/stickers/arduino.png",
		alt: "Arduino sticker",
		width: 512,
		height: 512,
		sizeClass: "w-[72px] sm:w-[150px]",
		left: "65%",
		top: "6%",
		rotate: -3,
		zIndex: 2,
	},
	{
		src: "/images/stickers/mirror.png",
		alt: "Mirror sticker",
		width: 512,
		height: 640,
		sizeClass: "w-[102px] sm:w-[185px]",
		left: "16%",
		top: "4%",
		rotate: -11,
		zIndex: 10,
	},
];

function DraggableSticker({
	sticker,
	containerRef,
	reducedMotion,
	zIndex,
	onBringToFront,
	isMobile,
}) {
	const position = getStickerPosition(sticker, isMobile);

	return (
		<motion.div
			className="absolute touch-none"
			style={{
				left: position.left,
				top: position.top,
				rotate: sticker.rotate,
				zIndex,
			}}
			drag={!reducedMotion}
			dragConstraints={containerRef}
			dragElastic={0.08}
			dragMomentum={false}
			onPointerDown={() => onBringToFront(sticker.src)}
			onDragStart={() => onBringToFront(sticker.src)}
			whileDrag={
				reducedMotion
					? undefined
					: {
							scale: 1.06,
							cursor: "grabbing",
						}
			}
			whileHover={
				reducedMotion
					? undefined
					: {
							scale: 1.04,
							rotate: sticker.rotate + 2,
						}
			}
			transition={{ type: "spring", stiffness: 420, damping: 28 }}
		>
			<div
				className={cn(
					"relative origin-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.14)]",
					reducedMotion
						? "cursor-default"
						: "cursor-grab active:cursor-grabbing",
				)}
			>
				<Image
					src={sticker.src}
					alt={sticker.alt}
					width={sticker.width}
					height={sticker.height}
					className={cn(sticker.sizeClass, "h-auto select-none")}
					draggable={false}
				/>
			</div>
		</motion.div>
	);
}

export default function AboutStickerWall({ className }) {
	const containerRef = useRef(null);
	const frontZIndexRef = useRef(50);
	const [frontZIndexes, setFrontZIndexes] = useState({});
	const reducedMotion = useReducedMotion();
	const isMobile = useIsMobile();

	const bringToFront = (src) => {
		frontZIndexRef.current += 1;
		setFrontZIndexes((prev) => ({
			...prev,
			[src]: frontZIndexRef.current,
		}));
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative w-full min-h-[320px] sm:min-h-[480px]",
				className,
			)}
			aria-hidden={false}
		>
			{stickers.map((sticker) => (
				<DraggableSticker
					key={sticker.src}
					sticker={sticker}
					containerRef={containerRef}
					reducedMotion={reducedMotion}
					zIndex={frontZIndexes[sticker.src] ?? sticker.zIndex}
					onBringToFront={bringToFront}
					isMobile={isMobile}
				/>
			))}
		</div>
	);
}
