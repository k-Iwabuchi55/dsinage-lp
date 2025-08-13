'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PricingPlans() {
  const { ref, isVisible } = useScrollAnimation()
  const plans = [
    {
      name: '単体運用プラン',
      subtitle: 'Single Store',
      price: '月額 29,800円〜',
      period: '1店舗のシンプル運用',
      features: [
        'スマホアプリでの広告簡単切り替え',
        '料金案内の表示',
        'イベント・キャンペーン告知',
      ],
      benefits: [
        '新規客の入店率UP',
        'イベント集客の増加',
        '店舗認知度向上'
      ],
      recommended: false
    },
    {
      name: 'クラウド統合管理プラン',
      subtitle: 'Multi Store Cloud',
      price: '月額 49,800円〜',
      period: '複数店舗・グループ店舗向け',
      features: [
        '全店舗の一括コンテンツ管理',
        'タイムセール情報を即座に反映',
        '季節・時間帯に応じた配信切替',
        '店舗別・時間別の配信設定',
        '緊急告知の一斉配信',
      ],
      benefits: [
        'グループ全体の集客向上',
        '広告運営のタイムロスを削減',
        'ブランド統一感の向上'
      ],
      recommended: true
    }
  ]

  return (
    <section ref={ref} id="pricing" className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-light-blue/60 tracking-widest mb-4">PRICING PLAN</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            導入プラン
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            各ビジネスに特化した集客ソリューション
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-light-blue to-transparent mx-auto mt-6"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-effect rounded-2xl p-8 hover-glow flex flex-col ${
                plan.recommended ? 'ring-2 ring-brand-light-blue/50' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-blue text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                    〜おすすめ〜
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <p className="text-brand-light-blue/60 text-sm tracking-widest mb-2">{plan.subtitle}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-white/60 text-sm">{plan.period}</p>
              </div>
              
              <div className="mb-8 pb-6 border-b border-brand-light-blue/20">
                {/* <p className="text-3xl font-bold gradient-text">{plan.price}</p> */}
              </div>

              <div className="mb-6">
                <p className="text-brand-light-blue font-semibold mb-4">こんな方におすすめ</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-white/80 text-sm">
                      <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 bg-brand-light-blue/5 rounded-lg">
                <p className="text-brand-light-blue font-semibold mb-3 text-sm">導入効果</p>
                <ul className="space-y-2">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-white/70 text-sm">
                      <span className="text-brand-light-blue mr-2">▶</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-grow"></div>

              <button className={`w-full py-3 rounded-full font-semibold tracking-wider transition-all ${
                plan.recommended 
                  ? 'bg-gradient-blue text-white hover-glow' 
                  : 'bg-transparent border border-brand-light-blue/30 text-brand-light-blue hover:border-brand-light-blue/60'
              }`}>
                詳細を聞いてみる
              </button>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="glass-effect rounded-xl p-6">
            <p className="text-brand-light-blue font-semibold mb-3">こんな店舗におすすめ</p>
            <p className="text-white/70 text-sm leading-relaxed">
              店舗の魅力を最大限に引き出し、新規客獲得と売上向上を実現したい店舗
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}