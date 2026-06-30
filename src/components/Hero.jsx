import React, { useState } from 'react'
import { CheckCircle, ArrowRight, Building, Wallet, Calendar, Clock } from 'lucide-react'

export default function Hero() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    rooms: '',
    budget: '',
    deadline: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setStep(prev => prev + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.phone) return

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Левая колонка: Текст и философия доступности */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full text-sm font-medium border border-amber-100">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse"></span>
            Великолепие Жизни — Недвижимость, доступная для всех
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Своя квартира в Москве — <br/>
            это реальность <span className="text-amber-600">для каждого</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Помогаем находить и выгодно покупать квартиры в новостройках под любой бюджет. Подберем идеальный ЖК, согласуем субсидированную ипотеку и найдем скрытые скидки от застройщиков.
          </p>
          
          <ul className="space-y-3 pt-2">
            {[
              'Работаем со всеми сегментами — от доступного комфорт-класса до премиум-проектов',
              '0% комиссия — подбор, показы и одобрение ипотеки для вас полностью бесплатны',
              'Знаем, как купить квартиру с минимальным первоначальным взносом в 2026 году'
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Правая колонка: Квиз */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 md:p-8 relative overflow-hidden">
            
            {!isSubmitted && (
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                <div 
                  className="h-full bg-amber-600 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            )}

            {!isSubmitted ? (
              <>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex justify-between">
                  <span>Шаг {step} из 3</span>
                  <span>Готово: {Math.round(((step - 1) / 3) * 100)}%</span>
                </div>

                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Building className="h-5 w-5 text-amber-600" /> Какая квартира вас интересует?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Студия', '1-комнатная квартира', '2-комнатная квартира', '3-комнатная и более', 'Рассматриваю любые варианты'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('rooms', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-amber-600" /> Комфортный бюджет покупки?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['До 10 млн ₽', '10 – 15 млн ₽', '15 – 25 млн ₽', 'От 25 млн ₽', 'Нужен расчет ипотеки под мой доход'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('budget', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-amber-600" /> Когда планируете переезд?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Нужен готовый дом с ключами сразу', 'В течение этого года (2026)', 'В течение 1-2 лет (дешевле на этапе стройки)', 'Ищу варианты для инвестиций'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('deadline', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-600" /> Куда направить подборку ЖК и расчеты?
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      Мы зафиксировали ваши ответы. Оставьте номер телефона — эксперт проекта «Великолепие Жизни» свяжется с вами.
                    </p>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-lg text-center"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-amber-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Секунду...' : 'Получить варианты и расчет платежа'}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь на обработку данных. Для экспресс-консультаций: 8 (925) 536-00-95.
                    </p>
                  </form>
                )}
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                  <CheckCircle className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Отличный выбор!</h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto">
                  Данные приняты командой проекта «Великолепие Жизни». Мы уже готовим персональный каталог новостроек под ваши критерии и бюджет. Позвоним вам в течение 10 минут!
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
