import ViewTransition from "@/app/components/ViewTransition";
import AllProjects from "@/app/components/AllProjects";

export default function Layout({ children }) {
	return (
		<ViewTransition>
			<section className="max-w-2xl mx-auto px-8 mt-14 mb-10 pb-16 md:mt-16 md:pb-24">
				<div className="prose prose-lg">{children}</div>
				<AllProjects />
			</section>
		</ViewTransition>
	);
}
