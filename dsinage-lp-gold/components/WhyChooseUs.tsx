'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation()
  const reasons = [
    {
      icon: '🎯',
      title: 'マーケティングコンサル込み',
      points: [
        '単なる機器レンタルではない',
        '売上向上の戦略まで一緒に考える',
        'データ分析に基づく改善提案'
      ]
    },
    {
      icon: '📱',
      title: 'SNS動画をそのまま活用',
      points: [
        'TikTok、Instagram Reelsの素材を無駄にしない',
        '追加の制作費用不要',
        '若年層への訴求力を最大化'
      ]
    },
    {
      icon: '🏢',
      title: '複数店舗の一括管理',
      points: [
        '本部から全店舗を統合管理',
        '店舗ごとの個別対応も可能',
        'リアルタイムで全店一斉更新'
      ]
    },
    {
      icon: '💰',
      title: '広告の費用対効果最適化',
      points: [
        'ポスター印刷・張替えコスト削減',
        '24時間365日休まず稼働',
        '1台で複数広告をループ再生'
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 relative bg-gradient-to-b from-brand-black via-gray-900/50 to-brand-black">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-gold/60 tracking-widest mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            なぜD-signageが選ばれるのか
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            競合他社との決定的な違い
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6"></div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 hover-glow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <ul className="space-y-2">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="text-white/70 text-sm flex items-start">
                    <span className="text-brand-gold mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 緊急性の訴求 */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-effect rounded-full px-8 py-4">
            <p className="text-brand-gold font-semibold text-lg">
              🔥 今なら導入サポート無料！先着10社限定
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}