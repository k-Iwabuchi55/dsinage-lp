'use client'

import { useState } from 'react'

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      id: 1,
      name: 'スタンダードモデル',
      description: '店舗や施設での基本的な情報表示に最適',
      features: ['43インチディスプレイ', 'フルHD対応', 'Wi-Fi接続'],
      image: '/placeholder-product1.jpg'
    },
    {
      id: 2,
      name: 'プレミアムモデル',
      description: '高画質・大画面で訴求力を最大化',
      features: ['55インチディスプレイ', '4K対応', 'タッチパネル搭載'],
      image: '/placeholder-product2.jpg'
    },
    {
      id: 3,
      name: 'ポータブルモデル',
      description: 'イベントや移動販売に最適な軽量モデル',
      features: ['32インチディスプレイ', 'バッテリー内蔵', '防水仕様'],
      image: '/placeholder-product3.jpg'
    }
  ]

  return (
    <section id="products" className="py-20 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            製品ラインナップ
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`glass-effect rounded-xl p-6 text-left transition-all ${
                  activeProduct === index ? 'ring-2 ring-cyan-400 scale-105' : 'hover:scale-102'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/60 text-sm">{product.description}</p>
              </button>
            ))}
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {products[activeProduct].name}
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  {products[activeProduct].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {products[activeProduct].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/70">
                      <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-blue text-white px-6 py-3 rounded-full hover-glow">
                  詳細を見る
                </button>
              </div>
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500">製品画像</p>
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