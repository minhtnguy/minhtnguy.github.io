import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
	title: "Minh Nguyen",
	description: "Minh Nguyen's portfolio",
	metadataBase: new URL("https://minhtnguyen.me"),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body>
				<main className="relative z-[2] min-h-screen bg-white">
					{children}
				</main>
				<Analytics />
			</body>
		</html>
	);
}
