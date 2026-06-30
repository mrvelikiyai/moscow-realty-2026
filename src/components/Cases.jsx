import React from 'react'
import { Sparkles, TrendingUp, UserCheck, HelpCircle } from 'lucide-react'

export default function Cases() {
  const casesList = [
    {
      tag: 'Семейная ипотека',
      title: 'Квартира для Марии и двоих детей: из «хрущевки» в комфорт-класс',
      before: 'Бюджет 2.5 млн ₽. Думали, что в Москве доступна только старая вторичка на окраине.',
      action: 'Подобрали евро-3 в новом ЖК у метро. Подключили закрытую субсидию от застройщика, снизив базовую ставку.',
      after: 'Евро-3 комнатная квартира (62 кв.м) с готовой чистовой отделкой. Ежемесячный платеж составил всего 42 000 ₽.',
      economy: 'Экономия на переплате: ~4.1 млн ₽'
    },
    {
      tag: 'Умная рассрочка',
      title: 'Студия для студента Павла с сохранением процентов по вкладу',
      before: 'Родители не хотели закрывать выгодный вклад под высокий %, теряя накопленный доход.',
      action: 'Согласовали траншевую ипотеку «за 1 рубль в месяц» до момента ввода дома в эксплуатацию.',
      after: 'Студия внутри МКАД. Вклад спокойно долежал свой срок, принес проценты, которые теперь пойдут на досрочное погашение.',
      economy: 'Сохранен доход по вкладу: 820 000 ₽'
    },
    {
      tag: 'Инвестиции',
      title: 'Покупка квартиры для молодой семьи Олега и Ирины на будущее',
      before: 'Искали ликвидный объект для старта самостоятельной жизни, но боялись переплат по рыночным ставкам.',
      action: 'Подобрали строящийся ЖК в перспективном районе. Использовали комбинированную программу субсидирования.',
      after: 'Просторная 1-комнатная квартира с панорамными окнами. Комфортный платеж, который не бьет по семейному бюджету.',
      economy: 'Снижение платежа на 45% от базового'
    }
  ]

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="mb-16 space-y-4 max-w-xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-200/50">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Истории успеха
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
            Реальные кейсы <br />
            проекта <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">«Великолепие Жизни»</span>
          </h2>
          <p className="text-slate-500 text-sm pt-2">
            Посмотрите, как Жанна Великая находит решения там, где другие риелторы разводят руками.
          </p>
        </div>

        {/* Единая гармоничная Bento-сетка из 3 карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {casesList.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between animate-fade-in-up delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-5">
                {/* Шапка карточки */}
                <div className="flex items-center justify-between">
                  <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                  <UserCheck className="h-4 w-4 text-slate-400" />
                </div>
                
                {/* Заголовок */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug min-h-[56px]">
                  {item.title}
                </h3>

                <div className="h-px bg-slate-200/60 my-2"></div>

                {/* Пункты: Было / Стало */}
                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-bold text-red-600 uppercase tracking-wider text-[10px] block mb-0.5">Точка А (Проблема):</span>
                    <p className="text-slate-600">{item.before}</p>
                  </div>
                  <div>
                    <span className="font-bold text-amber-600 uppercase tracking-wider text-[10px] block mb-0.5">Решение Жанны Великой:</span>
                    <p className="text-slate-600">{item.action}</p>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-600 uppercase tracking-wider text-[10px] block mb-0.5">Точка Б (Результат):</span>
                    <p className="text-slate-800 font-medium">{item.after}</p>
                  </div>
                </div>
              </div>

              {/* Единая нижняя плашка выгоды */}
              <div className="mt-6 bg-emerald-50 border border-emerald-100 p-3.5 rounded-xl flex items-center gap-3">
                <div className="bg-emerald-500 text-white p-2 rounded-lg shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[9px] text-emerald-800 font-bold uppercase tracking-wider">Чистая выгода</div>
                  <div className="text-sm font-black text-emerald-900">{item.economy}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
