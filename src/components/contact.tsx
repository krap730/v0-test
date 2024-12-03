import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">お問い合わせ</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                お名前
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                メールアドレス
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                メッセージ
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              送信
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

