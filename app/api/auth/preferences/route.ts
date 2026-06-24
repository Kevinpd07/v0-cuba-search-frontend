import { NextResponse } from "next/server"
import { updatePreferences, getUserById } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const sessionCookie = request.headers.get("cookie")?.split(";").find((c) => c.trim().startsWith("cubaentera_session="))
    if (!sessionCookie) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 })
    }

    const sessionData = JSON.parse(Buffer.from(sessionCookie.split("=")[1], "base64").toString())
    const user = getUserById(sessionData.userId)
    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    const { preferences } = await request.json()

    updatePreferences(user.id, {
      language: preferences?.language ?? user.preferences.language,
      notifications: preferences?.notifications ?? user.preferences.notifications,
      darkMode: preferences?.darkMode ?? user.preferences.darkMode,
      resultsPerPage: preferences?.resultsPerPage ?? user.preferences.resultsPerPage,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
