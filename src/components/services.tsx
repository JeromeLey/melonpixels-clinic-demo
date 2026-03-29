import { siteConfig } from '@/config/site'

interface ServicesProps {
  title?: string
  subtitle?: string
}

export default function Services({
  title = 'Our Services',
  subtitle = 'Comprehensive dental care services designed to meet your needs',
}: ServicesProps) {
  const services = siteConfig.services || []

  return (
    <section id="services" className="py-16 md:py-24 bg-melon-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-melon-700 font-semibold mb-4">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-melon-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-melon-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}