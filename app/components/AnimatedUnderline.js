"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pathVariants = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: {
		pathLength: 1,
		opacity: 1,
		transition: {
			pathLength: { duration: 1.2, ease: "easeInOut" },
			opacity: { duration: 0.6, ease: "easeInOut" },
		},
	},
};

export default function AnimatedUnderline({ children, className }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className={`relative inline-block ${className}`}>
			{children}
			<svg
				className="absolute left-0 bottom-0 -mb-4"
				width="100%"
				height="16"
				viewBox="0 0 267 16"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M113.326 1.98409C100.79 2.48585 88.4015 3.10282 76.3206 3.77733C59.2187 4.7315 42.1235 5.71859 25.1313 7.28146C19.7825 7.775 14.3508 8.08756 9.03546 8.70449C5.69883 9.09109 1.27453 9.64213 0.693901 9.75729C0.390206 9.8231 0.257715 9.9219 0.214903 9.9548C-0.086116 10.1851 -0.0311911 10.4071 0.138717 10.5799C0.206948 10.6539 0.379484 10.8349 0.858439 10.8596C32.8896 12.5459 65.6431 9.2556 97.7131 8.91013C153.328 8.31788 210.629 10.6704 265.802 15.8032C266.284 15.8444 266.752 15.6387 266.819 15.3343C266.899 15.0382 266.551 14.7503 266.07 14.7092C210.803 9.56812 153.408 7.20734 97.6863 7.80782C67.7984 8.12862 37.3206 11.0159 7.39122 10.0288C8.07888 9.94655 8.7532 9.86426 9.36862 9.79023C14.6625 9.1733 20.0715 8.86898 25.3989 8.37544C42.355 6.81256 59.4154 5.82549 76.4946 4.87954C97.6863 3.69504 119.801 2.67505 142.09 2.19796C150.064 2.27199 158.01 2.34606 165.957 2.43654C183.149 2.63396 200.421 3.20976 217.572 3.98297C222.736 4.22151 227.9 4.46826 233.065 4.68213C234.777 4.75616 239.192 4.96999 239.808 4.95354C240.57 4.93709 240.717 4.54229 240.731 4.47649C240.771 4.32842 240.744 4.12277 240.369 3.95003C240.329 3.92536 240.088 3.84305 239.553 3.79369C208.368 0.88181 175.068 0.396573 142.117 1.09575C107.359 0.791404 72.4676 0.659734 37.7982 0.519897C37.3019 0.519897 36.8965 0.766703 36.8925 1.07105C36.8898 1.3754 37.2898 1.62222 37.7861 1.63044C62.8898 1.72915 88.1206 1.8278 113.326 1.98409Z"
					fill="currentColor"
					variants={pathVariants}
					initial="hidden"
					animate={isVisible ? "visible" : "hidden"}
				/>
			</svg>
		</div>
	);
}
