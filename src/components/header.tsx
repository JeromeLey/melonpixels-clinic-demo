'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const business = siteConfig.business

  function toggleMobileNav() {
    setMobileNavOpen(!mobileNavOpen)
  }

  function closeMobileNav() {
    setMobileNavOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 text-gray-900 font-bold text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {business.name.charAt(0)}
              </div>
              <span className="hidden sm:inline">{business.name}</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="#services" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                Services
              </a>
              <a href="#packages" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                Pricing
              </a>
              <a href="#contact" className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Book Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileNav}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={closeMobileNav}
          />
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-xl">
            <div className="p-4">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeMobileNav}
                  className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-1">
                <a 
                  href="#services" 
                  onClick={closeMobileNav}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Services
                </a>
                <a 
                  href="#packages" 
                  onClick={closeMobileNav}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Pricing
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileNav}
                  className="mt-4 px-4 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-center"
                >
                  Book Now
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
