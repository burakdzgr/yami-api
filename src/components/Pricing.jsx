import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      period: '/month',
      description: 'Perfect for testing and small projects',
      icon: Zap,
      features: [
        'Ad-supported streams (In-video ads)',
        'Standard Rate Limits',
        'Email Support',
        'Basic API Access',
        'Community Discord',
        'Standard Documentation'
      ],
      cta: 'Get Started Free',
      highlighted: false,
      badge: null
    },
    {
      name: 'Premium Plan',
      price: '$10',
      period: '/month',
      description: 'For serious developers and businesses',
      icon: Crown,
      features: [
        '100% Ad-free Experience',
        'Ultra HD/4K Support',
        'Unlimited API Requests',
        'Priority Discord Support',
        'Advanced Analytics',
        'Custom Integration Support',
        'Early Access to New Features',
        '99.9% Uptime SLA'
      ],
      cta: 'Go Premium',
      highlighted: true,
      badge: 'Most Popular'
    }
  ]

  return (
    <section id="pricing" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Crown className="text-pornyami-orange" size={16} />
            <span className="text-sm font-medium text-gray-300">Pricing Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Simple, </span>
            <span className="text-gradient-orange">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-2 border-pornyami-orange shadow-glow-orange-lg'
                  : 'glass-card'
              }`}
            >
              {/* Highlight Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gradient-orange text-white rounded-full text-sm font-semibold shadow-glow-orange">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  plan.highlighted ? 'bg-gradient-orange' : 'bg-white/5'
                }`}>
                  <plan.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-6xl font-bold ${
                    plan.highlighted ? 'text-gradient-orange' : 'text-white'
                  }`}>{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-0.5 p-1 rounded-full ${
                      plan.highlighted ? 'bg-pornyami-orange/20' : 'bg-white/5'
                    }`}>
                      <Check className={`${
                        plan.highlighted ? 'text-pornyami-orange' : 'text-green-400'
                      }`} size={16} />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`group relative w-full py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                plan.highlighted
                  ? 'bg-gradient-orange text-white shadow-glow-orange hover:shadow-glow-orange-lg'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
              }`}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {plan.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-gray-400 text-sm">
              All plans include access to our comprehensive API documentation and developer resources.
            </p>
            <span className="text-gray-500">•</span>
            <a href="#" className="text-pornyami-orange hover:text-orange-400 transition-colors text-sm font-medium">
              Contact us for enterprise solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
