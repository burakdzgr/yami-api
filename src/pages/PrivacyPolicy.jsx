import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'We collect IP address, request time, and endpoint information during API usage.',
        'When you create an account, your email address and API keys are securely stored.',
        'Usage statistics and performance metrics are collected anonymously.'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our API services.',
        'For security monitoring and fraud prevention.',
        'To provide technical support and customer service.',
        'To fulfill our legal obligations.'
      ]
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        'All data is protected with industry-standard SSL/TLS encryption.',
        'API keys are hashed using bcrypt before storage.',
        'Regular security audits and penetration testing are conducted.',
        'Our data centers are ISO 27001 certified.'
      ]
    },
    {
      icon: Eye,
      title: 'Third-Party Sharing',
      content: [
        'We do not sell your data to third parties.',
        'Limited information sharing with service providers (hosting, CDN).',
        'No data sharing except as required by law.',
        'Anonymous usage data may be collected for analytics.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-pornyami-dark">
      {/* Header Spacer */}
      <div className="h-20" />

      {/* Hero Section */}
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
              <Shield className="text-pornyami-orange" size={16} />
              <span className="text-sm font-medium text-gray-300">Privacy Policy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Privacy </span>
              <span className="text-gradient-orange">Policy</span>
            </h1>

            <p className="text-lg text-gray-400 mb-4">
              Last Updated: March 16, 2026
            </p>

            <p className="text-gray-400 leading-relaxed">
              At PornAPI, we value your privacy. This policy explains how we collect, use, and 
              protect your personal information when you use our API services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-orange flex-shrink-0">
                  <section.icon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                </div>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                    <span className="text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                We use cookies on our website to improve user experience. 
                For more information about cookies, please see our <Link to="/cookie-policy" className="text-pornyami-orange hover:underline">Cookie Policy</Link>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <div className="space-y-4 text-gray-400">
              <p>Under GDPR and similar regulations, you have the following rights:</p>
              <ul className="space-y-2 ml-4">
                <li>• Right to access your data</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure (right to be forgotten)</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                If you have questions about our privacy policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium mb-2">Email:</p>
                <a href="mailto:privacy@pornapi.domains" className="text-pornyami-orange hover:underline">
                  privacy@pornapi.domains
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6">
              Get your API key and start integrating securely.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-orange text-white font-semibold rounded-xl hover:shadow-glow-orange transition-all"
            >
              Get API Key
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
