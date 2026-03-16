import React from 'react'
import { motion } from 'framer-motion'
import { FileText, AlertCircle, Scale, Ban, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Terms of Service',
      content: [
        'By using the PornAPI API, you agree to these terms and conditions.',
        'You are responsible for keeping your API key secure.',
        'You must use our services only for lawful purposes.',
        'Misuse of the API may result in account suspension.'
      ]
    },
    {
      icon: Scale,
      title: 'Usage Limits',
      content: [
        'Free plan: 60 requests per minute, 10,000 requests per day limit.',
        'Premium plan: Unlimited requests and priority support.',
        'Rate limit violations are automatically throttled.',
        'DDoS or spam-like activities will result in immediate ban.'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Prohibited Uses',
      content: [
        'Reverse engineering or copying the API is prohibited.',
        'Automated scraping or data collection tools are not allowed.',
        'Reselling or sublicensing our service is prohibited.',
        'Illegal content distribution or copyright infringement is strictly forbidden.'
      ]
    },
    {
      icon: Ban,
      title: 'Account Suspension',
      content: [
        'Accounts violating terms may be suspended without warning.',
        'Repeated violations lead to permanent ban.',
        'No refunds for suspended accounts.',
        'Appeal to support@pornapi.domains for disputes.'
      ]
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
              <FileText className="text-pornyami-orange" size={16} />
              <span className="text-sm font-medium text-gray-300">Terms of Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Terms of </span>
              <span className="text-gradient-orange">Service</span>
            </h1>

            <p className="text-lg text-gray-400 mb-4">
              Last Updated: March 16, 2026
            </p>

            <p className="text-gray-400 leading-relaxed">
              By using PornAPI API services, you agree to the following terms and conditions. 
              Please read these terms carefully.
            </p>
          </motion.div>
        </div>
      </section>

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                The PornAPI API and all related content are protected by copyright. 
                Content accessed through the API is owned by respective copyright holders.
              </p>
              <p>
                API usage does not grant you ownership of content, only usage rights.
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
            <h2 className="text-2xl font-bold text-white mb-6">Disclaimer of Warranties</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                The PornAPI API is provided "as is". We do not guarantee that the service will be uninterrupted or error-free.
              </p>
              <p>
                We are not liable for any direct or indirect damages arising from API usage.
              </p>
              <p>
                We are not responsible for the accuracy or legality of third-party content.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                We reserve the right to modify these terms at any time. 
                Significant changes will be notified via email.
              </p>
              <p>
                Continued use of the service after changes constitutes acceptance of new terms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                For questions about our terms of service:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium mb-2">Email:</p>
                <a href="mailto:legal@pornapi.domains" className="text-pornyami-orange hover:underline">
                  legal@pornapi.domains
                </a>
              </div>
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
            <h3 className="text-2xl font-bold text-white mb-4">I Accept the Terms</h3>
            <p className="text-gray-400 mb-6">
              By obtaining an API key, you accept these terms.
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

export default Terms
