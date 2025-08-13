import type { Metadata } from 'next'
import { Playfair_Display, Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
})
const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: 'D-signage | デジタルサイネージで新しい広告体験を',
  description: 'D-signageは最先端のデジタルサイネージソリューションを提供。高画質ディスプレイと簡単な操作で、あなたのビジネスを次のレベルへ。',
  keywords: 'デジタルサイネージ, digital signage, 広告, ディスプレイ, D-signage',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'D-signage | デジタルサイネージで新しい広告体験を',
    description: 'D-signageは最先端のデジタルサイネージソリューションを提供',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${playfair.variable} ${notoSerifJP.variable} font-serif overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}