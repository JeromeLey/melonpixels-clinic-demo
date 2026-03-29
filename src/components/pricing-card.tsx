'use client'

import { TALLY_FORM_URL } from '@/config/site'

interface PricingCardProps {
  name: string
  price: string
  unit?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  onCtaClick?: (label: string) => void
}

function defaultTrackCta(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'CTA',
      event_label: label,
    })
  }
}

export default function PricingCard({
  name,
  price,
  unit = '',
  description,
  features,
  highlighted = false,
  ctaText = 'Inquire Now',
  onCtaClick = defaultTrackCta,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-8 border-2 transition-all ${
        highlighted
          ? 'border-melon-800 ring-4 ring-melon-100'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {highlighted && (
        <span className="inline-block px-3 py-1 bg-melon-100 text-melon-800 text-sm font-medium rounded-full mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">Php {price}</span>
        <span className="text-gray-500">{unit ? ` ${unit}` : ' starting'}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-melon-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        <a
          href={TALLY_FORM_URL}
          onClick={() => onCtaClick(`Package - ${name} - Inquire`)}
          className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
            highlighted
              ? 'bg-melon-800 hover:bg-melon-700 text-white'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}