import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'API Documentation', href: '/#documentation', internal: false },
      { name: 'Pricing', href: '/#pricing', internal: false },
      { name: 'Status', href: '#', internal: false },
      { name: 'Changelog', href: '#', internal: false }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy', internal: true },
      { name: 'Terms of Service', href: '/terms', internal: true },
      { name: 'DMCA', href: '/dmca', internal: true },
      { name: 'Cookie Policy', href: '/cookie-policy', internal: true }
    ],
    support: [
      { name: 'Help Center', href: '/support', internal: true },
      { name: 'Discord Community', href: '#', internal: false },
      { name: 'Contact Us', href: '/support', internal: true },
      { name: 'Report Issue', href: '/support', internal: true }
    ]
  }

  return (
    <footer className="relative border-t border-white/10 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-white">Porn</span>
              <span className="text-gradient-orange">Yami</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Global Adult Media Archive API. High-performance streaming and rich metadata for developers.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-pornyami-orange transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-pornyami-orange transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-pornyami-orange transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} PornYami. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <p className="text-gray-500 flex items-center gap-1.5">
                Made with <Heart className="text-pornyami-orange" size={14} fill="currentColor" /> for developers
              </p>
              <span className="text-gray-700">•</span>
              <p className="text-gray-500">
                18+ Adult Content API
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
