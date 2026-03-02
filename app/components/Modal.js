"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const overlayTransition = { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] };
const panelTransition = { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] };

/**
 * Reusable modal: overlay + panel, close on Escape or overlay click.
 * @param {boolean} open
 * @param {() => void} onClose
 * @param {React.ReactNode} children
 * @param {string} [title] - Optional title shown in the header
 * @param {string} [className] - Extra class for the panel
 */
export default function Modal({ open, onClose, children, title, className }) {
	const handleEscape = useCallback(
		(e) => {
			if (e.key === "Escape") onClose();
		},
		[onClose],
	);

	useEffect(() => {
		if (!open) return;
		document.addEventListener("keydown", handleEscape);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [open, handleEscape]);

	const content = (
		<AnimatePresence>
			{open && (
				<motion.div
					key="modal"
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					aria-modal="true"
					role="dialog"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={overlayTransition}
				>
					{/* Overlay */}
					<motion.button
						type="button"
						className="absolute inset-0 bg-black/50"
						onClick={onClose}
						aria-label="Close modal"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={overlayTransition}
					/>
					{/* Panel */}
					<motion.div
						className={cn(
							"relative z-10 w-full max-w-2xl max-h-[90vh] overflow-auto scrollbar-hide rounded-lg bg-[#FFFFFC] shadow-xl border border-[#E2E2E2] flex flex-col",
							className,
						)}
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.96 }}
						transition={panelTransition}
					>
						{(title || onClose) && (
							<div className="flex items-center justify-between shrink-0 border-b border-[#E2E2E2] px-4 py-3">
								{title && (
									<h2 className="text-base font-medium text-primary-black">
										{title}
									</h2>
								)}
								<div className={title ? "ml-auto" : "ml-auto"}>
									<button
										type="button"
										onClick={onClose}
										className="text-[#686868] hover:text-primary-black p-1 rounded transition-colors"
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
									</button>
								</div>
							</div>
						)}
						<div className="p-4 prose prose-sm text-primary-black">
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	if (typeof document === "undefined") return null;
	return createPortal(content, document.body);
}
