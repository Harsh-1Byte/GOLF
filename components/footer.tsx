import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 shadow-md p-4 text-center text-gray-300 border-t border-gray-800">
      <p>© 2024 GLOF Prediction System. All rights reserved.</p>
      <div className="mt-2">
        <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mr-4">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mr-4">
          Terms of Service
        </Link>
        <Link href="/support" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
          Support
        </Link>
      </div>
    </footer>
  )
}

