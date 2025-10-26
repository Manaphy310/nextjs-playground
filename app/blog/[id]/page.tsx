import Link from 'next/link'
import { notFound } from 'next/navigation'

// サンプルのブログ記事データ（実際のアプリではデータベースやAPIから取得）
const blogPosts = [
  {
    id: 1,
    title: 'Next.jsの始め方',
    content: `
Next.jsは、Reactベースのフルスタックフレームワークで、モダンなWebアプリケーションを構築するための強力なツールです。

## なぜNext.jsを使うのか？

1. **サーバーサイドレンダリング (SSR)**
   - 初回読み込みが高速
   - SEOに優れている
   - ユーザー体験の向上

2. **静的サイト生成 (SSG)**
   - ビルド時にHTMLを生成
   - 超高速なページ読み込み
   - CDNでの配信に最適

3. **ファイルベースルーティング**
   - 直感的なルーティングシステム
   - 設定不要でルートが作成される

## セットアップ方法

Next.jsプロジェクトを始めるのは簡単です：

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

これだけで開発サーバーが起動します！
    `,
    date: '2024-01-15',
    author: 'Taro Yamada'
  },
  {
    id: 2,
    title: 'サーバーコンポーネントとは？',
    content: `
React Server Components (RSC) は、Next.js 13以降で導入された革新的な機能です。

## サーバーコンポーネントの利点

### 1. パフォーマンスの向上
- サーバー側でレンダリングされるため、クライアントに送信されるJavaScriptが減少
- 初回読み込み時間が短縮される

### 2. データフェッチングの簡素化
サーバーコンポーネントでは、直接データベースにアクセスできます：

\`\`\`typescript
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
\`\`\`

### 3. セキュリティの向上
- APIキーや機密情報をサーバー側に保持できる
- クライアント側に公開されない

## クライアントコンポーネントとの使い分け

- **サーバーコンポーネント**: データフェッチング、静的コンテンツ
- **クライアントコンポーネント**: インタラクティブなUI、イベントハンドラ、状態管理

クライアントコンポーネントにするには、ファイルの先頭に \`"use client"\` を追加します。
    `,
    date: '2024-01-20',
    author: 'Hanako Suzuki'
  },
  {
    id: 3,
    title: '動的ルーティングの活用',
    content: `
Next.jsの動的ルーティングを使用すると、柔軟でスケーラブルなURLを設計できます。

## 基本的な動的ルーティング

\`app/blog/[id]/page.tsx\` のようなファイル構造で、動的なパスを作成できます：

\`\`\`typescript
export default function BlogPost({ params }: { params: { id: string } }) {
  return <div>記事ID: {params.id}</div>
}
\`\`\`

## 複数の動的セグメント

より複雑なURLも簡単に作成できます：

- \`app/blog/[category]/[id]/page.tsx\`
- URL例: \`/blog/tech/123\`

## Catch-all セグメント

\`[...slug]\` を使用すると、任意の深さのパスをキャッチできます：

\`\`\`
app/docs/[...slug]/page.tsx
\`\`\`

これは以下のようなURLにマッチします：
- \`/docs/a\`
- \`/docs/a/b\`
- \`/docs/a/b/c\`

## オプショナルなCatch-all

\`[[...slug]]\` を使用すると、ルートパスにもマッチします：

- \`/docs\` ← これにもマッチ
- \`/docs/a\`
- \`/docs/a/b\`

動的ルーティングは、ブログ、ドキュメント、ECサイトなど、様々な場面で活用できます！
    `,
    date: '2024-01-25',
    author: 'Taro Yamada'
  },
  {
    id: 4,
    title: 'APIルートの作成',
    content: `
Next.jsでは、\`app/api\` ディレクトリを使用してAPIエンドポイントを作成できます。

## 基本的なAPIルート

\`app/api/hello/route.ts\` を作成：

\`\`\`typescript
export async function GET() {
  return Response.json({ message: 'Hello, World!' })
}
\`\`\`

## HTTPメソッドのサポート

各HTTPメソッドに対応した関数をエクスポートできます：

\`\`\`typescript
export async function GET(request: Request) {
  // GETリクエストの処理
}

export async function POST(request: Request) {
  // POSTリクエストの処理
  const data = await request.json()
  return Response.json({ success: true, data })
}

export async function PUT(request: Request) {
  // PUTリクエストの処理
}

export async function DELETE(request: Request) {
  // DELETEリクエストの処理
}
\`\`\`

## 動的APIルート

\`app/api/users/[id]/route.ts\` のように、動的なAPIルートも作成できます：

\`\`\`typescript
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id
  // データベースからユーザーを取得
  return Response.json({ userId, name: 'Sample User' })
}
\`\`\`

## リクエストとレスポンスの処理

- **クエリパラメータ**: \`request.nextUrl.searchParams\`
- **リクエストボディ**: \`await request.json()\`
- **ヘッダー**: \`request.headers\`

APIルートを使用することで、フロントエンドとバックエンドを同じプロジェクトで管理できます！
    `,
    date: '2024-02-01',
    author: 'Jiro Tanaka'
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id)
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    notFound()
  }

  return (
    <div className="container">
      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1 className="page-title">{post.title}</h1>
          <div style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
            <span>{post.date}</span> • <span>著者: {post.author}</span>
          </div>
        </header>

        <div className="card" style={{ lineHeight: '1.8' }}>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/blog" className="button button-secondary">
            ← ブログ一覧に戻る
          </Link>
        </div>
      </article>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 動的ルーティングの仕組み</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このページは <code>app/blog/[id]/page.tsx</code> から生成されています。
          URLの <code>{params.id}</code> 部分が <code>params.id</code> として渡されます。
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          現在のID: <code>{params.id}</code>
        </p>
      </div>
    </div>
  )
}

// generateStaticParams を使用して、ビルド時に静的ページを生成することもできます
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}
