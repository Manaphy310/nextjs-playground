'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users')
      const result = await response.json()

      if (result.success) {
        setUsers(result.data)
      } else {
        setError('ユーザーの取得に失敗しました')
      }
    } catch (err) {
      setError('エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">読み込み中...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="page-title">ユーザー一覧</h1>
      <p className="page-description">
        APIルートからユーザーデータを取得して表示しています
      </p>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>💡 このページの仕組み</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このページは<code>"use client"</code>ディレクティブを使用したクライアントコンポーネントです。
          <code>/api/users</code>エンドポイントからデータを取得し、表示しています。
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li><strong>useState:</strong> ユーザーデータと状態を管理</li>
          <li><strong>useEffect:</strong> コンポーネントのマウント時にAPIを呼び出し</li>
          <li><strong>fetch:</strong> APIルートからデータを取得</li>
        </ul>
      </div>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div>
              <strong>{user.name}</strong>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                {user.email} • {user.role}
              </div>
            </div>
            <Link href={`/users/${user.id}`} className="button">
              詳細を見る
            </Link>
          </li>
        ))}
      </ul>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>🔌 APIエンドポイント</h3>
        <p style={{ marginTop: '0.5rem' }}>以下のエンドポイントが利用可能です：</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li>
            <code>GET /api/users</code> - 全ユーザーを取得
          </li>
          <li>
            <code>GET /api/users?role=開発者</code> - 役割でフィルタリング
          </li>
          <li>
            <code>GET /api/users/[id]</code> - 特定のユーザーを取得
          </li>
          <li>
            <code>POST /api/users</code> - 新しいユーザーを作成
          </li>
          <li>
            <code>PUT /api/users/[id]</code> - ユーザー情報を更新
          </li>
          <li>
            <code>DELETE /api/users/[id]</code> - ユーザーを削除
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          試してみる: <a href="/api/users" target="_blank" style={{ color: '#0070f3' }}>/api/users</a>
        </p>
      </div>
    </div>
  )
}
