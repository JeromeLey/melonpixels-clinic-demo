import { Hero, Problem, Solution, Services, Packages, Proof, Faq, FooterCta } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Packages />
      <Proof />
      <Faq />
      <FooterCta />
    </main>
  )
}