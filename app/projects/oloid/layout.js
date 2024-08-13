import NavBar from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Back from "@/app/components/Back";
import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
	title: "Oloid Internship",
};
export default function Layout({ children }) {
	return (
		<section>
			<div className="lg:mx-96 md:mx-48 mx-10">{children}</div>
			<Footer />
		</section>
	);
}
