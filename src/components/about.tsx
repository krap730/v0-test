import Image from 'next/image'

// 画像パス取得用の２行
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export function About() {
  // basePathを指定
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="DigiPulseオフィス"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">DigiPulseについて</h2>
            <p className="text-lg text-gray-700 mb-6">
              DigiPulseは、デジタルマーケティングの最前線で活躍する専門家集団です。
              私たちは、最新のテクノロジーと創造的なアイデアを組み合わせ、
              クライアントのビジネス成長を加速させることに情熱を注いでいます。
            </p>
            <p className="text-lg text-gray-700">
              2015年の設立以来、100社以上のクライアントと共に歩み、
              デジタル領域での成功を実現してきました。
              私たちの使命は、あなたのビジネスを次のレベルへと導くことです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

