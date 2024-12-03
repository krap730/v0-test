import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">DigiPulse</h3>
            <p className="text-gray-400">
              最先端のデジタルマーケティングソリューションを提供し、
              あなたのビジネスを成功へと導きます。
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 mb-2">〒100-0005 東京都千代田区丸の内1-1-1</p>
            <p className="text-gray-400 mb-2">電話: 03-1234-5678</p>
            <p className="text-gray-400">メール: info@digipulse.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 DigiPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

