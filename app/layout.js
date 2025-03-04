"use client";

import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";
import "./globals.css";
import Clarity from "@microsoft/clarity";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import ClarityAnalytics from "./components/ClarityAnalytics";

export const metadata = {
	title: "Minh Nguyen",
	description: "Minh Nguyen's portfolio",
	metadataBase: new URL("https://minhtnguyen.me"),
};

export default function RootLayout({ children }) {
	useEffect(() => {
		Clarity.init("qiq5nhksuj");
	}, []);
	return (
		<html lang="en" className={GeistSans.className}>
			<body>{children}</body>
		</html>
	);
}
