"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Drawer } from "vaul";
import { playgroundDescriptions } from "./descriptions";

const PLAYGROUND_IMAGES = [
	{
		src: "/images/playground/ai-led-panels.jpg",
		width: 210,
		height: 158,
		slug: "ai-led-panels",
		title: "AI LEDs",
	},
	{
		src: "/images/playground/balls.png",
		width: 150,
		height: 150,
		slug: "hand-tracking",
		title: "Hand Tracking Experiments",
	},
	{
		src: "/images/playground/crazy-object-detection.png",
		width: 180,
		height: 135,
		slug: "crazy-object-detection",
	},
	{
		src: "/images/playground/dots.png",
		width: 135,
		height: 180,
		slug: "hand-tracking",
	},
	{
		src: "/images/playground/ephemeral-observations.png",
		width: 165,
		height: 165,
		slug: "ephemeral-observations",
	},
	{
		src: "/images/playground/image-carousel.png",
		width: 195,
		height: 131,
		slug: "image-carousel",
	},
	{
		src: "/images/playground/inspo-shuffle.png",
		width: 143,
		height: 188,
		slug: "inspo-shuffle",
	},
	{
		src: "/images/playground/stat-station.png",
		width: 173,
		height: 143,
		slug: "stat-station",
	},
	{
		src: "/images/playground/tide-light.jpeg",
		width: 158,
		height: 210,
		slug: "tide-light",
	},
	{
		src: "/images/playground/grid.png",
		width: 135,
		height: 180,
		slug: "hand-tracking",
		title: "Hand Tracking Experiments",
	},
];

// Virtual space: each cell is CELL_SIZE × CELL_SIZE; tile size fits all images
const CELL_SIZE = 260;
const TILE_SIZE = Math.ceil(Math.sqrt(PLAYGROUND_IMAGES.length));
const CULL_MARGIN = 2; // extra rows/cols to render outside viewport

