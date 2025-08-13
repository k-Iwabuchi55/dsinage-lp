'use client'

export default function PricingPlans() {
  const plans = [
    {
      name: 'リースプラン',
      price: '350,000円',
      period: '初期費用（レンタル費、運送費用含む）',
      monthly: '15,000円',
      monthlyDesc: '月額（各種管理費用含む・最小契約12ヶ月）',
      features: [
        'アフター保守業務対応',
        '設置時のハイシュ通信対応（現地調査により要件を決定）',
        '専用アドレス付与',
        'コンテンツ管理費'
      ],
      recommended: false
    },
    {
      name: 'ご購入プラン',
      price: '1,200,000円',
      period: '購入費用（運送費用含みます）',
      monthly: '3,000円',
      monthlyDesc: '月額 (コンテンツ管理費用のみ)',
      features: [
        'アフター保守業務対応',
        '設置時のハイシュ通信対応',
        '専用アドレス付与',
        '初期投資費管理費'
      ],
      recommended: true
    }
  ]

  return (
    <section id="pricing" className="py-20 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <p className="text-brand-gold/60 tracking-widest mb-4">PRICING</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            導入プラン
          </h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-effect rounded-2xl p-8 hover-glow ${
                plan.recommended ? 'ring-2 ring-brand-gold/50' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-brand-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
                    おすすめ
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              
              <div className="mb-6">
                <p className="text-3xl font-bold gradient-text mb-2">{plan.price}</p>
                <p className="text-white/60 text-sm">{plan.period}</p>
              </div>

              <div className="mb-6">
                <p className="text-xl font-semibold text-brand-gold mb-1">月額 {plan.monthly}</p>
                <p className="text-white/60 text-sm">{plan.monthlyDesc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-white/70">
                    <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-semibold tracking-wider transition-all ${
                plan.recommended 
                  ? 'bg-gradient-gold text-brand-black hover-glow' 
                  : 'bg-transparent border border-brand-gold/30 text-brand-gold hover:border-brand-gold/60'
              }`}>
                このプランで申し込む
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60">
            ※価格は全て税抜き表示です。詳細な料金についてはお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  )
}