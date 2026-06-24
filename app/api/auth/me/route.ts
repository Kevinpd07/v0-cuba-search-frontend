import { NextResponse } from "next/server"
import { getUserById } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const sessionCookie = request.headers.get("cookie")?.split(";").find((c) => c.trim().startsWith("cubaentera_session="))
    if (!sessionCookie) {
      return NextResponse.json({ user: null })
    }

    const sessionData = JSON.parse(Buffer.from(sessionCookie.split("=")[1], "base64").toString())
    const userId = sessionData.userId

    const user = getUserById(userId)
    if (!user) {
      return NextResponse.json({ user: null })
    }

    return NextResponse.json({ user: { ...user, isLoggedIn: true } })
  } catch (error) {
    return NextResponse.json({ user: null })
  }
}
