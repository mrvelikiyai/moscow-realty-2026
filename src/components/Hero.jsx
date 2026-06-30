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
    
    // Имитируем быструю отправку формы (задержка 500мс для красивого эффекта загрузки)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Левая колонка: Текст и УТП */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Актуальные программы субсидирования на 2026 год
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Подбор новостроек в Москве <br className="hidden sm:block"/>
            с семейной ипотекой от <span className="text-blue-600 font-black">3.5%</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Пройдите короткий тест за 1 минуту, получите закрытый каталог ЖК под ваши критерии и расчет ежемесячного платежа.
          </p>
          
          <ul className="space-y-3 pt-2">
            {[
              'Доступ к закрытым продажам до официального старта',
              '0% комиссия — наши услуги полностью оплачивают застройщики',
              'Одобрение ипотеки в сложной ситуации в 94% случаев'
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Правая колонка: Квиз-форма */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 relative overflow-hidden">
            
            {/* Полоса прогресса */}
            {!isSubmitted && (
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            )}

            {!isSubmitted ? (
              <>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex justify-between">
                  <span>Вопрос {step} из 3</span>
                  <span>Готово: {Math.round(((step - 1) / 3) * 100)}%</span>
                </div>

                {/* Шаг 1: Комнатность */}
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Building className="h-5 w-5 text-blue-600" /> Какая квартира интересует?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Студия', '1-комнатная', '2-комнатная', '3-комнатная+', 'Свободная планировка'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('rooms', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Шаг 2: Бюджет */}
                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-blue-600" /> Планируемый budget покупки?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['До 10 млн ₽', '10 – 15 млн ₽', '15 – 25 млн ₽', 'От 25 млн ₽', 'Пока не определился'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('budget', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Шаг 3: Срок сдачи */}
                {step === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" /> Рассматриваемый срок сдачи?
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {['Уже сдан (готовое)', 'В этом году (2026)', 'В течение 1-2 лет', 'Для инвестиций (на старте)'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('deadline', opt)}
                          className="w-full text-left px-4 py-3 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 rounded-xl font-medium text-slate-700 transition"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Шаг 4: Контакты */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" /> Куда прислать подборку?
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      Мы зафиксировали ваши ответы. Введите номер телефона, чтобы завершить расчет.
                    </p>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-lg text-center"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Секунду...' : 'Получить каталог и расчет'}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с ФЗ-152.
                    </p>
                  </form>
                )}
              </>
            ) : (
              /* Экран Успеха */
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Заявка принята!</h3>
                <p className="text-slate-600 max-w-xs mx-auto">
                  Спасибо! Мы зафиксировали ваши ответы. Наш эксперт по недвижимости свяжется с вами в течение 10 минут.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
