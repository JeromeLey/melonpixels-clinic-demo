import { siteConfig } from '@/config/site'

interface ProofProps {
  label?: string
  title?: string
  description?: string
}

export default function Proof({
  label,
  title,
  description,
}: ProofProps) {
  const config = siteConfig.proof
  const testimonials = config.testimonials || []
  const logos = config.logos || []

  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold mb-4">{label || config.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title || config.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description || config.description}
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-800 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {logos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold">
                {logo.url ? (
                  <img src={logo.url} alt={logo.name} className="h-8" />
                ) : (
                  logo.name
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}