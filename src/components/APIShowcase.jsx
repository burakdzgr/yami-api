import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Copy, Check, Sparkles, Video, Users, Grid3x3 } from 'lucide-react'
import axios from 'axios'

const APIShowcase = () => {
  const [activeTab, setActiveTab] = useState('videos')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedStar, setSelectedStar] = useState('')
  const [apiResponse, setApiResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const tabs = [
    { id: 'videos', name: 'Videos', icon: Video, path: '/api/videos' },
    { id: 'pornstars', name: 'Pornstars', icon: Users, path: '/api/pornstars' },
    { id: 'categories', name: 'Categories', icon: Grid3x3, path: '/api/categories' }
  ]

  const categories = [
    { name: 'MILF', count: 45234, tags: ['4K', 'VR'] },
    { name: 'Teen', count: 38921, tags: ['HD', 'New'] },
    { name: 'Anal', count: 32456, tags: ['4K'] },
    { name: 'Lesbian', count: 28734, tags: ['VR', 'HD'] },
    { name: 'Asian', count: 24567, tags: ['New'] },
    { name: 'BBW', count: 21345, tags: ['HD'] }
  ]

  const pornstars = [
    { name: 'Riley Reid', videos: 1234, rating: 4.9, tags: ['4K', 'VR'] },
    { name: 'Mia Khalifa', videos: 987, rating: 4.8, tags: ['HD'] },
    { name: 'Lana Rhoades', videos: 856, rating: 4.9, tags: ['4K', 'New'] },
    { name: 'Abella Danger', videos: 743, rating: 4.7, tags: ['VR'] },
    { name: 'Angela White', videos: 621, rating: 4.8, tags: ['4K'] },
    { name: 'Brandi Love', videos: 589, rating: 4.9, tags: ['HD', 'VR'] }
  ]

  const fetchAPIData = async () => {
    setIsLoading(true)
    
    try {
      let url = 'https://japierdoleanime.xyz/api/videos'
      const params = new URLSearchParams()
      
      if (selectedCategory) params.append('category', selectedCategory)
      if (selectedStar) params.append('star', selectedStar)
      
      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await axios.get(url)
      setApiResponse(response.data)
    } catch (error) {
      setApiResponse({
        error: true,
        message: error.message,
        status: error.response?.status || 500
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'videos') {
      fetchAPIData()
    }
  }, [activeTab])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="api-showcase" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="text-pornyami-orange" size={16} />
            <span className="text-sm font-medium text-gray-300">Interactive API Explorer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Developer </span>
            <span className="text-gradient-orange">Dashboard</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Test endpoints in real-time. Filter by category and pornstar. See instant JSON responses.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-orange rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon size={16} />
                  {tab.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* API Testing Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 mb-12"
        >
          {/* Request Panel */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-pornyami-orange rounded-full animate-pulse" />
              API Request
            </h3>

            {/* Endpoint Display */}
            <div className="mb-6 p-4 bg-code-bg rounded-xl border border-white/10">
              <div className="text-xs text-gray-500 mb-2">GET</div>
              <div className="font-mono text-sm text-green-400">
                {tabs.find(t => t.id === activeTab)?.path}
              </div>
            </div>

            {/* Filters */}
            {activeTab === 'videos' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Category Filter
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-pornyami-orange/50 transition-colors"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Pornstar Filter
                  </label>
                  <select
                    value={selectedStar}
                    onChange={(e) => setSelectedStar(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-pornyami-orange/50 transition-colors"
                  >
                    <option value="">All Pornstars</option>
                    {pornstars.map((star) => (
                      <option key={star.name} value={star.name}>{star.name}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Execute Button */}
            <button
              onClick={fetchAPIData}
              disabled={isLoading}
              className="group relative w-full px-6 py-4 bg-gradient-orange text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-orange disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Executing...
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Execute Request
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </div>

          {/* Response Panel */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                API Response
              </h3>
              {apiResponse && (
                <button
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-pornyami-orange transition-colors"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              )}
            </div>

            <div className="bg-code-bg border border-white/10 rounded-xl p-4 h-96 overflow-auto font-mono text-sm">
              {apiResponse ? (
                <pre className="text-green-400">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              ) : (
                <div className="text-gray-500 flex items-center justify-center h-full">
                  Execute a request to see the response
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bento Grid - Categories & Pornstars */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Popular Categories - Bento Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Grid3x3 className="text-pornyami-orange" size={24} />
              Popular Categories
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="bento-card rounded-2xl p-6 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{category.name}</h4>
                      <p className="text-sm text-gray-400">{category.count.toLocaleString()} videos</p>
                    </div>
                    <div className="text-2xl">🔥</div>
                  </div>
                  <div className="flex gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-pornyami-orange/10 text-pornyami-orange rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trending Pornstars - Bento Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-pornyami-orange" size={24} />
              Trending Pornstars
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {pornstars.map((star, index) => (
                <motion.div
                  key={star.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="bento-card rounded-2xl p-6 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{star.name}</h4>
                      <p className="text-sm text-gray-400">{star.videos} videos</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-lg">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-xs font-medium text-white">{star.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {star.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-pornyami-orange/10 text-pornyami-orange rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default APIShowcase
