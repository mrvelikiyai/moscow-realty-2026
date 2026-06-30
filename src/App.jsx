import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Шапка */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            MOSCOW<span className="text-blue-600">REALTY</span>
          </div>
          <a href="tel:+74950000000" className="font-semibold text-slate-700 hover:text-blue-600 transition">
            +7 (495) 000-00-00
          </a>
        </div>
      </header>

      {/* Временный заглушка-экран, пока мы не создали квиз */}
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Подбор квартир в новостройках Москвы под <span className="text-blue-600">0.01%</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          База проекта успешно создана на GitHub. Сейчас мы начнем добавлять сюда интерактивный квиз, калькулятор и форму отправки в Telegram.
        </p>
        <div className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20">
          Система готова к наполнению кодом
        </div>
      </main>
    </div>
  )
}