export default function Playground() {
	const viewportRef = useRef(null);
	const [viewportSize, setViewportSize] = useState({ w: 800, h: 600 });
	const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 1 });
	const [isPanning, setIsPanning] = useState(false);
	const panStartRef = useRef({
		clientX: 0,
		clientY: 0,
		cameraX: 0,
		cameraY: 0,
	});
	const hasInitialCamera = useRef(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const [modalSlug, setModalSlug] = useState(null);

	// Measure viewport and center hint on first real size
	useEffect(() => {
		const el = viewportRef.current;
		if (!el) return;
		const zoom = 1.5;
		const hintCenterX = 24 + (CELL_SIZE - 48) / 2;
		const hintCenterY = 24 + (CELL_SIZE - 48) / 2;
		const update = () => {
			if (!el) return;
			const w = el.clientWidth;
			const h = el.clientHeight;
			setViewportSize({ w, h });
			if (w > 0 && h > 0 && !hasInitialCamera.current) {
				hasInitialCamera.current = true;
				setCamera({
					x: hintCenterX - w / (2 * zoom),
					y: hintCenterY - h / (2 * zoom),
					zoom,
				});
				setIsInitialized(true);
			}
		};
		update();
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	// Pan: map screen delta to virtual delta (divide by zoom). Don't start pan when clicking an image cell.
	const handlePointerDown = useCallback(
		(e) => {
			if (e.target.closest("[data-playground-image-cell]")) return;
			e.preventDefault();
			setIsPanning(true);
			panStartRef.current = {
				clientX: e.clientX,
				clientY: e.clientY,
				cameraX: camera.x,
				cameraY: camera.y,
			};
		},
		[camera.x, camera.y],
	);

	const handlePointerMove = useCallback(
		(e) => {
			if (!isPanning) return;
			const { clientX, clientY, cameraX, cameraY } = panStartRef.current;
			const dx = (e.clientX - clientX) / camera.zoom;
			const dy = (e.clientY - clientY) / camera.zoom;
			setCamera((c) => ({ ...c, x: cameraX - dx, y: cameraY - dy }));
		},
		[isPanning, camera.zoom],
	);

	const handlePointerUp = useCallback(() => {
		setIsPanning(false);
	}, []);

	// Viewport in virtual coordinates (what we need to render)
	const viewportVirtual = {
		left: camera.x,
		top: camera.y,
		right: camera.x + viewportSize.w / camera.zoom,
		bottom: camera.y + viewportSize.h / camera.zoom,
	};

	// Which cell indices (in infinite grid) intersect the viewport + margin?
	const colMin = Math.floor(
		(viewportVirtual.left - CULL_MARGIN * CELL_SIZE) / CELL_SIZE,
	);
	const colMax = Math.ceil(
		(viewportVirtual.right + CULL_MARGIN * CELL_SIZE) / CELL_SIZE,
	);
	const rowMin = Math.floor(
		(viewportVirtual.top - CULL_MARGIN * CELL_SIZE) / CELL_SIZE,
	);
	const rowMax = Math.ceil(
		(viewportVirtual.bottom + CULL_MARGIN * CELL_SIZE) / CELL_SIZE,
	);

	// Visible cells: only render (col, row) in range; image index from repeating 3×3
	const visibleCells = [];
	for (let row = rowMin; row < rowMax; row++) {
		for (let col = colMin; col < colMax; col++) {
			const imageIndex =
				(((row % TILE_SIZE) + TILE_SIZE) % TILE_SIZE) * TILE_SIZE +
				(((col % TILE_SIZE) + TILE_SIZE) % TILE_SIZE);
			visibleCells.push({
				key: `${row}-${col}`,
				vx: col * CELL_SIZE,
				vy: row * CELL_SIZE,
				imageIndex: imageIndex % PLAYGROUND_IMAGES.length,
			});
		}
	}

	return (
		<motion.div
			className="h-screen w-full overflow-hidden"
			initial={{ scale: 0.92, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			}}
			style={{ transformOrigin: "center center" }}
		>
			<Link
				href="/"
				className="fixed top-8 left-8 z-40 inline-flex items-center gap-1 rounded-full bg-primary-blue/80 text-white px-3 py-1.5 text-xs font-medium border border-white/10 backdrop-blur hover:bg-primary-blue transition-colors"
				aria-label="Back"
			>
				<span aria-hidden="true">←</span>
				<span>Back</span>
			</Link>
			<div
				ref={viewportRef}
				className="relative h-full w-full dot-grid-bg overflow-hidden touch-none select-none"
				style={{
					cursor: isPanning ? "grabbing" : "grab",
				}}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerLeave={handlePointerUp}
			>
				{/* Virtual world: only mount after initial camera is set to avoid layout flash */}
				{isInitialized && (
					<div
						className="absolute top-0 left-0 origin-top-left"
						style={{
							width: 0,
							height: 0,
							transform: `translate(${-camera.x * camera.zoom}px, ${-camera.y * camera.zoom}px) scale(${camera.zoom})`,
							transformOrigin: "0 0",
						}}
					>
						{/* Visible cells only (viewport culling) */}
						{visibleCells.map(({ key, vx, vy, imageIndex }) => {
							const isOrigin = vx === 0 && vy === 0;
							const item = PLAYGROUND_IMAGES[imageIndex];
							const DescriptionComponent =
								item.slug && playgroundDescriptions[item.slug];
							return (
								<div
									key={key}
									className="absolute shrink-0 border border-transparent hover:border-[#d4d4d4] transition-colors ease-in-out flex items-center justify-center p-5 overflow-hidden"
									style={{
										left: vx + 24,
										top: vy + 24,
										width: CELL_SIZE - 48,
										height: CELL_SIZE - 48,
									}}
								>
									{!isOrigin && (
										<button
											type="button"
											data-playground-image-cell
											className="flex w-full h-full min-w-0 min-h-0 max-w-full max-h-full items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded"
											onClick={() =>
												DescriptionComponent && setModalSlug(item.slug)
											}
										>
											<Image
												src={item.src}
												alt=""
												width={item.width}
												height={item.height}
												className="object-contain max-w-full max-h-full w-full h-full pointer-events-none"
											/>
										</button>
									)}
								</div>
							);
						})}
						{/* Hint cell: fixed at grid origin (0,0), rendered on top so it's not covered */}
						<div
							className="absolute shrink-0 flex items-center justify-center z-10"
							style={{
								left: 24,
								top: 24,
								width: CELL_SIZE - 48,
								height: CELL_SIZE - 48,
							}}
						>
							<span className="text-[#b1b1b1] text-xs font-normal">
								[drag to explore]
							</span>
						</div>
					</div>
				)}
			</div>
			<Drawer.Root
				open={!!modalSlug}
				onOpenChange={(open) => {
					if (!open) setModalSlug(null);
				}}
			>
				<Drawer.Portal>
					<Drawer.Overlay
						className="fixed inset-0 bg-black/50 cursor-pointer"
						onClick={() => setModalSlug(null)}
					/>
					<Drawer.Content
						className="fixed bottom-0 left-0 right-0 outline-none h-[95vh] flex justify-center cursor-pointer"
						onClick={(e) => {
							if (!e.target.closest("[data-drawer-panel]")) setModalSlug(null);
						}}
					>
						<div
							data-drawer-panel
							className="w-full max-w-4xl h-[95vh] flex flex-col bg-[#FFFFFC] border border-[#E2E2E2] border-b-0 rounded-t-[10px] cursor-default"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center justify-between shrink-0 border-b border-[#E2E2E2] px-4 py-3">
								{modalSlug && (
									<Drawer.Title className="text-base font-medium text-primary-black">
										{PLAYGROUND_IMAGES.find((i) => i.slug === modalSlug)
											?.title ??
											modalSlug
												.replace(/-/g, " ")
												.replace(/\b\w/g, (c) => c.toUpperCase())}
									</Drawer.Title>
								)}
								<Drawer.Close
									className="text-[#686868] hover:text-primary-blue p-1 rounded transition-colors ml-auto"
									aria-label="Close"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M18 6 6 18M6 6l12 12" />
									</svg>
								</Drawer.Close>
							</div>
							<div className="overflow-y-auto flex-1 px-16 py-8 prose prose-sm text-primary-black scrollbar-hide">
								{modalSlug &&
									playgroundDescriptions[modalSlug] &&
									(() => {
										const C = playgroundDescriptions[modalSlug];
										return <C />;
									})()}
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</motion.div>
	);
}
