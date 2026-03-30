'use client'

import { siteConfig } from '@/config/site'

interface FooterCtaProps {
  headline?: string
  subheadline?: string
  primaryCta?: string
}

export default function FooterCta({
  headline,
  subheadline,
  primaryCta,
}: FooterCtaProps) {
  const config = siteConfig.footer
  const business = siteConfig.business

  function trackCTA(label: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: label,
      })
    }
  }

  return (
    <footer className="bg-melon-900 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {headline || config.ctaHeadline}
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subheadline || config.ctaSubheadline}
        </p>
        <a
          href="#contact"
          onClick={() => trackCTA('Footer CTA')}
          className="inline-flex items-center justify-center px-10 py-4 bg-melon-800 hover:bg-melon-700 text-white font-semibold rounded-lg transition-colors text-lg"
        >
          {primaryCta || config.primaryCta}
        </a>
        <div className="mt-12 pt-8 border-t border-melon-800">
          <p className="text-gray-300 text-sm mb-4">{business.name}</p>
          <p className="text-gray-400 text-sm">{business.location}</p>
          {business.phone && <p className="text-gray-400 text-sm">{business.phone}</p>}
          {business.email && <p className="text-gray-400 text-sm">{business.email}</p>}
          <p className="text-gray-500 text-sm mt-8">{config.copyright}</p>
        </div>
      </div>
    </footer>
  )
}