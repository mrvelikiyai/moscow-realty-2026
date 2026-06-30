import React from 'react'
import { Sparkles, ArrowUpRight, TrendingUp, UserCheck, Key } from 'lucide-react'

export default function Cases() {
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
        </div>

        {/* Bento Grid Сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Кейс 1: Крупная карточка (8 колонок из 12) */}
          <div className="lg:col-span-8 bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Семейная ипотека
                </span>
                <UserCheck className="h-5 w-5 text-slate-500" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight max-w-xl">
                Квартира для Марии и двоих детей: из «хрущевки» в комфорт-класс
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-400">
                <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                  <span className="text-red-500 font-bold block text-[10px] uppercase mb-1">С чем пришли:</span>
                  Бюджет 2.5 млн ₽. Думали, что в Москве доступна только старая вторичка на окраине.
                </div>
                <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                  <span className="text-emerald-500 font-bold block text-[10px] uppercase mb-1">Что сделала Жанна:</span>
                  Подобрали евро-3 в новом ЖК у метро. Подключили закрытую субсидию от застройщика.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/10 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/20">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Чистая экономия</div>
                  <div className="text-lg font-black text-emerald-400">~4.1 млн ₽ на переплате</div>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-semibold bg-slate-800 px-3 py-1.5 rounded-xl">
                Платеж: 42 000 ₽/мес
              </span>
            </div>
          </div>

          {/* Кейс 2: Компактная высокая карточка (4 колонки из 12) */}
          <div className="lg:col-span-4 bg-slate-50 rounded-3xl p-8 flex flex-col justify-between border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Умная рассрочка
                </span>
                <Key className="h-5 w-5 text-slate-400" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                Студия для студента Павла с сохранением процентов по вкладу
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                Родители Павла не хотели закрывать выгодный вклад. Жанна Великая согласовала траншевую рассрочку «за 1 рубль» до конца строительства. Вклад принес доход, который пойдет на досрочное закрытие.
              </p>
            </div>

            <div className="mt-8 bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
              <div className="bg-emerald-500 text-white p-2 rounded-xl">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-800 font-bold uppercase">Сохраненный доход</div>
                <div className="text-base font-black text-emerald-900">820 000 ₽</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
