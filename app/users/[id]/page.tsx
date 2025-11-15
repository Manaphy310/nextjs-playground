'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({ name: '', email: '', role: '' })

  useEffect(() => {
    fetchUser()
  }, [id])

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/users/${id}`)
      const result = await response.json()

      if (result.success) {
        setUser(result.data)
        setEditForm({
          name: result.data.name,
          email: result.data.email,
          role: result.data.role
        })
      } else {
        setError('ユーザーが見つかりません')
      }
    } catch (err) {
      setError('エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      })

      const result = await response.json()

      if (result.success) {
        setUser(result.data)
        setIsEditing(false)
        alert('ユーザー情報を更新しました')
      } else {
        alert('更新に失敗しました')
      }
    } catch (err) {
      alert('エラーが発生しました')
    }
  }

  const handleDelete = async () => {
    if (!confirm('本当に削除しますか？')) return

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
      })

      const result = await response.json()

      if (result.success) {
        alert('ユーザーを削除しました')
        router.push('/users')
      } else {
        alert('削除に失敗しました')
      }
    } catch (err) {
      alert('エラーが発生しました')
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">読み込み中...</div>
      </div>
    )
  }

  if (error || !user) {
    return (
      <div className="container">
        <div className="error">{error || 'ユーザーが見つかりません'}</div>
        <Link href="/users" className="button" style={{ marginTop: '1rem' }}>
          ユーザー一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="page-title">ユーザー詳細</h1>

      <div className="card">
        {!isEditing ? (
          <>
            <h2>{user.name}</h2>
            <div style={{ marginTop: '1rem', lineHeight: '2' }}>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>メールアドレス:</strong> {user.email}</p>
              <p><strong>役割:</strong> {user.role}</p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button onClick={() => setIsEditing(true)} className="button">
                編集
              </button>
              <button onClick={handleDelete} className="button button-secondary">
                削除
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate}>
            <h2>ユーザー情報を編集</h2>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  名前
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  メールアドレス
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  役割
                </label>
                <input
                  type="text"
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="button">
                  保存
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="button button-secondary"
                >
                  キャンセル
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/users" className="button button-secondary">
          ← ユーザー一覧に戻る
        </Link>
      </div>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 このページで学べること</h3>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li><strong>動的ルーティング:</strong> URLパラメータ（<code>{id}</code>）を使用</li>
          <li><strong>CRUD操作:</strong> Read（取得）、Update（更新）、Delete（削除）を実装</li>
          <li><strong>フォーム処理:</strong> Reactの状態管理を使用した編集機能</li>
          <li><strong>APIとの連携:</strong> fetch APIを使用したHTTPリクエスト</li>
          <li><strong>useRouter:</strong> プログラマティックなナビゲーション</li>
        </ul>
      </div>
    </div>
  )
}
