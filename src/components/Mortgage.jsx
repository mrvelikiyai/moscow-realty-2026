import React, { useState } from 'react'
import { Percent, Wallet, ArrowUpRight } from 'lucide-react'

export default function Mortgage() {
  const [active, setActive] = useState('family')
  
  const data = {
    family: { title: 'Семейная ипотека', rate: '3.5%', desc: 'Для семей с детьми' },
    subsidized: { title: 'Субсидии', rate: '4.5%', desc: 'От застройщика' },
    installments: { title: 'Рассрочка', rate: '0%', desc: 'Без переплат' }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-10">Программы 2026</h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(data).map(([key, val]) => (
            <div 
              key={key}
              onClick={() => setActive(key)}
              className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${
                active === key 
                  ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' 
                  : 'bg-white hover:shadow-lg border-slate-200'
              }`}
            >
              <div className={`p-3 rounded-2xl w-fit mb-6 ${active === key ? 'bg-amber-500' : 'bg-slate-100'}`}>
                <Percent className={`h-6 w-6 ${active === key ? 'text-slate-900' : 'text-slate-600'}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className={`text-sm mb-6 ${active === key ? 'text-slate-400' : 'text-slate-500'}`}>{val.desc}</p>
              <div className={`text-3xl font-black ${active === key ? 'text-amber-400' : 'text-amber-600'}`}>
                {val.rate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
