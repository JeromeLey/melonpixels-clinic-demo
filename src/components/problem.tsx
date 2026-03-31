import { siteConfig } from '@/config/site'
import { X } from 'lucide-react'

interface ProblemProps {
  label?: string
  headline?: string
  points?: string[]
}

export default function Problem({
  label,
  headline,
  points,
}: ProblemProps) {
  const config = siteConfig.problem

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold mb-4">{label || config.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {headline || config.headline}
          </h2>
        </div>
        <div className="space-y-6">
          {(points || config.points).map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <X size={18} strokeWidth={2} />
              </span>
              <p className="text-lg text-gray-700 pt-1">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}