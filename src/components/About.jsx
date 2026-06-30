import React from 'react'
import { Award, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Левая ячейка: Фотография Жанны Великой с эффектом "Zoom" при наведении */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full relative shadow-xl border border-slate-200 group animate-fade-in-up delay-100">
            <img 
              src="/zhanna.jpg" 
              alt="Жанна Великая" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Градиент поверх фото для читаемости надписи */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-2xl font-black tracking-wide">Жанна Великая</div>
              <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mt-1">
                Основатель проекта «Великолепие Жизни»
              </p>
            </div>
          </div>

          {/* Правая ячейка: Описание и Bento-достижения */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Текстовая плашка */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-md space-y-4 animate-fade-in-up delay-200">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Индивидуальный подход, <span className="text-amber-600">которого вы достойны</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Мы создали проект «Великолепие Жизни» с одной целью — доказать, что покупка недвижимости в Москве не должна превращаться в стресс и пожизненную кабалу. Мы глубоко погружаемся в финансовую ситуацию каждого клиента и подбираем варианты как для себя.
              </p>
            </div>

            {/* Сетка достижений (Мини-бенто) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm animate-fade-in-up delay-300 flex items-start gap-4">
                <div className="bg-amber-500/10 text-amber-600 p-3 rounded-xl border border-amber-500/20 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Экспертная аналитика</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Знаем реальную ситуацию по каждому ЖК Москвы и скрытые пулы квартир.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm animate-fade-in-up delay-400 flex items-start gap-4">
                <div className="bg-slate-900 text-white p-3 rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Полная безопасность</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Работаем строго в рамках ФЗ-214 через защищенные эскроу-счета.
                  </p>
                </div>
              </div>

            </div>

            {/* Нижняя интерактивная кнопка-призыв */}
            <button 
              onClick={() => {
                document.getElementById('root').scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-slate-900 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-lg transition duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs animate-fade-in-up delay-400"
            >
              Подобрать квартиру с Жанной
              <ArrowUpRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}
