import { siteConfig } from '@/config/site'

interface RetainerCardProps {
  name: string
  price: string
  unit: string
  description: string
  features: string[]
}

function RetainerCard({ name, price, unit, description, features }: RetainerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-dark-900">Php {price}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface RetainersProps {
  title?: string
  subtitle?: string
}

export default function Retainers({
  title = 'Monthly Support',
  subtitle = 'Keep your digital presence growing with our maintenance and growth retainers.',
}: RetainersProps) {
  const retainers = siteConfig.retainers

  if (!retainers || retainers.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-4">Monthly Retainers</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {retainers.map((retainer) => (
            <RetainerCard
              key={retainer.id}
              name={retainer.name}
              price={retainer.price}
              unit={retainer.unit}
              description={retainer.description}
              features={retainer.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
