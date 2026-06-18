import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ConditionalFooter from "./components/ConditionalFooter";
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
				<main className="relative z-[2] min-h-screen bg-white shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)]">
					{children}
				</main>
				<ConditionalFooter />
				<Analytics />
			</body>
		</html>
	);
}
