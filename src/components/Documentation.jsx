import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, BookOpen, Key, Database, Code } from 'lucide-react'

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const curlExample = `curl -X GET "https://japierdoleanime.xyz/api/videos?category=MILF&sort=trending" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`

  const nodeExample = `const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://japierdoleanime.xyz/api/videos',
  params: { category: 'MILF', sort: 'trending' },
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
};

axios.request(options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`

  const authExample = `const getToken = async () => {
  const response = await fetch('https://japierdoleanime.xyz/api/auth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY',
      api_secret: 'YOUR_API_SECRET'
    })
  });
  
  const data = await response.json();
  return data.token;
};`

  const queryParams = [
    { param: 'category', type: 'string', description: 'Filter by category (e.g., MILF, Teen, Anal)' },
    { param: 'star', type: 'string', description: 'Filter by pornstar name' },
    { param: 'sort', type: 'string', description: 'Sort order: trending, newest, popular, rating' },
    { param: 'limit', type: 'integer', description: 'Number of results per page (default: 20, max: 100)' },
    { param: 'page', type: 'integer', description: 'Page number for pagination (default: 1)' },
    { param: 'quality', type: 'string', description: 'Video quality: SD, HD, 4K' }
  ]

  return (
    <section id="documentation" className="py-32 px-6 lg:px-8">
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
            <BookOpen className="text-pornyami-orange" size={16} />
            <span className="text-sm font-medium text-gray-300">Documentation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">API </span>
            <span className="text-gradient-orange">Reference</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to integrate PornAPI into your application.
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-orange">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Quick Start</h3>
                <p className="text-gray-400 text-sm">Get started in seconds with your preferred language</p>
              </div>
            </div>

            {/* cURL Example */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-300">cURL</h4>
                <button
                  onClick={() => copyCode(curlExample, 'curl')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-white transition-all text-sm"
                >
                  {copiedCode === 'curl' ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-code-bg border border-white/10 rounded-xl p-6 overflow-x-auto">
                <pre className="font-mono text-sm">
                  <code>
                    <span className="text-green-400">curl</span>
                    <span className="text-gray-300"> -X </span>
                    <span className="text-yellow-400">GET</span>
                    <span className="text-gray-300"> </span>
                    <span className="text-blue-400">"https://japierdoleanime.xyz/api/videos?category=MILF&sort=trending"</span>
                    <span className="text-gray-300"> \</span>
                    {'\n'}
                    <span className="text-gray-300">  -H </span>
                    <span className="text-green-400">"Authorization: Bearer </span>
                    <span className="text-pornyami-orange">YOUR_API_KEY</span>
                    <span className="text-green-400">"</span>
                    <span className="text-gray-300"> \</span>
                    {'\n'}
                    <span className="text-gray-300">  -H </span>
                    <span className="text-green-400">"Content-Type: application/json"</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Node.js Example */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-300">Node.js</h4>
                <button
                  onClick={() => copyCode(nodeExample, 'node')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-white transition-all text-sm"
                >
                  {copiedCode === 'node' ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-code-bg border border-white/10 rounded-xl p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-300">
                  <code>{nodeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-orange">
                <Key className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Authentication</h3>
                <p className="text-gray-400 text-sm">Secure your API requests with Bearer tokens</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-300">Get Access Token</h4>
                <button
                  onClick={() => copyCode(authExample, 'auth')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pornyami-orange/50 text-gray-400 hover:text-white transition-all text-sm"
                >
                  {copiedCode === 'auth' ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-code-bg border border-white/10 rounded-xl p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-300">
                  <code>{authExample}</code>
                </pre>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-pornyami-orange/10 border border-pornyami-orange/20">
              <p className="text-sm text-gray-300">
                <span className="text-pornyami-orange font-semibold">Note:</span> Tokens expire after 1 hour. 
                Store your API credentials securely and never expose them in client-side code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Videos API Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-orange">
                <Database className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Videos API Reference</h3>
                <p className="text-gray-400 text-sm">Query parameters for filtering and sorting</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-300 font-semibold text-sm">Parameter</th>
                    <th className="text-left py-4 px-4 text-gray-300 font-semibold text-sm">Type</th>
                    <th className="text-left py-4 px-4 text-gray-300 font-semibold text-sm">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {queryParams.map((param, index) => (
                    <tr
                      key={param.param}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? 'bg-white/[0.02]' : ''
                      } hover:bg-white/[0.04] transition-colors`}
                    >
                      <td className="py-4 px-4">
                        <code className="text-pornyami-orange font-mono text-sm font-semibold">{param.param}</code>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 font-mono text-xs rounded-lg">{param.type}</span>
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-3 text-white">Example Request:</h4>
              <code className="text-sm text-green-400 font-mono">
                GET /api/videos?category=MILF&sort=trending&limit=50&quality=HD
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Documentation
