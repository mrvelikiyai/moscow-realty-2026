import React from 'react'
import Hero from './components/Hero.jsx'
import Mortgage from './components/Mortgage.jsx'
import Cases from './components/Cases.jsx'
import About from './components/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      
      {/* Шапка сайта */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-black text-xl tracking-wider text-slate-900 leading-none">
              ВЕЛИКОЛЕПИЕ<span className="text-amber-600">ЖИЗНИ</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">
              Недвижимость, доступная для всех
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-400 hidden lg:inline">Авторский подбор квартир от Жанны Великой</span>
            <a href="tel:+79255360095" className="font-bold text-lg text-slate-800 hover:text-amber-600 transition bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              8 (925) 536-00-95
            </a>
          </div>
        </div>
      </header>

      {/* Главные разделы сайта */}
      <main>
        <Hero />
        <Mortgage />
        <Cases />
        <About />
      </main>

      {/* Подвал сайта */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <div className="font-black text-lg tracking-wider text-white">
              ВЕЛИКОЛЕПИЕ<span className="text-amber-500">ЖИЗНИ</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Проект Жанны Великой. Мы доказываем, что комфортное и современное жилье в Москве — это реальность, доступная для каждого.
            </p>
          </div>
          <div className="md:text-right space-y-2">
            <a href="tel:+79255360095" className="font-bold text-xl text-white hover:text-amber-500 transition block">
              8 (925) 536-00-95
            </a>
            <p className="text-xs text-slate-500">© 2026 Проект «Великолепие Жизни». Все права защищены.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
