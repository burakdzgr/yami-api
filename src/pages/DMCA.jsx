import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, FileWarning, Mail, Send, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const DMCA = () => {
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
              <AlertTriangle className="text-pornyami-orange" size={16} />
              <span className="text-sm font-medium text-gray-300">DMCA Policy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">DMCA Copyright </span>
              <span className="text-gradient-orange">Notice</span>
            </h1>

            <p className="text-lg text-gray-400 mb-4">
              Digital Millennium Copyright Act (DMCA) Compliance
            </p>

            <p className="text-gray-400 leading-relaxed">
              PornYami respects the rights of copyright holders and is fully compliant with the DMCA. 
              We take copyright infringement claims seriously.
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
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-orange flex-shrink-0">
                <FileWarning className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Copyright Infringement Notice</h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-400">
              <p>
                If you believe your copyright has been infringed, please send a notice containing the following information:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">1</span>
                  </div>
                  <p>Physical or electronic signature of the copyright owner</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">2</span>
                  </div>
                  <p>Description of the copyrighted work claimed to have been infringed</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">3</span>
                  </div>
                  <p>Location of the infringing material on our platform (URL)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">4</span>
                  </div>
                  <p>Your contact information (address, phone, email)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">5</span>
                  </div>
                  <p>Statement that you have a good faith belief the use is not authorized</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pornyami-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pornyami-orange text-sm font-bold">6</span>
                  </div>
                  <p>Statement under penalty of perjury that the information is accurate</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-orange flex-shrink-0">
                <Send className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Notice Process</h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-400">
              <p>
                After receiving your DMCA notice:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>We will review the notice within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>If valid, the infringing content will be removed immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>The user who uploaded the content will be notified</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>Repeat infringers may have their accounts terminated</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Counter-Notice</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                If you believe your content was wrongly removed, you may submit a counter-notice:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>Your physical or electronic signature</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>Description and location of the removed content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>Statement under penalty of perjury that content was removed by mistake</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pornyami-orange mt-2 flex-shrink-0" />
                  <span>Consent to jurisdiction of federal court</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 bg-pornyami-orange/5 border-pornyami-orange/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-orange flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">DMCA Contact</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                Send your DMCA notices to:
              </p>
              
              <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email:</p>
                    <a href="mailto:dmca@pornyami.com" className="text-pornyami-orange hover:underline font-medium text-lg">
                      dmca@pornyami.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Subject Line:</p>
                    <p className="text-white font-mono text-sm">DMCA Takedown Request</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-yellow-200 text-sm">
                  <strong>Important:</strong> False or bad faith DMCA notices may have legal consequences. 
                  Please only submit notices for genuine copyright infringement.
                </p>
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
            <h3 className="text-2xl font-bold text-white mb-4">We Respect Copyright</h3>
            <p className="text-gray-400 mb-6">
              We do our best to protect the rights of content owners.
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

export default DMCA
