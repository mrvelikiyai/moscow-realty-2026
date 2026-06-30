import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: 'Ваши услуги действительно бесплатны для покупателя? В чем подвох?',
      a: 'Никакого подвоха. Подбор новостроек, аналитика, показы и одобрение субсидированной ипотеки для вас абсолютно бесплатны (0% комиссии). Нашу работу по договору полностью оплачивает застройщик. При этом цена квартиры для вас остается точно такой же, как на официальном сайте девелопера, включая все действующие скидки и акции июня 2026 года.'
    },
    {
      q: 'Откуда берутся ставки 3.5% или 4.5%, если ключевая ставка сейчас высокая?',
      a: 'Это специальные партнерские программы, которые проект «Великолепие Жизни» согласовывает напрямую с крупнейшими девелоперами и банками. Застройщик за счет собственной маржинальности компенсирует («субсидирует») банку часть процентной ставки, чтобы сделать ежемесячный платеж доступным для людей. Это полностью законно и оформляется в рамках стандартного кредитного договора.'
    },
    {
      q: 'Можно ли купить квартиру, если первоначальный взнос минимальный?',
      a: 'Да. В июне 2026 года требования к первоначальному взносу стали строже, но мы знаем, как решить эту задачу. Мы подбираем программы рассрочек, где взнос разбивается на части, используем материнский капитал, либо комбинируем траншевую ипотеку. Напишите параметры в квиз выше, и Жанна Великая подберет подходящий вариант под ваши накопления.'
    },
    {
      q: 'Как вы проверяете надежность застройщиков в текущих реалиях?',
      a: 'Мы работаем исключительно по Федеральному закону ФЗ-214 с использованием безопасных эскроу-счетов — ваши деньги хранятся в банке до тех пор, пока дом не будет успешно сдан. Кроме того, наша команда проводит внутренний аудит: мы оцениваем темпы строительства, проектное финансирование и реальное финансовое состояние каждого девелопера в Москве.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" /> FAQ • Часто задаваемые вопросы
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Отвечаем на ваши <span className="text-amber-600">вопросы честно</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Рынок недвижимости Москвы меняется стремительно. Жанна Великая разъясняет ключевые моменты покупки квартир в 2026 году.
          </p>
        </div>

        {/* Список вопросов */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-600 transition"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4 bg-white/50">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
