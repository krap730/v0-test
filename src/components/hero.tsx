import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 opacity-10 bg-[url('/noise.png')] bg-repeat"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          デジタルの力で、<br />ビジネスを加速する
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          最先端のマーケティングソリューションで、あなたのブランドを次のレベルへ
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
          無料戦略相談を予約
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

