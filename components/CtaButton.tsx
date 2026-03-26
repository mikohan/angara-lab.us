import Link from "next/link"
export function CtaButton() {
  return (
    <button
      className="btn-animation rounded-3xl px-4 py-2 text-xs outline outline-btn-color"
      title="Appy button"
    >
      <Link href="/get-started">Get Started</Link>
    </button>
  )
}
