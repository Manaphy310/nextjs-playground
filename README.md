# Next.js Playground

Next.jsを学習するための実践的なサンプルアプリケーションです。Next.jsの主要な機能を体験できるように設計されています。

## 主な機能

このアプリケーションには以下の学習項目が含まれています：

- **App Router**: Next.js 14の最新ルーティングシステム
- **サーバーコンポーネント**: デフォルトでサーバーサイドレンダリング
- **クライアントコンポーネント**: `"use client"`を使用したインタラクティブなコンポーネント
- **動的ルーティング**: `[id]`パラメータを使用した動的なページ生成
- **API Routes**: RESTful APIエンドポイントの実装
- **データフェッチング**: サーバー・クライアント両方でのデータ取得
- **レイアウト**: 共通レイアウトの実装
- **スタイリング**: グローバルCSSとコンポーネントスタイリング

## セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd nextjs-playground
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## プロジェクト構造

```
nextjs-playground/
├── app/                      # App Router ディレクトリ
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── globals.css          # グローバルスタイル
│   ├── about/               # Aboutページ
│   │   └── page.tsx
│   ├── blog/                # ブログセクション
│   │   ├── page.tsx         # ブログ一覧
│   │   └── [id]/            # 動的ルート
│   │       └── page.tsx     # 個別ブログ記事
│   ├── users/               # ユーザーセクション
│   │   ├── page.tsx         # ユーザー一覧（クライアントコンポーネント）
│   │   └── [id]/            # 動的ルート
│   │       └── page.tsx     # ユーザー詳細
│   ├── components/          # 再利用可能なコンポーネント
│   │   └── Counter.tsx      # カウンターコンポーネント
│   └── api/                 # API Routes
│       └── users/
│           ├── route.ts     # ユーザーAPI（一覧・作成）
│           └── [id]/
│               └── route.ts # ユーザーAPI（詳細・更新・削除）
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 学習ポイント

### 1. ファイルベースルーティング

Next.jsでは、`app`ディレクトリ内のフォルダ構造がそのままURLになります。

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[id]/page.tsx` → `/blog/1`, `/blog/2`, etc.

### 2. サーバーコンポーネント vs クライアントコンポーネント

**サーバーコンポーネント（デフォルト）:**
- データベースへの直接アクセス可能
- バンドルサイズの削減
- SEOに優れている

**クライアントコンポーネント（`"use client"`）:**
- インタラクティブな機能（useState, useEffectなど）
- イベントハンドラ
- ブラウザAPI

例:
```typescript
// サーバーコンポーネント（デフォルト）
export default function Page() {
  return <div>サーバーで描画</div>
}

// クライアントコンポーネント
'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### 3. 動的ルーティング

`[id]`のような記法で動的なパスを作成できます。

```typescript
// app/blog/[id]/page.tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <div>記事ID: {params.id}</div>
}
```

### 4. API Routes

`app/api`ディレクトリにAPIエンドポイントを作成できます。

```typescript
// app/api/users/route.ts
export async function GET() {
  return Response.json({ users: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  return Response.json({ success: true })
}
```

### 5. レイアウト

`layout.tsx`で共通のレイアウトを定義できます。

```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>ナビゲーション</nav>
        {children}
        <footer>フッター</footer>
      </body>
    </html>
  )
}
```

## 各ページの説明

### ホームページ (`/`)
- Next.jsの主要機能の概要を表示
- 各セクションへのリンクを提供

### Aboutページ (`/about`)
- アプリケーションの説明
- Next.jsの特徴と技術スタック

### ブログ (`/blog`)
- ブログ記事一覧を表示
- 動的ルーティングの例
- 個別記事ページへのリンク

### ブログ記事 (`/blog/[id]`)
- 動的ルーティングを使用した個別記事ページ
- `generateStaticParams`による静的生成の例
- `notFound()`関数の使用例

### ユーザー一覧 (`/users`)
- クライアントコンポーネントの例
- APIからのデータフェッチング
- useState, useEffectの使用例

### ユーザー詳細 (`/users/[id]`)
- CRUD操作の実装例
- フォーム処理
- `useRouter`によるナビゲーション

## APIエンドポイント

### ユーザーAPI

- `GET /api/users` - 全ユーザーを取得
- `GET /api/users?role=開発者` - 役割でフィルタリング
- `POST /api/users` - 新しいユーザーを作成
- `GET /api/users/[id]` - 特定のユーザーを取得
- `PUT /api/users/[id]` - ユーザー情報を更新
- `DELETE /api/users/[id]` - ユーザーを削除

## スクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードチェック

## さらに学ぶために

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)

## ライセンス

MIT
