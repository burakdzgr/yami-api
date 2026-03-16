import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Code2, Copy, Check, Terminal } from 'lucide-react'

const Hero = () => {
  const [copied, setCopied] = useState(false)

  const codeExample = `curl -X GET "https://japierdoleanime.xyz/api/videos" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-radial-orange opacity-40" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-pornyami-orange/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <div className="w-2 h-2 bg-pornyami-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Production Ready API</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Global Adult</span>
              <br />
              <span className="text-white">Media Archive</span>
              <br />
              <span className="text-gradient-orange">API</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              High-performance HLS streaming, rich metadata, and effortless integration. Build your adult platform in minutes with our developer-first API.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-orange text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-orange">
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              <button 
                onClick={() => document.getElementById('documentation').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
              >
                View Documentation
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Zap className="text-pornyami-orange" size={16} />
                <span className="text-sm text-gray-300">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="text-pornyami-orange" size={16} />
                <span className="text-sm text-gray-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Code2 className="text-pornyami-orange" size={16} />
                <span className="text-sm text-gray-300">Developer First</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Floating Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              {/* Terminal Window */}
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-400 font-mono">terminal</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="ml-auto text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-6 bg-code-bg font-mono text-sm">
                  <div className="mb-4">
                    <span className="text-gray-500">$ </span>
                    <span className="text-green-400">curl</span>
                    <span className="text-gray-300"> -X </span>
                    <span className="text-yellow-400">GET</span>
                    <span className="text-gray-300"> \</span>
                  </div>
                  <div className="mb-4 pl-4">
                    <span className="text-blue-400">"https://japierdoleanime.xyz/api/videos"</span>
                    <span className="text-gray-300"> \</span>
                  </div>
                  <div className="mb-4 pl-4">
                    <span className="text-gray-300">-H </span>
                    <span className="text-green-400">"Authorization: Bearer </span>
                    <span className="text-pornyami-orange">YOUR_API_KEY</span>
                    <span className="text-green-400">"</span>
                    <span className="text-gray-300"> \</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-300">-H </span>
                    <span className="text-green-400">"Content-Type: application/json"</span>
                  </div>

                  {/* Response Preview */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-gray-500 mb-2">// Response</div>
                    <div className="text-green-400">{`{`}</div>
                    <div className="pl-4">
                      <span className="text-blue-400">"success"</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-yellow-400">true</span>
                      <span className="text-gray-300">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">"total"</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-yellow-400">500847</span>
                      <span className="text-gray-300">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">"data"</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-gray-300">[...]</span>
                    </div>
                    <div className="text-green-400">{`}`}</div>
                  </div>
                </div>
              </div>

              {/* Floating Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pornyami-orange/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-card rounded-2xl p-8 text-center glass-card-hover">
            <div className="text-5xl font-bold text-gradient-orange mb-3">500K+</div>
            <div className="text-gray-400 text-sm">Videos Available</div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center glass-card-hover">
            <div className="text-5xl font-bold text-gradient-orange mb-3">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime SLA</div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center glass-card-hover">
            <div className="text-5xl font-bold text-gradient-orange mb-3">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
