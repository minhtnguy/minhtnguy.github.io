import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Minh Nguyen",
	description: "Minh Nguyen's portfolio",
	metadataBase: new URL("https://minhtnguyen.me"),
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body>{children}</body>
		</html>
	);
}
