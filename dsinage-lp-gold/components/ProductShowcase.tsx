'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  const products = [
    {
      id: 1,
      name: 'スタンダードモデル',
      subtitle: 'STANDARD',
      description: '店舗や施設での基本的な情報表示に最適',
      features: ['43インチディスプレイ', 'フルHD対応', 'Wi-Fi接続'],
      image: '/placeholder-product1.jpg'
    },
    {
      id: 2,
      name: 'プレミアムモデル',
      subtitle: 'PREMIUM',
      description: '高画質・大画面で訴求力を最大化',
      features: ['55インチディスプレイ', '4K対応', 'タッチパネル搭載'],
      image: '/placeholder-product2.jpg'
    },
    {
      id: 3,
      name: 'ポータブルモデル',
      subtitle: 'PORTABLE',
      description: 'イベントや移動販売に最適な軽量モデル',
      features: ['32インチディスプレイ', 'バッテリー内蔵', '防水仕様'],
      image: '/placeholder-product3.jpg'
    }
  ]

  return (
    <section ref={ref} id="products" className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-gold/60 tracking-widest mb-4">PRODUCTS</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            製品ラインナップ
          </h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
        </div>

        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center gap-4 mb-12">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`px-8 py-3 rounded-full transition-all ${
                  activeProduct === index 
                    ? 'bg-gradient-gold text-brand-black font-semibold' 
                    : 'bg-transparent text-brand-gold/60 border border-brand-gold/20 hover:border-brand-gold/40'
                }`}
              >
                <span className="text-sm tracking-wider">{product.subtitle}</span>
              </button>
            ))}
          </div>

          <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-gold/5 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <p className="text-brand-gold/60 tracking-widest mb-2">
                  {products[activeProduct].subtitle}
                </p>
                <h3 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {products[activeProduct].name}
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  {products[activeProduct].description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {products[activeProduct].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-gold rotate-45 mr-4"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group relative inline-block">
                  <div className="absolute inset-0 bg-gradient-gold rounded blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative border border-brand-gold/50 text-brand-gold px-8 py-3 rounded hover:bg-brand-gold hover:text-brand-black transition-all tracking-wider font-semibold">
                    詳細を見る
                  </div>
                </button>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gray to-brand-black">
                    <div className="absolute inset-0 bg-gradient-whisky"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-6">
                        <svg className="w-24 h-24 text-brand-gold/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-brand-gold/40 tracking-widest">DIGITAL SIGNAGE</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}