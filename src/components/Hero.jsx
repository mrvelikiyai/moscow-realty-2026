import React, { useState } from 'react'
import { CheckCircle, ArrowRight, Building, Wallet, Calendar, Clock, Sparkles } from 'lucide-react'

export default function Hero() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({ rooms: '', budget: '', deadline: '', phone: '' })
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
    <section className="relative py-16 md:py-24 bg-slate-50 overflow-hidden border-b border-slate-100">
      {/* Дизайнерские светящиеся сферы на фоне */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] bg-slate-300/40 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Текстовый блок с плавной анимацией */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 px-4 py-2 rounded-full text-xs font-semibold border border-amber-200/60 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-spin" style={{ animationDuration: '4s' }} />
            Великолепие Жизни — Июнь 2026
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Своя квартира в Москве — <br/>
            это реальность <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">для каждого</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Помогаем находить и выгодно покупать квартиры в новостройках под любой бюджет. Подберем идеальный ЖК, согласуем субсидированную ипотеку и найдем скрытые скидки от застройщиков.
          </p>
          
          <ul className="space-y-4 pt-2">
            {[
              'Работаем со всеми сегментами — от доступного комфорт-класса до премиум-проектов',
              '0% комиссия — подбор, показы и одобрение для вас полностью бесплатны',
              'Знаем, как купить квартиру с минимальным первоначальным взносом в 2026 году'
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium transform hover:translate-x-1 transition duration-300">
                <CheckCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Карточка квиза с эффектом парения (hover:-translate-y-1) */}
        <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-200/80 border border-white p-6 md:p-8 relative overflow-hidden transform hover:-translate-y-1 transition-all duration-500">
            
            {!isSubmitted && (
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            )}

            {!isSubmitted ? (
              <>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex justify-between">
                  <span>Шаг {step} из 3</span>
                  <span className="text-amber-600">Готово: {Math.round(((step - 1) / 3) * 100)}%</span>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <Building className="h-5 w-5 text-amber-600" /> Какая квартира вас интересует?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Студия', '1-комнатная квартира', '2-комнатная квартира', '3-комнатная и более', 'Рассматриваю любые варианты'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('rooms', opt)}
                          className="w-full text-left px-5 py-3.5 border border-slate-200/80 bg-white hover:border-amber-500 hover:bg-amber-50/30 active:scale-[0.99] rounded-2xl font-semibold text-slate-700 shadow-sm hover:shadow transition duration-200"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-amber-600" /> Комфортный бюджет покупки?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['До 10 млн ₽', '10 – 15 млн ₽', '15 – 25 млн ₽', 'От 25 млн ₽', 'Нужен расчет ипотеки под мой доход'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('budget', opt)}
                          className="w-full text-left px-5 py-3.5 border border-slate-200/80 bg-white hover:border-amber-500 hover:bg-amber-50/30 active:scale-[0.99] rounded-2xl font-semibold text-slate-700 shadow-sm hover:shadow transition duration-200"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-amber-600" /> Когда планируете переезд?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Нужен готовый дом с ключами сразу', 'В течение этого года (2026)', 'В течение 1-2 лет (дешевле на этапе стройки)', 'Ищу варианты для инвестиций'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('deadline', opt)}
                          className="w-full text-left px-5 py-3.5 border border-slate-200/80 bg-white hover:border-amber-500 hover:bg-amber-50/30 active:scale-[0.99] rounded-2xl font-semibold text-slate-700 shadow-sm hover:shadow transition duration-200"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-600" /> Куда направить расчеты?
                    </h3>
                    <p className="text-sm text-slate-500">
                      Мы зафиксировали ваши ответы. Оставьте номер телефона — эксперт проекта «Великолепие Жизни» свяжется с вами.
                    </p>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 font-bold text-xl text-center bg-slate-50/50 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-amber-600/20 active:scale-[0.98] transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Секунду...' : 'Получить расчет платежа'}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь на обработку данных. Экспресс-консультация: 8 (925) 536-00-95.
                    </p>
                  </form>
                )}
              </>
            ) : (
              <div className="text-center py-10 space-y-4 animate-fade-in-up">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-inner">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Данные приняты!</h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Команда проекта «Великолепие Жизни» уже готовит персональный каталог под ваши критерии. Позвоним вам в течение 10 минут!
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
