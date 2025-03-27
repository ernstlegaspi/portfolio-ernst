import "./globals.css"

export const metadata = {
	title: "Ernst Legaspi - Portfolio",
	description: "My start from scratch 3D portfolio!"
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
			</body>
		</html>
	)
}
