import { siteConfig } from '@/config/site'

interface FaqProps {
  title?: string
}

export default function Faq({
  title = 'Common Questions',
}: FaqProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-melon-700 font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
        </div>
        <div className="space-y-6">
          {siteConfig.faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}