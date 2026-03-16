import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Signal, AlertTriangle, Send, ExternalLink, MessageCircle } from 'lucide-react'

const DomainStatus = () => {
  const newDomains = [
    { name: 'pornapi.domains', status: 'Live' },
    { name: 'pornapi.me', status: 'Live' },
    { name: 'pornapi-cdn.domains', status: 'Live' },
    { name: 'api.pornapi.domains', status: 'Live' },
    { name: 'stream.pornapi.domains', status: 'Live' },
  ]

  const oldDomains = [
    { name: 'japierdoleanime.xyz', status: 'Old, Use NEW' },
    { name: 'pornyami.com', status: 'Old, Use NEW' },
    { name: 'pornapi.net', status: 'Dead' },
    { name: 'pornapi.xyz', status: 'Dead' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'text-green-400'
      case 'Old, Use NEW':
        return 'text-yellow-400'
      case 'Dead':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getDotColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'
      case 'Old, Use NEW':
        return 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]'
      case 'Dead':
        return 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]'
      default:
        return 'bg-gray-400'
    }
  }

  const DomainRow = ({ domain, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex items-center justify-between px-6 py-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl transition-all duration-300 group"
    >
      <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
        {domain.name}
      </span>
      <div className="flex items-center gap-3">
        <span className={`text-sm font-semibold ${getStatusColor(domain.status)}`}>
          {domain.status}
        </span>
        <div className={`w-2.5 h-2.5 rounded-full ${getDotColor(domain.status)}`} />
      </div>
    </motion.div>
  )

  return (
    <section id="domain-status" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Globe className="text-pornyami-orange" size={16} />
            <span className="text-sm font-medium text-gray-300">Domain Status</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Domain </span>
            <span className="text-gradient-orange">Monitor</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Always use our latest active domains for the best experience and uninterrupted access.
          </p>
        </motion.div>

        {/* Bookmark Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="glass-card rounded-2xl px-6 py-4 mb-12 text-center"
        >
          <p className="text-sm text-gray-400">
            Press <kbd className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">Ctrl</kbd> + <kbd className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">D</kbd> to bookmark this site to stay updated on PornAPI domains.
          </p>
        </motion.div>

        {/* New Domains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Signal className="text-green-400" size={24} />
            <h3 className="text-2xl font-bold text-white">NEW DOMAINS:</h3>
          </div>
          <div className="space-y-3">
            {newDomains.map((domain, index) => (
              <DomainRow key={domain.name} domain={domain} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Old Domains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-bold text-white">OLD DOMAINS:</h3>
          </div>
          <div className="space-y-3">
            {oldDomains.map((domain, index) => (
              <DomainRow key={domain.name} domain={domain} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Warning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 p-5 rounded-xl bg-red-500/10 border border-red-500/20"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-1">Warning: Do NOT use old domains!</p>
              <p className="text-sm text-gray-400">
                Old domains are no longer maintained and may be unsafe. Always use the new domains listed above for a secure and uninterrupted experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Telegram Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Telegram Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2AABEE] to-[#229ED9] flex items-center justify-center shadow-[0_0_24px_rgba(42,171,238,0.3)]">
                <Send className="text-white" size={28} />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Join Our Telegram</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stay updated with the latest domain changes, new features, announcements, and get instant support from our community.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://t.me/pornapi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group relative inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2AABEE] to-[#229ED9] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(42,171,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={18} />
                Join Telegram
                <ExternalLink size={14} className="opacity-60" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </div>

          {/* Extra Info Tags */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Globe className="text-pornyami-orange" size={14} />
              <span className="text-xs text-gray-400">Domain Updates</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Signal className="text-pornyami-orange" size={14} />
              <span className="text-xs text-gray-400">Status Alerts</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <MessageCircle className="text-pornyami-orange" size={14} />
              <span className="text-xs text-gray-400">Community Support</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <AlertTriangle className="text-pornyami-orange" size={14} />
              <span className="text-xs text-gray-400">Instant Notifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DomainStatus
