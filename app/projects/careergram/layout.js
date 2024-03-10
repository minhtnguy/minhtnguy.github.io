import NavBar from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Back from "@/app/components/Back";
import Link from "next/link";

export const metadata = {
	title: "Careergram",
	description: "Case study for Careergram",
};
export default function Layout({
	children, // will be a page or nested layout
}) {
	return (
		<section className="bg-[#FAFCFF]">
			<NavBar isBlue={true} />
			<div className="lg:mx-96 md:mx-48 mx-10">{children}</div>
			<Footer />
		</section>
	);
}
