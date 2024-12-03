import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket, BarChart, Megaphone } from 'lucide-react'

export function Services() {
  const services = [
    {
      title: "デジタル戦略",
      description: "包括的なデジタル戦略を立案し、オンライン上でのプレゼンスを最大化します。",
      icon: Rocket
    },
    {
      title: "データ分析",
      description: "高度なデータ分析ツールを使用して、顧客行動を深く理解し、的確な意思決定をサポートします。",
      icon: BarChart
    },
    {
      title: "ソーシャルメディアマーケティング",
      description: "効果的なソーシャルメディア戦略を通じて、ブランドの認知度を向上させ、顧客エンゲージメントを促進します。",
      icon: Megaphone
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

