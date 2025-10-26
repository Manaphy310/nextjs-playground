export default function AboutPage() {
  return (
    <div className="container">
      <h1 className="page-title">About</h1>
      <p className="page-description">このページについて</p>

      <div className="card">
        <h2>このアプリケーションについて</h2>
        <p>
          Next.js Playgroundは、Next.jsのフレームワークを学習するために作成された
          サンプルアプリケーションです。以下の主要な機能を含んでいます:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li>App Routerを使用したモダンなルーティング</li>
          <li>サーバーコンポーネントとクライアントコンポーネント</li>
          <li>動的ルーティング</li>
          <li>APIルート</li>
          <li>レスポンシブデザイン</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h2>Next.jsとは？</h2>
        <p>
          Next.jsは、Reactベースのフルスタックフレームワークです。
          以下のような特徴があります:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>サーバーサイドレンダリング (SSR):</strong> 初回読み込みが高速でSEOに強い</li>
          <li><strong>静的サイト生成 (SSG):</strong> ビルド時にHTMLを生成</li>
          <li><strong>ファイルベースルーティング:</strong> 直感的なルーティングシステム</li>
          <li><strong>APIルート:</strong> バックエンドAPIを同じプロジェクトで作成可能</li>
          <li><strong>自動コード分割:</strong> 必要なコードだけを読み込む</li>
          <li><strong>TypeScriptサポート:</strong> 型安全な開発が可能</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h2>技術スタック</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h3 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>フロントエンド</h3>
            <ul style={{ marginLeft: '1rem', lineHeight: '1.8' }}>
              <li>Next.js 14</li>
              <li>React 18</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>スタイリング</h3>
            <ul style={{ marginLeft: '1rem', lineHeight: '1.8' }}>
              <li>CSS (グローバル)</li>
              <li>CSS Modules対応</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
