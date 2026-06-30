import React from 'react'
import { Sparkles, Home, DollarSign, Percent, TrendingUp } from 'lucide-react'

export default function Cases() {
  const casesList = [
    {
      title: 'Семейная квартира для Марии и её двоих детей',
      tag: 'Семейная ипотека',
      problem: 'Думали, что с бюджетом и первоначальным взносом 2.5 млн ₽ в Москве можно купить только старую "хрущевку" на окраине.',
      solution: 'Подобрали строящийся ЖК комфорт-плюс класса в 10 минутах от метро. Нашли акционную программу субсидирования от застройщика, снизив базовую ставку.',
      result: 'Евро-3 комнатная квартира (62 кв.м) с чистовой отделкой. Ежемесячный платеж составил всего 42 000 ₽ вместо базовых 78 000 ₽.',
      economy: 'Экономия на переплате: ~4.1 млн ₽'
    },
    {
      title: 'Первая студия для студента Павла (инвестиция на будущее)',
      tag: 'Рассрочка / Траншевая ипотека',
      problem: 'Родители хотели купить жилье сыну, но большая часть денег лежала на долгосрочном вкладе под высокий процент, закрывать который было невыгодно.',
      solution: 'Согласовали уникальную траншевую ипотеку "за 1 рубль в месяц" до ввода дома в эксплуатацию. Основная сумма кредита начнется только через 1.5 года.',
      result: 'Студия в современном ЖК внутри МКАД. Вклад спокойно долежал свой срок, принес проценты, которые теперь пойдут на досрочное погашение.',
      economy: 'Сохранен доход по вкладу: 820 000 ₽'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" /> Реальные истории
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Кейсы проекта <span className="text-amber-600">«Великолепие Жизни»</span>
          </h2>
          <p className="text-slate-500 text-sm">
            Посмотрите, как мы решаем сложные задачи и находим решения там, где другие риелторы разводят руками.
          </p>
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {casesList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Тэг */}
                <span className="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-lg">
                  {item.tag}
                </span>
                
                {/* Заголовок кейса */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <div className="h-px bg-slate-100 my-4"></div>

                {/* Было / Стало */}
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-bold text-red-600 uppercase tracking-wider text-[11px] block mb-0.5">Точка А (Проблема):</span>
                    <p className="text-slate-600">{item.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-amber-600 uppercase tracking-wider text-[11px] block mb-0.5">Что сделала Жанна Великая:</span>
                    <p className="text-slate-600">{item.solution}</p>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-600 uppercase tracking-wider text-[11px] block mb-0.5">Точка Б (Результат):</span>
                    <p className="text-slate-800 font-medium">{item.result}</p>
                  </div>
                </div>
              </div>

              {/* Плашка выгоды внизу */}
              <div className="mt-6 bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
                <div className="bg-emerald-500 p-2 rounded-xl text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">Чистая финансовая выгода</div>
                  <div className="text-lg font-black text-emerald-900">{item.economy}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
