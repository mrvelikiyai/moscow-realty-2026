import React from 'react'
import { UserCheck, ShieldCheck, Sparkles, MessageSquare, Search, FileText, Key, Heart } from 'lucide-react'

export default function About() {
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
      title: 'Консультация и разбор',
      desc: 'Выявляем ваши истинные потребности, определяем комфортный ежемесячный платеж и бюджет.'
    },
    {
      icon: <Search className="h-6 w-6 text-amber-600" />,
      title: 'Анализ рынка и подбор ЖК',
      desc: 'Отбираем 3–5 лучших вариантов из закрытых баз, включая скрытые скидки и старты продаж.'
    },
    {
      icon: <FileText className="h-6 w-6 text-amber-600" />,
      title: 'Одобрение ипотеки',
      desc: 'Подаем документы сразу в несколько банков. Согласуем субсидированные программы от 3.5%.'
    },
    {
      icon: <Key className="h-6 w-6 text-amber-600" />,
      title: 'Сделка и ключи',
      desc: 'Безопасно проводим сделку под ключ. Наша комиссия — 0% (её полностью оплачивает застройщик).'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Карточка риелтора с фото Жанны */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Портретное фото (photo_2026-06-30_23-51-10.jpg) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-slate-900 rounded-3xl transform rotate-3 scale-102 group-hover:rotate-1 group-hover:scale-105 transition duration-500 ease-out z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-square sm:aspect-[4/5]">
              <img 
                src="/zhanna.jpg" 
                alt="Жанна Великая — эксперт по недвижимости" 
                className="w-full h-full object-cover object-top transform group-hover:scale-103 transition duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 p-2 rounded-xl">
                  <UserCheck className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Опыт работы</div>
                  <div className="font-bold text-lg text-amber-500">Более 8 лет</div>
                </div>
              </div>
            </div>
          </div>

          {/* Описание и философия */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-amber-600 uppercase tracking-widest font-bold text-sm">Основатель проекта</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Жанна Великая
            </h2>
            
            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-lg text-slate-700 bg-amber-50/50 py-3 pr-4 rounded-r-xl">
              «Моя главная миссия в проекте Великолепие Жизни — доказать, что современное, качественное жилье в Москве — это не роскошь для избранных, а реальность, доступная для всех. Мы знаем, как использовать субсидии и законы рынка, чтобы вы платили за свою квартиру минимум.»
            </blockquote>

            <p className="text-slate-600 leading-relaxed">
              Рынок новостроек Москвы перегружен информацией, но моя команда видит его насквозь. Мы проводим глубокий аудит застройщиков, находим закрытые скидки и подбираем программы субсидированной ипотеки, которые делают покупку комфортной для любого семейного бюджета.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">100% защита интересов клиента</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Sparkles className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-slate-700">Эксклюзивные преференции</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 шага к покупке квартиры */}
        <div className="pt-8 border-t border-slate-100 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ваш путь к великолепной жизни в 4 шага
            </h3>
            <p className="text-slate-500 text-sm">
              Мы убрали всю бумажную волокиту и сложные переговоры. Процесс покупки квартиры станет для вас понятным и приятным.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-200/50 group-hover:text-amber-100 transition select-none">
                  0{idx + 1}
                </span>
                <div className="bg-white p-3 rounded-xl shadow-sm inline-block mb-4 group-hover:bg-amber-50 transition">
                  {step.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 relative z-10">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Семейный блок (photo_2026-06-30_23-51-06.jpg) */}
        <div className="bg-slate-900 rounded-3xl text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase border border-amber-500/20">
                <Heart className="h-3.5 w-3.5 fill-amber-400" /> Ценности компании
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
                С заботой о будущем <br className="hidden sm:block" /> каждой семьи
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Я убеждена, что покупка квартиры — это не просто квадратные метры или сухая инвестиция. Это фундамент для вашей семьи, место, где растут дети и создаются самые теплые воспоминания. Как семейный человек, я подбираю каждый жилой комплекс так, будто выбираю его для самых близких людей.
              </p>
              <div className="text-sm font-semibold text-amber-500">
                Свяжитесь со мной напрямую для личной консультации: 8 (925) 536-00-95
              </div>
            </div>
            
            {/* Семейное фото */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-800 aspect-[4/3] lg:aspect-square">
              <img 
                src="/family.jpg" 
                alt="Жанна Великая с семьей" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
