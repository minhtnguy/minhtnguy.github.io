import Link from "next/link";
import ViewTransition from "@/app/components/ViewTransition";
import AllProjects from "@/app/components/AllProjects";
import LogoLink from "@/app/components/LogoLink";

export default function Layout({ children }) {
	return (
		<ViewTransition>
			<section className="max-w-2xl mx-auto px-8 my-20">
				<LogoLink showText={true} />
				<div className="prose prose-lg">{children}</div>
				<AllProjects />
			</section>
		</ViewTransition>
	);
}
