import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart3, Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality.',
      examples: [
        'Session management and authentication',
        'Security and fraud prevention',
        'API key management',
        'Preference settings'
      ],
      canDisable: false
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand and improve site usage.',
      examples: [
        'Page view statistics',
        'User behavior analysis',
        'Performance metrics',
        'A/B testing data'
      ],
      canDisable: true
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable advanced features and personalization.',
      examples: [
        'Language preferences',
        'Theme settings (dark/light mode)',
        'Customized dashboard',
        'Recently used endpoints'
      ],
      canDisable: true
    }
  ]

  return (
    <div className="min-h-screen bg-pornyami-dark">
      <div className="h-20" />

      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-radial-orange opacity-40" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Cookie className="text-pornyami-orange" size={16} />
              <span className="text-sm font-medium text-gray-300">Cookie Policy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Cookie </span>
              <span className="text-gradient-orange">Policy</span>
            </h1>

            <p className="text-lg text-gray-400 mb-4">
              Last Updated: March 16, 2026
            </p>

            <p className="text-gray-400 leading-relaxed">
              PornYami uses cookies on our website to improve user experience. 
              This policy explains which cookies we use and how you can manage them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Cookies are small text files stored on your device when you visit a website. 
                They help the website recognize you and remember your preferences.
              </p>
              <p>
                Cookies can be session cookies (deleted when you close your browser) or persistent cookies 
                (remain on your device for a specified period).
              </p>
            </div>
          </motion.div>

          {cookieTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-orange flex-shrink-0">
                  <type.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-2xl font-bold text-white">{type.title}</h2>
                    {type.canDisable ? (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                        Optional
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-sm text-gray-400 mb-3 font-medium">Examples:</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Some cookies are placed by our service providers:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                <div>
                  <p className="text-white font-medium mb-1">Google Analytics</p>
                  <p className="text-sm">For website usage statistics</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Cloudflare</p>
                  <p className="text-sm">For security and performance optimization</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Stripe</p>
                  <p className="text-sm">For payment processing (Premium users only)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 bg-pornyami-orange/5 border-pornyami-orange/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Manage Your Cookie Preferences</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                You can manage your cookie preferences using the following methods:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <p className="text-white font-medium mb-2">1. Browser Settings</p>
                  <p className="text-sm">
                    You can block or delete cookies through your browser settings. 
                    However, this may affect some site features.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <p className="text-white font-medium mb-2">2. Cookie Preferences Panel</p>
                  <p className="text-sm">
                    Use the "Cookie Preferences" link in the footer to disable analytics and 
                    functional cookies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <p className="text-white font-medium mb-2">3. Private Browsing</p>
                  <p className="text-sm">
                    Use your browser's private mode to prevent cookies from being 
                    stored permanently.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button className="px-6 py-3 bg-gradient-orange text-white font-semibold rounded-xl hover:shadow-glow-orange transition-all">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">More Information</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                For questions about our cookie policy:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium mb-2">Email:</p>
                <a href="mailto:privacy@pornyami.com" className="text-pornyami-orange hover:underline">
                  privacy@pornyami.com
                </a>
              </div>
              <p className="text-sm">
                You can also review our <Link to="/privacy-policy" className="text-pornyami-orange hover:underline">Privacy Policy</Link> to 
                learn more about our data processing practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">I Accept Cookies</h3>
            <p className="text-gray-400 mb-6">
              By continuing to use our site, you accept our use of cookies.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-orange text-white font-semibold rounded-xl hover:shadow-glow-orange transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicy
