import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Next.jsへようこそ！</h1>
      <p className="page-description">
        このアプリケーションは、Next.jsの主要な機能を学習するためのサンプルプログラムです。
      </p>

      <div className="grid">
        <div className="card">
          <h2>📄 ページルーティング</h2>
          <p>
            Next.jsのApp Routerを使用した自動ルーティングを体験できます。
            <code>app</code>ディレクトリ内のファイル構造がそのままURLになります。
          </p>
          <Link href="/about" className="button" style={{ marginTop: '1rem' }}>
            Aboutページへ
          </Link>
        </div>

        <div className="card">
          <h2>🔗 動的ルーティング</h2>
          <p>
            URLパラメータを使った動的なページ生成を学べます。
            ブログ記事やユーザープロフィールなど、動的なコンテンツに最適です。
          </p>
          <Link href="/blog" className="button" style={{ marginTop: '1rem' }}>
            ブログページへ
          </Link>
        </div>

        <div className="card">
          <h2>🌐 API Routes</h2>
          <p>
            Next.jsでバックエンドAPIを作成する方法を学べます。
            サーバーレス関数として動作し、簡単にAPIを構築できます。
          </p>
          <Link href="/users" className="button" style={{ marginTop: '1rem' }}>
            ユーザーAPIを見る
          </Link>
        </div>

        <div className="card">
          <h2>⚡ サーバーコンポーネント</h2>
          <p>
            React Server Componentsを使用したサーバーサイドレンダリングを体験できます。
            パフォーマンスとSEOに優れています。
          </p>
          <code style={{ display: 'block', marginTop: '0.5rem' }}>
            デフォルトでサーバーコンポーネント
          </code>
        </div>

        <div className="card">
          <h2>🎨 スタイリング</h2>
          <p>
            CSS Modulesやグローバルスタイルを使用したスタイリング方法を学べます。
            Tailwind CSSなど、お好みのスタイリング手法も簡単に導入できます。
          </p>
        </div>

        <div className="card">
          <h2>📦 データフェッチング</h2>
          <p>
            サーバーコンポーネントでのデータ取得、クライアントコンポーネントでのインタラクティブな機能を学べます。
          </p>
        </div>
      </div>

      <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>学習のポイント</h2>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>ファイルベースルーティング:</strong> <code>app</code>ディレクトリの構造がそのままルートになります</li>
          <li><strong>レイアウト:</strong> <code>layout.tsx</code>で共通のレイアウトを定義できます</li>
          <li><strong>動的ルート:</strong> <code>[id]</code>のような記法で動的なパスを作成できます</li>
          <li><strong>API Routes:</strong> <code>app/api</code>ディレクトリにAPIエンドポイントを作成できます</li>
          <li><strong>サーバー/クライアントコンポーネント:</strong> "use client"ディレクティブで使い分けます</li>
        </ul>
      </section>
    </div>
  )
}
