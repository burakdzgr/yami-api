import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Activity } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-pornyami-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">Porn</span>
                <span className="text-gradient-orange">API</span>
              </div>
            </a>
            {/* Status Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="relative">
                <Activity className="text-pornyami-orange" size={14} />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pornyami-orange rounded-full animate-pulse" />
              </div>
              <span className="text-xs font-medium text-gray-300">API: Online</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('api-showcase')}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              API
            </button>
            <button
              onClick={() => scrollToSection('documentation')}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Docs
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Pricing
            </button>
            <button className="relative group px-6 py-2.5 bg-gradient-orange text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-orange">
              <span className="relative z-10">Get API Key</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-pornyami-dark/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('api-showcase')}
              className="block w-full text-left text-gray-300 hover:text-white py-3 text-sm font-medium transition-colors"
            >
              API
            </button>
            <button
              onClick={() => scrollToSection('documentation')}
              className="block w-full text-left text-gray-300 hover:text-white py-3 text-sm font-medium transition-colors"
            >
              Docs
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-300 hover:text-white py-3 text-sm font-medium transition-colors"
            >
              Pricing
            </button>
            <button className="w-full bg-gradient-orange text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-glow-orange">
              Get API Key
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
