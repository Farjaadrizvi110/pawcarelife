import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ArticlePage from './pages/ArticlePage'
import About from './pages/About'
import Tools from './pages/Tools'
import DogAge from './pages/DogAge'
import PetCost from './pages/PetCost'
import FoodChecker from './pages/FoodChecker'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import CookieConsent from './components/CookieConsent'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname })
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/dog-age-calculator" element={<DogAge />} />
          <Route path="/tools/pet-cost-estimator" element={<PetCost />} />
          <Route path="/tools/food-safety-checker" element={<FoodChecker />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  )
}
