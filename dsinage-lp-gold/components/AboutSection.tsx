'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            D-signage とは<span className="gradient-text">？</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              屋外・屋内対応専用ハードウェアによるアプリ対応のLEDビジョンサービスです。
              日中の明るい場所や夜間でも視認性の高い鮮明な映像と音声で、店頭などでの訴求、集客効果は抜群です。
              <br />
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              また、スマホアプリからコンテンツの切り替え反映が簡単に行え、リアルタイムに効果的な集客、告知などを行うことが可能です。
            </p>
            {/* マーケティング支援 */}
            {/* <div className="mt-6 p-4 bg-brand-gold/5 rounded-lg border border-brand-gold/20">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-xl mr-2">🤝</span>
                マーケティング支援
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white/70 flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>コンテンツ企画の相談</span>
                </li>
                <li className="text-white/70 flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>データ分析レポート</span>
                </li>
                <li className="text-white/70 flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>売上向上アドバイス</span>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="relative">
            <img 
              src="/red-dress-lady.svg" 
              alt="D-signage イメージ" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}