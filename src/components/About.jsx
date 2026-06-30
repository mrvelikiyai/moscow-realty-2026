import React from 'react'
import { Award, ShieldCheck, Heart, ArrowUpRight, Users } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        
        {/* Заголовок раздела */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Авторский проект <span className="text-amber-600">Жанны Великой</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            «Великолепие Жизни» — это не просто агентство недвижимости. Это философия поиска идеального дома, где каждый член семьи будет счастлив.
          </p>
        </div>

        {/* ПЕРВЫЙ БЛОК: Сама Жанна и её ценности */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Фото Жанны */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden min-h-[350px] lg:min-h-full relative shadow-xl border border-slate-200 group animate-fade-in-up delay-100">
            <img 
              src="/zhanna.jpg" 
              alt="Жанна Великая" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-2xl font-black tracking-wide">Жанна Великая</div>
              <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mt-1">
                Основатель проекта
              </p>
            </div>
          </div>

          {/* Текст и bento-достижения */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-md space-y-4 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Индивидуальный подход, которого вы достойны
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Мы создали проект «Великолепие Жизни» с одной целью — доказать, что покупка недвижимости в Москве не должна превращаться в стресс и пожизненную кабалу. Мы глубоко погружаемся в финансовую ситуацию каждого клиента и подбираем варианты как для себя.
              </p>
            </div>

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
          </div>

        </div>

        {/* ВТОРОЙ БЛОК (НОВЫЙ): История про Семью и Семейное фото */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Описание семейных ценностей */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/60 shadow-md flex flex-col justify-between order-2 lg:order-1 animate-fade-in-up delay-200">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-amber-200/40 w-fit">
                <Heart className="h-3..5 w-3.5 text-amber-600 fill-amber-600/20" /> Главная мотивация
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Семья — основа «Великолепия Жизни»
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Как любящая жена и мама, я прекрасно знаю, как важен уютный домашний очаг. Собственная просторная квартира — это фундамент, на котором строится спокойствие семьи, растут счастливые дети и создаются лучшие воспоминания. 
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Именно поэтому девиз нашего проекта — <strong className="text-slate-900 font-bold">«Недвижимость, доступная для всех»</strong>. Мы боремся за лучшие условия для каждой семьи, которая обращается к нам, помогая обрести свое родовое гнездо без непосильных переплат.
              </p>
            </div>

            <button 
              onClick={() => {
                document.getElementById('root').scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full lg:w-auto bg-slate-900 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs mt-6"
            >
              Подобрать квартиру для вашей семьи
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Карточка с Семейным Фото */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden min-h-[350px] lg:min-h-full relative shadow-xl border border-slate-200 group order-1 lg:order-2 animate-fade-in-up delay-100">
            <img 
              src="/family.jpg" 
              alt="Семья Жанны Великой" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/20">
                <Users className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-wide">Моя семья — моё вдохновение</div>
                <p className="text-xs text-slate-300">То, ради чего создавался этот проект</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
