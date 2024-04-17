import { ModeToggle } from "@/components/mode-toggle"

export default function Header({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-8">
      <a href="/" className="text-xl font-bold">
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
