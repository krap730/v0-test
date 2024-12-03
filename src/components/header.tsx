import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DigiPulse
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            サービス
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            会社概要
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            お問い合わせ
          </Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          無料相談
        </Button>
      </div>
    </header>
  )
}

