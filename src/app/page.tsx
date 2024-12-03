import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="w-full">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

