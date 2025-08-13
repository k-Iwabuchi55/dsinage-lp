'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function UseCases() {
  const { ref, isVisible } = useScrollAnimation()
  const cases = [
    {
      icon: '📱',
      title: 'SNS動画をそのまま活用',
      subtitle: 'Social Media Integration',
      description: 'キャストの魅力を最大限に',
      points: [
        'TikTok・Instagram Reelsをそのまま再生',
        '撮影済みの動画素材を有効活用',
        '制作費ゼロで高品質コンテンツ配信',
        '若年層への訴求力アップ'
      ],
      result: '映像制作の費用対効果UP',
      bgGradient: 'from-pink-500/10 to-purple-500/10'
    },
    {
      icon: '🏢',
      title: '複数店舗の一括管理',
      subtitle: 'Multi-Store Management',
      description: 'グループ店舗の統合運営',
      points: [
        '本部から全店舗のコンテンツを一元管理',
        '店舗別・時間帯別の配信スケジュール',
        'エリア限定キャンペーンも簡単設定',
        '緊急告知は全店一斉配信'
      ],
      result: 'マーケティングの運営効率UP',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: '💰',
      title: '広告費用の最適化',
      subtitle: 'Cost Optimization',
      description: '無駄なコストを徹底削減',
      points: [
        'ポスター印刷・張替え費用が不要',
        '24時間365日休まず自動で集客',
        '1台で複数の広告をループ再生',
        '紙代、印刷代カットかつ省電力'
      ],
      result: '広告のコストパフォーマンス向上',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    }
  ]

  return (
    <section id="usecases" ref={ref} className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-gold/60 tracking-widest mb-4">USE CASES</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            活用事例
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            ナイトビジネスにおける利用
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6"></div>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cases.map((useCase, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* 背景グラデーション */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              
              {/* カード本体 */}
              <div className="relative glass-effect rounded-2xl p-8 h-full hover-glow">
                {/* アイコン */}
                <div className="text-5xl mb-6">{useCase.icon}</div>
                
                {/* タイトル */}
                <p className="text-brand-gold/60 text-xs tracking-widest mb-2">{useCase.subtitle}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/70 mb-6">{useCase.description}</p>
                
                {/* ポイントリスト */}
                <ul className="space-y-3 mb-8">
                  {useCase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-white/80 text-sm">
                      <span className="text-brand-gold mr-2 mt-1">▶</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* 結果 */}
                <div className="pt-6 border-t border-brand-gold/20">
                  <p className="text-xs text-brand-gold/60 mb-2">導入効果</p>
                  <p className="text-xl font-bold gradient-text">{useCase.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 実績数値 */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">93%</div>
            <p className="text-white/60 text-sm">導入店舗の売上UP</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2.5倍</div>
            <p className="text-white/60 text-sm">新規来店率</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">60%</div>
            <p className="text-white/60 text-sm">リピート率向上</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24h</div>
            <p className="text-white/60 text-sm">365日稼働</p>
          </div>
        </div> */}


        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            他にも様々な広告効果を期待できます
          </p>
          <a href="#contact" className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-gold rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gradient-gold text-brand-black px-10 py-4 rounded-full font-semibold tracking-wider hover:scale-105 transition-transform">
              導入相談をする
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}