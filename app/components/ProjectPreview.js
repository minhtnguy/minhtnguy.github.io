import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectPreview({ project }) {
	return (
		<AnimatePresence mode="wait">
			{project && (
				<motion.div
					key={project.title}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{
						ease: "linear",
						stiffness: 300,
						damping: 30,
						duration: 0.1,
					}}
					className="hidden md:sticky top-0 md:h-screen md:flex md:pl-4 md:justify-center md:items-center drop-shadow-xl"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.1,
						}}
					>
						<Image
							src={project.img}
							width={650}
							height={650}
							alt={project.alt}
							className="transition-opacity duration-200 ease-in-out"
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
