export const TALLY_FORM_URL = 'https://tally.so/r/w95xj7'

export interface SiteConfig {
  business: {
    name: string
    tagline: string
    description: string
    location: string
    phone?: string
    email?: string
  }
  meta: {
    title: string
    description: string
    locale: string
  }
  hero: {
    label?: string
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta?: string
  }
  problem: {
    label?: string
    headline: string
    points: string[]
  }
  solution: {
    label?: string
    headline: string
    subheadline: string
    features: { icon: string; title: string; description: string }[]
  }
  services: {
    id: string
    name: string
    description: string
    features: string[]
  }[]
  packages: {
    id: string
    name: string
    price: string
    description: string
    features: string[]
    highlighted?: boolean
  }[]
  retainers?: {
    id: string
    name: string
    price: string
    unit: string
    description: string
    features: string[]
  }[]
  proof: {
    label?: string
    title: string
    description: string
    testimonials?: { name: string; role: string; quote: string }[]
    logos?: { name: string; url?: string }[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  footer: {
    ctaHeadline: string
    ctaSubheadline: string
    primaryCta: string
    copyright: string
  }
}

export const siteConfig: SiteConfig = {
  business: {
    name: 'Smile Care Dental Clinic',
    tagline: 'Your Trusted Dental Care Partner in Metro Manila',
    description: 'Professional dental services with a personal touch. From routine check-ups to cosmetic dentistry, we make every smile count.',
    location: 'Metro Manila, Philippines',
    phone: '(02) 8123-4567',
    email: 'hello@smilecare.ph',
  },
  meta: {
    title: 'Smile Care Dental Clinic - Metro Manila | Professional Dental Services',
    description: 'Transform your practice with a professional website that brings more patients through your doors. MelonPixels builds high-converting dental clinic websites in the Philippines.',
    locale: 'en_PH',
  },
  hero: {
    label: 'Metro Manila Dental Clinic',
    headline: 'Websites That Bring More Patients to Your Clinic',
    subheadline: 'Stop losing patients to clinics with better websites. We build high-converting, mobile-first clinic websites that show up on Google and turn visitors into appointments.',
    primaryCta: 'Get Your Free Website Consultation',
    secondaryCta: 'See Our Work',
  },
  problem: {
    label: 'The Problem',
    headline: 'Running a Clinic Is Tough When Patients Can\'t Find You Online',
    points: [
      'Your phone is ringing less and less — patients are booking online with competitors who show up first on Google',
      'You\'re spending money on social media but it\'s not bringing real booking inquiries through your door',
      'Your current website looks outdated and patients don\'t trust your clinic before they even walk in',
      'No-shows are killing your schedule efficiency and you have no system to remind patients of their appointments',
    ],
  },
  solution: {
    label: 'How We Help',
    headline: 'A Website That Actually Works for Your Clinic',
    subheadline: 'We\'ve helped dental and medical clinics across the Philippines transform their online presence. More Google visibility. More bookings. Less empty chairs.',
    features: [
      {
        icon: '🔍',
        title: 'Show Up on Google',
        description: 'Local SEO that puts your clinic in front of patients searching for dental services in your area. Average clients see 40% more Google bookings within 60 days.',
      },
      {
        icon: '📱',
        title: 'Mobile-First Design',
        description: '85% of your patients book on their phones. We build websites that look beautiful and work flawlessly on every device.',
      },
      {
        icon: '📅',
        title: 'Easy Online Booking',
        description: 'Integrate appointment booking directly on your website. Reduce no-shows with automated SMS reminders.',
      },
      {
        icon: '⭐',
        title: 'Build Trust Fast',
        description: 'Showcase your services, team, and patient testimonials in a way that makes new patients confident to book their first appointment.',
      },
    ],
  },
  services: [
    {
      id: 'general',
      name: 'General Dentistry',
      description: 'Routine check-ups, cleanings, and preventive care that keep patients coming back.',
      features: [
        'Service page with pricing transparency',
        'Online booking integration',
        'Google Business Profile optimization',
      ],
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers that attract high-value patients.',
      features: [
        'Before/after gallery ready',
        'Treatment comparison pages',
        'Lead capture for consultations',
      ],
    },
    {
      id: 'orthodontics',
      name: 'Orthodontics',
      description: 'Braces and aligners for both kids and adults.',
      features: [
        'FAQ section for common questions',
        'Flexible payment plan information',
        'Age-specific landing pages',
      ],
    },
  ],
  packages: [
    {
      id: 'launch',
      name: 'Launch Site',
      price: '28,000',
      description: 'Perfect for new clinics or practices ready to establish their online presence fast.',
      features: [
        '1 custom landing page',
        'Up to 5 content sections',
        'Mobile-first responsive design',
        'Online booking integration',
        'Basic SEO setup',
        'Fast 5-7 day delivery',
      ],
      highlighted: true,
    },
    {
      id: 'growth',
      name: 'Growth Site',
      price: '55,000',
      description: 'For established clinics ready to dominate their local market.',
      features: [
        'Up to 8 pages',
        'Full service page structure',
        'Local SEO optimization',
        'Google Business Profile setup',
        'Analytics dashboard',
        '2-week delivery',
      ],
    },
    {
      id: 'authority',
      name: 'Authority Site',
      price: '85,000',
      description: 'For clinics that want to be the recognized leader in their area.',
      features: [
        'Up to 15 pages',
        'Blog/news section setup',
        'Advanced SEO structure',
        'AI citation optimization',
        'Launch support & reporting',
        'Strategy consultation included',
      ],
    },
  ],
  retainers: [
    {
      id: 'care',
      name: 'Care Plan',
      price: '4,500',
      unit: '/month',
      description: 'Keep your digital presence running smoothly.',
      features: [
        'Hosting & domain management',
        'Regular updates & patches',
        'Uptime monitoring',
        'Backup management',
      ],
    },
    {
      id: 'seo',
      name: 'SEO & AI Foundations',
      price: '12,000',
      unit: '/month',
      description: 'Stay visible on Google and in AI search results.',
      features: [
        'On-page SEO optimization',
        'Monthly performance report',
        '1 optimized content piece',
        'Answer engine checks',
      ],
    },
    {
      id: 'growth',
      name: 'Growth Engine',
      price: '22,000',
      unit: '/month',
      description: 'Full-scale digital growth for serious clinics.',
      features: [
        'Technical & local SEO',
        'Content planning & publishing',
        'Conversion optimization',
        'AI visibility monitoring',
        'Monthly strategy call',
      ],
    },
  ],
  proof: {
    label: 'Proven Results',
    title: 'What Clinic Owners Say',
    description: 'Real results from dental and medical clinics we\'ve helped grow',
    testimonials: [
      {
        name: 'Dr. Maria Santos',
        role: 'Owner, Santos Dental Studio',
        quote: 'Within 2 months of launching our new website, we saw a 45% increase in new patient inquiries. The online booking system alone has reduced our no-show rate by 30%.',
      },
      {
        name: 'Dr. James Chen',
        role: 'Practice Manager, Bright Smile Clinic',
        quote: 'We were losing ground to newer clinics with flashier websites. MelonPixels not only updated our look — they helped us show up on Google for the first time in years.',
      },
      {
        name: 'Dr. Ana Reyes',
        role: 'Founder, Reyes Family Dentistry',
        quote: 'The investment paid for itself in the first month. Three new patients already mentioned they found us through Google. The ROI is real.',
      },
    ],
  },
  faqs: [
    {
      question: 'How long does it take to build a clinic website?',
      answer: 'Launch Site projects typically ship within 5-7 business days. Growth and Authority sites take 2-4 weeks depending on complexity and content readiness.',
    },
    {
      question: 'Can you integrate online booking with our existing system?',
      answer: 'Yes. We can integrate with popular booking platforms like Calendly, Acuity, or your existing practice management software. We also set up lead forms that go directly to your team.',
    },
    {
      question: 'What if we already have a website but it\'s not performing?',
      answer: 'We\'ll audit your current site and identify what\'s holding you back. Often a well-optimized redesign or even strategic updates can significantly improve your Google visibility and conversion rate.',
    },
    {
      question: 'Do you offer ongoing SEO support?',
      answer: 'Yes. Our SEO & AI Foundations retainer (PHP 12,000/month) keeps your clinic visible as Google updates its algorithms. For clinics serious about growth, our Growth Engine package includes full digital strategy.',
    },
    {
      question: 'What\'s the first step to get started?',
      answer: 'Submit an inquiry through the form below. We respond within 24 hours to schedule a discovery call, understand your clinic\'s goals, and confirm scope before starting.',
    },
  ],
  footer: {
    ctaHeadline: 'Ready to Fill Your Appointment Book?',
    ctaSubheadline: 'Let\'s discuss how a professional website can bring more patients to your clinic. Free consultation, no obligation.',
    primaryCta: 'Start Your Free Consultation',
    copyright: `© ${new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved. Built by MelonPixels.`,
  },
}