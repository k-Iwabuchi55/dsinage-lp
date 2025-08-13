'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-radial from-brand-gold/5 via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-gold/5 to-transparent"></div>

      <div className="relative z-10 section-padding text-center max-w-full">
        <div>
          {/* 問題提起 */}
          {/* <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
              その広告、<span className="gradient-text">本当に見られていますか？</span>
            </h2>
            <p className="text-white/60 text-lg">
              通行人の70%はポスターを見ていません
            </p>
          </div> */}

          {/* ブランド名 */}
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                <span className="gradient-text">D-signage</span>
              </h1>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-brand-gold/60 mb-2 tracking-widest font-light">
            produced by
          </p>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
            D-system
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-brand-gold/30"></div>
            <div className="w-2 h-2 bg-brand-gold rotate-45"></div>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-brand-gold/30"></div>
          </div>

          {/* 導入メリット部分は BenefitsSection コンポーネントに移動しました */}
          {/* AboutSectionとの順序を入れ替えるために独立させています */}

          <div className="mt-16">
            <a href="#contact" className="inline-block relative group">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-gold text-brand-black px-10 py-4 rounded-full font-semibold tracking-wider hover:scale-105 transition-transform">
                ご相談・お問い合わせ
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-brand-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}