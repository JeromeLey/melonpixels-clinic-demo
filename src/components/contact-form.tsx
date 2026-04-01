'use client'

import { TALLY_FORM_URL } from '@/config/site'

interface ContactFormProps {
  title?: string
  subtitle?: string
}

export default function ContactForm({
  title = 'Get In Touch',
  subtitle = "Ready to transform your clinic's online presence? Fill out the form below and we'll be in touch within 24 hours.",
}: ContactFormProps) {
  const tallyEmbedUrl = `${TALLY_FORM_URL}?embed=true&alignLeft=1&hideTitle=1&dynamicHeight=1`

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <iframe
            src={tallyEmbedUrl}
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="rounded-lg"
            style={{ borderRadius: '8px' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
