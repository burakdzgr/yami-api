import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import APIShowcase from './components/APIShowcase'
import Documentation from './components/Documentation'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import DomainStatus from './components/DomainStatus'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import DMCA from './pages/DMCA'
import CookiePolicy from './pages/CookiePolicy'
import Support from './pages/Support'

function HomePage() {
  return (
    <>
      <Hero />
      <DomainStatus />
      <APIShowcase />
      <Documentation />
      <Pricing />
    </>
  )
}

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-pornyami-dark">
      {isHomePage && <Header />}
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
