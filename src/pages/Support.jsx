import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, MessageCircle, Mail, Book, Search, ChevronDown, ArrowLeft, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    {
      question: 'How do I get my API key?',
      answer: 'Click the "Get API Key" button on the homepage to create a free account and receive your API key. Your key will be displayed in your dashboard.'
    },
    {
      question: 'What is rate limiting and how does it work?',
      answer: 'Rate limiting restricts the number of API requests you can make in a given time period. The free plan allows 60 requests per minute and 10,000 requests per day. Premium plan offers unlimited requests.'
    },
    {
      question: 'What are the API response times?',
      answer: 'Average response time is between 100-200ms. This can be further reduced with CDN usage. We guarantee 99.9% uptime SLA.'
    },
    {
      question: 'Which programming languages do you support?',
      answer: 'Our API is RESTful and compatible with all programming languages. Our documentation includes examples for cURL, Node.js, Python, and PHP.'
    },
    {
      question: 'How can I upgrade to Premium?',
      answer: 'Click the "Upgrade to Premium" button in your dashboard to complete the payment process. We use Stripe for secure payment processing.'
    },
    {
      question: 'I lost my API key, what should I do?',
      answer: 'You can generate a new key from your dashboard using the "Regenerate API Key" option. Your old key will be automatically invalidated.'
    },
    {
      question: 'I\'m getting CORS errors, how do I fix this?',
      answer: 'Our API supports CORS for all origins. For browser-based applications, store your API key on the backend and use a proxy.'
    },
    {
      question: 'Do you support webhooks?',
      answer: 'Yes, the Premium plan includes webhook support. You can receive automatic notifications when new content is added or updated.'
    }
  ]

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Discord Community',
      description: 'Connect with the community and get help from other developers.',
      action: 'Join Discord',
      link: '#',
      badge: 'Fastest'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send your technical questions to support@pornapi.domains.',
      action: 'Send Email',
      link: 'mailto:support@pornapi.domains',
      badge: '24-48 hours'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Check detailed API reference and code examples in our documentation.',
      action: 'View Documentation',
      link: '/#documentation',
      badge: 'Self-Service'
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-pornyami-dark">
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
              <HelpCircle className="text-pornyami-orange" size={16} />
              <span className="text-sm font-medium text-gray-300">Support Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">How Can We </span>
              <span className="text-gradient-orange">Help You?</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              Find answers to your questions or contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pornyami-orange/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
            <p className="text-gray-400">Choose the support channel that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 hover:border-pornyami-orange/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-orange">
                    <channel.icon className="text-white" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-pornyami-orange/10 text-pornyami-orange text-xs font-medium rounded-full">
                    {channel.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{channel.description}</p>
                <a
                  href={channel.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-white rounded-lg transition-all text-sm font-medium"
                >
                  {channel.action}
                  <Send size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Most commonly asked questions</p>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`text-pornyami-orange flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No results found. Please contact our support team.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Still Need Help?</h2>
            <p className="text-gray-400 text-center mb-8">
              Fill out the form and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pornyami-orange/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pornyami-orange/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-pornyami-orange/50 transition-colors" style={{ colorScheme: 'dark' }}>
                  <option value="" style={{ backgroundColor: '#020420', color: '#ffffff' }}>Select a subject</option>
                  <option value="technical" style={{ backgroundColor: '#020420', color: '#ffffff' }}>Technical Support</option>
                  <option value="billing" style={{ backgroundColor: '#020420', color: '#ffffff' }}>Billing</option>
                  <option value="api" style={{ backgroundColor: '#020420', color: '#ffffff' }}>API Issue</option>
                  <option value="feature" style={{ backgroundColor: '#020420', color: '#ffffff' }}>Feature Request</option>
                  <option value="other" style={{ backgroundColor: '#020420', color: '#ffffff' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pornyami-orange/50 transition-colors resize-none"
                  placeholder="Describe your issue in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">More Resources</h3>
            <p className="text-gray-400 mb-6">
              Explore our resources for API documentation, code examples, and more.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#documentation"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-white rounded-xl transition-all font-medium"
              >
                API Documentation
              </Link>
              <a
                href="#"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-white rounded-xl transition-all font-medium"
              >
                GitHub Examples
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-white rounded-xl transition-all font-medium"
              >
                Video Tutorials
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Support
