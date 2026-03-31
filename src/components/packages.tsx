import PricingCard from './pricing-card'
import { siteConfig } from '@/config/site'

interface PackagesProps {
  title?: string
  subtitle?: string
}

export default function Packages({
  title = 'Choose Your Package',
  subtitle = 'Fixed-scope delivery with transparent starting prices. Final quote confirmed after intake.',
}: PackagesProps) {
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold mb-4">Website Packages</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              highlighted={pkg.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  )
}