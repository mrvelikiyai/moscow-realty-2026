import React from 'react'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      
      {/* Шапка сайта */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            MOSCOW<span className="text-blue-600">REALTY</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-500 hidden sm:inline">Работаем по всей Москве и МО</span>
            <a href="tel:+74950000000" className="font-semibold text-slate-700 hover:text-blue-600 transition">
              +7 (495) 000-00-00
            </a>
          </div>
        </div>
      </header>

      {/* Главный экран и Квиз */}
      <main>
        <Hero />
      </main>

      {/* Простой подвал (пока мы не создали полноценный) */}
      <footer className="bg-white border-t border-slate-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>© 2026 MOSCOWREALTY. Все права защищены.</p>
          <p className="mt-1">Информация на сайте не является публичной офертой. Подбор и оформление — 0% комиссии.</p>
        </div>
      </footer>

    </div>
  )
}
