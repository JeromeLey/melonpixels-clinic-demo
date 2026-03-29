'use client'

import { siteConfig, TALLY_FORM_URL } from '@/config/site'

interface HeroProps {
  headline?: string
  subheadline?: string
  primaryCta?: string
  secondaryCta?: string
  label?: string
}

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  label,
}: HeroProps) {
  const config = siteConfig.hero
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
    <section className="bg-gradient-to-br from-melon-900 via-gray-900 to-melon-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-melon-100 font-medium mb-4">{label || config.label || business.name}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {headline || config.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            {subheadline || config.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={TALLY_FORM_URL}
              onClick={() => trackCTA('Hero - Primary CTA')}
              className="inline-flex items-center justify-center px-8 py-4 bg-melon-800 hover:bg-melon-700 text-white font-semibold rounded-lg transition-colors"
            >
              {primaryCta || config.primaryCta}
            </a>
            {secondaryCta || config.secondaryCta ? (
              <a
                href="#services"
                onClick={() => trackCTA('Hero - Secondary CTA')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-400 hover:border-white text-white font-semibold rounded-lg transition-colors"
              >
                {secondaryCta || config.secondaryCta}
              </a>
            ) : null}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4">Serving {business.location}</p>
          <div className="flex flex-wrap gap-8 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-melon-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Mobile-first design
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-melon-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Fast turnaround
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-melon-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Philippine-based team
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}