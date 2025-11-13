import React from 'react'
import Spline from '@splinetool/react-spline'
import { Pill, Truck, Shield, Clock, ChevronRight, Phone, Mail, MapPin, Star } from 'lucide-react'

function Header() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center shadow-md">
            <Pill className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">MedSwift</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <button onClick={() => scrollTo('features')} className="hover:text-blue-600 transition-colors">Features</button>
          <button onClick={() => scrollTo('how')} className="hover:text-blue-600 transition-colors">How it works</button>
          <button onClick={() => scrollTo('reviews')} className="hover:text-blue-600 transition-colors">Reviews</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
        </nav>
        <div className="hidden md:block">
          <a href="#order" onClick={(e)=>{e.preventDefault(); scrollTo('order')}} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors">
            Order now <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm border border-white/60">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              24/7 medicine delivery across the city
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Fast, reliable, and secure pharmacy delivery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Get prescriptions and over‑the‑counter essentials delivered to your door in under 60 minutes. Real‑time tracking, verified pharmacists, and transparent prices.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3" id="order">
              <input placeholder="Prescription or item" className="h-12 rounded-lg border border-gray-300/70 bg-white/90 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <input placeholder="Your area / ZIP" className="h-12 rounded-lg border border-gray-300/70 bg-white/90 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <button className="h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors">Check availability</button>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1"><Clock className="h-4 w-4 text-blue-600" /> under 60 min</div>
              <div className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-600" /> pharmacist‑verified</div>
              <div className="flex items-center gap-1"><Truck className="h-4 w-4 text-blue-600" /> live tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 grid place-items-center group-hover:scale-105 transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Truck, title: 'Lightning-fast delivery', desc: 'Avg. delivery time under 60 minutes with real-time tracking and updates.' },
    { icon: Shield, title: 'Pharmacist verified', desc: 'Licensed pharmacists review prescriptions for safety and accuracy.' },
    { icon: Pill, title: 'Wide selection', desc: 'From prescriptions to vitamins and wellness, thousands of products.' },
    { icon: Clock, title: 'Anytime, anywhere', desc: 'Order 24/7 with reliable support whenever you need it.' },
  ]
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you expect from a modern pharmacy</h2>
          <p className="mt-3 text-gray-600">Built for speed, trust, and convenience — designed around your health.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Feature key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Upload prescription or search items', desc: 'Snap a photo or search our catalog for OTC essentials.' },
    { title: 'Verified and packed', desc: 'Pharmacists review, verify, and prepare your order securely.' },
    { title: 'Delivered to your door', desc: 'Track your courier live and receive timely updates.' },
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">From tap to doorstep in three simple steps.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-2xl bg-blue-600 text-white grid place-items-center shadow-md">{i+1}</div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const list = [
    { name: 'Aisha K.', text: 'Got my prescription in 35 minutes. Seamless and reliable!', rating: 5 },
    { name: 'Marcus L.', text: 'Love the live tracking and quick support. Five stars.', rating: 5 },
    { name: 'Priya S.', text: 'Super convenient when Im under the weather. Trusted service.', rating: 5 },
  ]
  return (
    <section id="reviews" className="py-20 bg-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Loved by patients across the city</h2>
          <p className="mt-3 text-gray-600">Real experiences from real deliveries.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {list.map((r, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, idx) => (<Star key={idx} className="h-5 w-5 fill-current" />))}
              </div>
              <p className="mt-4 text-gray-700">“{r.text}”</p>
              <div className="mt-6 text-sm font-medium text-gray-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute right-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <h3 className="text-2xl sm:text-3xl font-bold">Need medicine now?</h3>
          <p className="mt-2 text-white/90">Enter your ZIP to see delivery times in your area.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
            <input placeholder="ZIP code" className="h-12 rounded-lg border-0 bg-white text-gray-900 px-4 placeholder:text-gray-500" />
            <button className="h-12 rounded-lg bg-gray-900 hover:bg-black text-white px-6 font-medium flex items-center justify-center gap-2">
              Get started <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center shadow-md">
              <Pill className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">MedSwift</span>
          </div>
          <p className="mt-3 text-gray-600">Your trusted partner for fast, pharmacist‑verified deliveries.</p>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" /> +1 (555) 123‑4567</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /> support@medswift.com</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> 100 Health Ave, Suite 200</div>
        </div>
        <div className="text-gray-600">
          <p>© {new Date().getFullYear()} MedSwift. All rights reserved.</p>
          <p className="mt-2 text-sm">By using our service you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  )
}
