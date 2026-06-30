import React, { useState } from 'react'
import { Percent, Wallet, AlertCircle, ArrowUpRight, TrendingDown } from 'lucide-react'

export default function Mortgage() {
  const [activeTab, setActiveTab] = useState('family')

  const programs = {
    family: {
      title: 'Семейная ипотека',
      rate: 'от 3.5%',
      term: 'До 30 лет',
      payment: 'от 34 500 ₽/мес',
      economy: 'До 4.2 млн ₽',
      desc: 'Специальные субсидированные лимиты от застройщиков-партнеров Жанны Великой для семей с детьми. Ставка фиксируется на весь срок.'
    },
    subsidized: {
      title: 'Субсидии от застройщика',
      rate: 'от 4.5%',
      term: 'До 30 лет',
      payment: 'от 39 000 ₽/мес',
      economy: 'До 5.1 млн ₽',
      desc: 'Программы, где застройщик компенсирует часть процентов. Идеально для тех, у кого минимальный первоначальный взнос.'
    },
    installments: {
      title: 'Умная рассрочка',
      rate: '0%',
      term: 'До ввода в экспл.',
      payment: 'Индивидуально',
      economy: 'Переплата 0 ₽',
      desc: 'Покупка долями (например, 10/10/80 или траншами). Подходит, если вы ждете продажи старой недвижимости или закрытия вклада.'
    }
  }

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Декоративное свечение на фоне */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Заголовок */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-500/20">
            <Percent className="h-3.5 w-3.5" /> Аналитика ипотеки • 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Снижаем платежи и <span className="text-amber-500">переплату в 2 раза</span>
          </h2>
          <p className="text-slate-400 text-base">
            Мы не просто подаем заявку в банк. Мы комбинируем закрытые программы субсидирования застройщиков, чтобы сделать покупку комфортной.
          </p>
        </div>

        {/* Переключатель программ (Табы с анимацией) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto p-1.5 bg-slate-900 rounded-2xl border border-slate-800">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 min-w-[150px] text-center py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition duration-300 ${
                activeTab === key 
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {programs[key].title}
            </button>
          ))}
        </div>

        {/* Интерактивная карточка расчета */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Левая сторона: Параметры */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-amber-500 text-3xl font-black">/</span> {programs[activeTab].title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {programs[activeTab].desc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                  <div className="text-xs text-slate-500 mb-1">Ставка по программе</div>
                  <div className="text-2xl font-black text-amber-500">{programs[activeTab].rate}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                  <div className="text-xs text-slate-500 mb-1">Срок кредитования</div>
                  <div className="text-2xl font-black text-white">{programs[activeTab].term}</div>
                </div>
              </div>
            </div>

            {/* Правая сторона: Эффект выгоды */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-full relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Примерный платеж</span>
                  <Wallet className="h-4 w-4 text-slate-500" />
                </div>
                <div className="text-3xl font-black text-white tracking-tight">
                  {programs[activeTab].payment}
                </div>
                
                <div className="h-px bg-slate-800 my-4"></div>

                <div className="flex items-center gap-2.5 text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
                  <TrendingDown className="h-5 w-5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Ваша чистая экономия</div>
                    <div className="text-sm font-bold">{programs[activeTab].economy}</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => {
                    document.getElementById('root').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  Рассчитать мою ставку
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Информационная сноска */}
        <div className="mt-12 flex items-center gap-3 max-w-2xl mx-auto bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 text-xs text-slate-400">
          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
          <span>
            В связи с изменениями лимитов банков в 2026 году, условия по ряду субсидированных программ могут меняться застройщиками еженедельно. Оставьте заявку в квизе выше, чтобы зафиксировать текущую ставку.
          </span>
        </div>

      </div>
    </section>
  )
}
