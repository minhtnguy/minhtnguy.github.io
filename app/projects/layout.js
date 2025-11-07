import Link from "next/link";
import ViewTransition from "@/app/components/ViewTransition";
import AllProjects from "@/app/components/AllProjects";
import LogoLink from "@/app/components/LogoLink";
import Nav from "@/app/components/Nav";

export default function Layout({ children }) {
	return (
		<ViewTransition>
			<Nav />
			<section className="max-w-2xl mx-auto px-8 my-10">
				<div className="prose prose-lg">{children}</div>
				<AllProjects />
			</section>
		</ViewTransition>
	);
}
