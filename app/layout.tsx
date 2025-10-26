import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Playground',
  description: 'Next.jsを学習するためのサンプルアプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">Next.js Playground</h1>
            <ul className="nav-links">
              <li><a href="/">ホーム</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">ブログ</a></li>
              <li><a href="/users">ユーザー</a></li>
            </ul>
          </div>
        </nav>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 Next.js Playground - 学習用サンプルアプリケーション</p>
        </footer>
      </body>
    </html>
  )
}
