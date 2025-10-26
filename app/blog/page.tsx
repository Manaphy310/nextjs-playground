import Link from 'next/link'

// サンプルのブログ記事データ
const blogPosts = [
  {
    id: 1,
    title: 'Next.jsの始め方',
    excerpt: 'Next.jsを使ってモダンなWebアプリケーションを構築する方法を学びましょう。',
    date: '2024-01-15',
    author: 'Taro Yamada'
  },
  {
    id: 2,
    title: 'サーバーコンポーネントとは？',
    excerpt: 'React Server Componentsの概念と、その利点について解説します。',
    date: '2024-01-20',
    author: 'Hanako Suzuki'
  },
  {
    id: 3,
    title: '動的ルーティングの活用',
    excerpt: 'Next.jsの動的ルーティング機能を使って、柔軟なURLを設計する方法を紹介します。',
    date: '2024-01-25',
    author: 'Taro Yamada'
  },
  {
    id: 4,
    title: 'APIルートの作成',
    excerpt: 'Next.jsでバックエンドAPIを作成し、フルスタックアプリケーションを開発する方法を学びます。',
    date: '2024-02-01',
    author: 'Jiro Tanaka'
  }
]

export default function BlogPage() {
  return (
    <div className="container">
      <h1 className="page-title">ブログ</h1>
      <p className="page-description">Next.jsに関する記事を紹介しています</p>

      <div className="grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="card">
            <h2>{post.title}</h2>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
              <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <p>{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="button"
              style={{ marginTop: '1rem' }}
            >
              続きを読む
            </Link>
          </article>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 動的ルーティングについて</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このブログページから個別の記事ページへのリンクは、動的ルーティングを使用しています。
          <code>[id]</code>というフォルダ名で動的なパスパラメータを受け取ることができます。
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          例: <code>blog/[id]/page.tsx</code> → <code>/blog/1</code>, <code>/blog/2</code>, etc.
        </p>
      </div>
    </div>
  )
}
