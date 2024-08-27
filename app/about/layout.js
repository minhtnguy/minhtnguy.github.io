import ViewTransition from "@/app/components/ViewTransition";

export const metadata = {
	title: "About",
	description: "About Minh Nguyen",
};

export default function Layout({ children }) {
	return (
		<ViewTransition>
			<section>
				<div>{children}</div>
			</section>
		</ViewTransition>
	);
}
