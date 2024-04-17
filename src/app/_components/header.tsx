import { ModeToggle } from "@/components/mode-toggle"

export default function Header({
	children
}: Readonly<{ children?: React.ReactNode }>) {
	return (
		<header className="flex items-center justify-between w-full max-w-4xl px-4 py-8 mx-auto">
			<a href="/" className="font-bold text-xl">
				Next.js
			</a>
			<nav>
				<a href="/docs">Docs</a>
				<a href="/examples">Examples</a>
				<a href="/learn">Learn</a>
				<a href="/showcase">Showcase</a>
				<a href="/blog">Blog</a>
				<a href="/community">Community</a>
				<a href="/commerce">Commerce</a>
			</nav>
			<div>
				<ModeToggle />
			</div>
			{children}
		</header>
	)
}
