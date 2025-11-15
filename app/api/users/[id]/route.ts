import { NextResponse } from 'next/server'

// サンプルユーザーデータ（実際のアプリではデータベースを使用）
const users = [
  { id: 1, name: '山田太郎', email: 'taro@example.com', role: '開発者' },
  { id: 2, name: '鈴木花子', email: 'hanako@example.com', role: 'デザイナー' },
  { id: 3, name: '田中次郎', email: 'jiro@example.com', role: 'プロダクトマネージャー' },
  { id: 4, name: '佐藤三郎', email: 'saburo@example.com', role: '開発者' },
]

// GET /api/users/[id] - 特定のユーザーを取得
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const userId = parseInt(id)
  const user = users.find(u => u.id === userId)

  if (!user) {
    return NextResponse.json(
      { success: false, error: 'ユーザーが見つかりません' },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: user
  })
}

// PUT /api/users/[id] - ユーザー情報を更新
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const userId = parseInt(id)
    const userIndex = users.findIndex(u => u.id === userId)

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'ユーザーが見つかりません' },
        { status: 404 }
      )
    }

    const body = await request.json()

    // ユーザー情報を更新
    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: userId // IDは変更不可
    }

    return NextResponse.json({
      success: true,
      message: 'ユーザー情報を更新しました',
      data: users[userIndex]
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '無効なリクエストです' },
      { status: 400 }
    )
  }
}

// DELETE /api/users/[id] - ユーザーを削除
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const userId = parseInt(id)
  const userIndex = users.findIndex(u => u.id === userId)

  if (userIndex === -1) {
    return NextResponse.json(
      { success: false, error: 'ユーザーが見つかりません' },
      { status: 404 }
    )
  }

  const deletedUser = users[userIndex]
  users.splice(userIndex, 1)

  return NextResponse.json({
    success: true,
    message: 'ユーザーを削除しました',
    data: deletedUser
  })
}
