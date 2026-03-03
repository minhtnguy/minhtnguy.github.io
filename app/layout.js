import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import "./globals.css";
import ConditionalFooter from "./components/ConditionalFooter";

export const metadata = {
	title: "Minh Nguyen",
	description: "Minh Nguyen's portfolio",
	metadataBase: new URL("https://minhtnguyen.me"),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body className="pb-24">
				{/* Main content sits on top (z-index 2) so it reveals the footer as you scroll */}
				<main className="relative z-[2] min-h-screen rounded-b-2xl bg-white">
					{children}
				</main>
				<ConditionalFooter />
			</body>
		</html>
	);
}
