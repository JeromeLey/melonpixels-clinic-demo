import { siteConfig } from '@/config/site'

interface SolutionProps {
  label?: string
  headline?: string
  subheadline?: string
  features?: { icon: string; title: string; description: string }[]
}

export default function Solution({
  label,
  headline,
  subheadline,
  features,
}: SolutionProps) {
  const config = siteConfig.solution

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-melon-700 font-semibold mb-4">{label || config.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {headline || config.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subheadline || config.subheadline}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(features || config.features).map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}