import { NextResponse } from 'next/server'

// サンプルユーザーデータ（実際のアプリではデータベースを使用）
const users = [
  { id: 1, name: '山田太郎', email: 'taro@example.com', role: '開発者' },
  { id: 2, name: '鈴木花子', email: 'hanako@example.com', role: 'デザイナー' },
  { id: 3, name: '田中次郎', email: 'jiro@example.com', role: 'プロダクトマネージャー' },
  { id: 4, name: '佐藤三郎', email: 'saburo@example.com', role: '開発者' },
]

// GET /api/users - 全ユーザーを取得
export async function GET(request: Request) {
  // URLのクエリパラメータを取得
  const { searchParams } = new URL(request.url)
  const role = searchParams.get('role')

  // roleパラメータがある場合はフィルタリング
  if (role) {
    const filteredUsers = users.filter(user => user.role === role)
    return NextResponse.json({
      success: true,
      data: filteredUsers,
      count: filteredUsers.length
    })
  }

  // 全ユーザーを返す
  return NextResponse.json({
    success: true,
    data: users,
    count: users.length
  })
}

// POST /api/users - 新しいユーザーを作成
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 簡単なバリデーション
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'nameとemailは必須です' },
        { status: 400 }
      )
    }

    // 新しいユーザーを作成（実際のアプリではデータベースに保存）
    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      role: body.role || 'ユーザー'
    }

    users.push(newUser)

    return NextResponse.json(
      {
        success: true,
        message: 'ユーザーを作成しました',
        data: newUser
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '無効なリクエストです' },
      { status: 400 }
    )
  }
}
