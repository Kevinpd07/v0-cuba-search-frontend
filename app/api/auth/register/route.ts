import { NextResponse } from "next/server"
import { registerUser } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { email, password, userType, preferences } = await request.json()

    if (!email || !password || !userType) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    if (!["actor", "usuario"].includes(userType)) {
      return NextResponse.json({ error: "Tipo de usuario inválido" }, { status: 400 })
    }

    try {
      const user = registerUser(email, password, userType, {
        language: preferences?.language ?? "es",
        notifications: preferences?.notifications ?? true,
        darkMode: preferences?.darkMode ?? false,
        resultsPerPage: preferences?.resultsPerPage ?? 10,
      })

      return NextResponse.json(
        { user },
        { status: 201, headers: { "Set-Cookie": `cubaentera_session=${Buffer.from(JSON.stringify({ userId: user.id })).toString("base64")}; Path=/; HttpOnly; SameSite=Strict` } }
      )
    } catch (e: any) {
      return NextResponse.json({ error: "El correo ya está registrado" }, { status: 409 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
