export const metadata = {
	title: "About",
	description: "About Minh Nguyen",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
