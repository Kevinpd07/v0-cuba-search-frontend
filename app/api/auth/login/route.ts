import { NextResponse } from "next/server"
import { loginUser } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 })
    }

    const user = loginUser(email, password)
    if (!user) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    return NextResponse.json(
      { user: { ...user, isLoggedIn: true } },
      {
        status: 200,
        headers: {
          "Set-Cookie": `cubaentera_session=${Buffer.from(JSON.stringify({ userId: user.id })).toString("base64")}; Path=/; HttpOnly; SameSite=Strict`,
        },
      }
    )
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
