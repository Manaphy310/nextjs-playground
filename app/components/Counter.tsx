'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h3>カウンター (クライアントコンポーネント)</h3>
      <p style={{ fontSize: '2rem', margin: '1rem 0', textAlign: 'center', color: '#0070f3' }}>
        {count}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          className="button button-secondary"
          style={{ minWidth: '80px' }}
        >
          -1
        </button>
        <button
          onClick={() => setCount(0)}
          className="button button-secondary"
          style={{ minWidth: '80px' }}
        >
          リセット
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="button"
          style={{ minWidth: '80px' }}
        >
          +1
        </button>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        このコンポーネントは <code>"use client"</code> を使用しており、
        インタラクティブな機能（状態管理、イベントハンドラ）を持っています。
      </p>
    </div>
  )
}
