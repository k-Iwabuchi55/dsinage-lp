'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    area: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section id="contact" className="py-20 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            お問い合わせ
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4"></div>
          <p className="text-white/60">導入のご相談・お見積もりはお気軽にお問い合わせください</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white/80 mb-2">会社名</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="山田太郎"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="area" className="block text-white/80 mb-2">エリア（都道府県） *</label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-800">選択してください</option>
                  <option value="北海道" className="bg-gray-800">北海道</option>
                  <option value="青森県" className="bg-gray-800">青森県</option>
                  <option value="岩手県" className="bg-gray-800">岩手県</option>
                  <option value="宮城県" className="bg-gray-800">宮城県</option>
                  <option value="秋田県" className="bg-gray-800">秋田県</option>
                  <option value="山形県" className="bg-gray-800">山形県</option>
                  <option value="福島県" className="bg-gray-800">福島県</option>
                  <option value="茨城県" className="bg-gray-800">茨城県</option>
                  <option value="栃木県" className="bg-gray-800">栃木県</option>
                  <option value="群馬県" className="bg-gray-800">群馬県</option>
                  <option value="埼玉県" className="bg-gray-800">埼玉県</option>
                  <option value="千葉県" className="bg-gray-800">千葉県</option>
                  <option value="東京都" className="bg-gray-800">東京都</option>
                  <option value="神奈川県" className="bg-gray-800">神奈川県</option>
                  <option value="新潟県" className="bg-gray-800">新潟県</option>
                  <option value="富山県" className="bg-gray-800">富山県</option>
                  <option value="石川県" className="bg-gray-800">石川県</option>
                  <option value="福井県" className="bg-gray-800">福井県</option>
                  <option value="山梨県" className="bg-gray-800">山梨県</option>
                  <option value="長野県" className="bg-gray-800">長野県</option>
                  <option value="岐阜県" className="bg-gray-800">岐阜県</option>
                  <option value="静岡県" className="bg-gray-800">静岡県</option>
                  <option value="愛知県" className="bg-gray-800">愛知県</option>
                  <option value="三重県" className="bg-gray-800">三重県</option>
                  <option value="滋賀県" className="bg-gray-800">滋賀県</option>
                  <option value="京都府" className="bg-gray-800">京都府</option>
                  <option value="大阪府" className="bg-gray-800">大阪府</option>
                  <option value="兵庫県" className="bg-gray-800">兵庫県</option>
                  <option value="奈良県" className="bg-gray-800">奈良県</option>
                  <option value="和歌山県" className="bg-gray-800">和歌山県</option>
                  <option value="鳥取県" className="bg-gray-800">鳥取県</option>
                  <option value="島根県" className="bg-gray-800">島根県</option>
                  <option value="岡山県" className="bg-gray-800">岡山県</option>
                  <option value="広島県" className="bg-gray-800">広島県</option>
                  <option value="山口県" className="bg-gray-800">山口県</option>
                  <option value="徳島県" className="bg-gray-800">徳島県</option>
                  <option value="香川県" className="bg-gray-800">香川県</option>
                  <option value="愛媛県" className="bg-gray-800">愛媛県</option>
                  <option value="高知県" className="bg-gray-800">高知県</option>
                  <option value="福岡県" className="bg-gray-800">福岡県</option>
                  <option value="佐賀県" className="bg-gray-800">佐賀県</option>
                  <option value="長崎県" className="bg-gray-800">長崎県</option>
                  <option value="熊本県" className="bg-gray-800">熊本県</option>
                  <option value="大分県" className="bg-gray-800">大分県</option>
                  <option value="宮崎県" className="bg-gray-800">宮崎県</option>
                  <option value="鹿児島県" className="bg-gray-800">鹿児島県</option>
                  <option value="沖縄県" className="bg-gray-800">沖縄県</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="03-1234-5678"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white/80 mb-2">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition"
                placeholder="example@email.com"
              />
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition resize-none"
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
            <p className="text-2xl font-bold gradient-text mb-2">03-5843-3773</p>
            <p className="text-white/60 text-sm">受付時間：平日 10:00〜19:00</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-white/10">
        <div className="section-padding text-center">
          <p className="text-white/40">© 2025 D-signage. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}