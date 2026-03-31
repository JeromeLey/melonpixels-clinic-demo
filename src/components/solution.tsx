import { siteConfig } from '@/config/site'
import { Search, Smartphone, Calendar, Star, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Smartphone,
  Calendar,
  Star,
}

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
          <p className="text-primary-700 font-semibold mb-4">{label || config.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {headline || config.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subheadline || config.subheadline}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(features || config.features).map((feature, index) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100">
                  {IconComponent && <IconComponent size={24} strokeWidth={1.5} className="text-primary-600" />}
                </span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}