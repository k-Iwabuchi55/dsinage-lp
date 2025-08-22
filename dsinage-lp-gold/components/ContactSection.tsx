'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。担当者より連絡させていただきます。')
  }

  return (
    <section ref={ref} id="contact" className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            お問い合わせ
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>
          <p className="text-white/60">導入のご相談・お見積もりはお気軽にお問い合わせください</p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white/80 mb-2">会社・店舗名 *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-brand-gold/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 transition"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">お名前 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-brand-gold/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 transition"
                  placeholder="山田太郎"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">メールアドレス *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-brand-gold/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 transition"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2">電話番号 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-brand-gold/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 transition"
                  placeholder="03-1234-5678"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white/80 mb-2">お問い合わせ内容 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-brand-gold/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 transition resize-none"
                placeholder="導入を検討している製品やご質問をご記入ください"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-blue text-white py-4 rounded-full font-semibold hover-glow transition"
            >
              送信する
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">お電話でのお問い合わせ</p>
            <p className="text-2xl font-bold gradient-text mb-2">03-1234-5678</p>
            <p className="text-white/60 text-sm">受付時間：平日 10:00〜19:00</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-white/10">
        <div className="section-padding text-center">
          <p className="text-white/40">© 2024 D-signage. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}