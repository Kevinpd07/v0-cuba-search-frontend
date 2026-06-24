import Database from "better-sqlite3"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "cubaentera.db")

const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    user_type TEXT NOT NULL CHECK(user_type IN ('actor', 'usuario')),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS preferences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER UNIQUE NOT NULL,
    language TEXT DEFAULT 'es',
    notifications INTEGER DEFAULT 1,
    dark_mode INTEGER DEFAULT 0,
    results_per_page INTEGER DEFAULT 10,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`)

const insertUser = db.prepare(
  "INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)"
)
const insertPreference = db.prepare(
  "INSERT INTO preferences (user_id, language, notifications, dark_mode, results_per_page) VALUES (?, ?, ?, ?, ?)"
)
const findUserByEmail = db.prepare(
  "SELECT * FROM users WHERE email = ?"
)
const findUserById = db.prepare(
  "SELECT * FROM users WHERE id = ?"
)
const findPreferencesByUserId = db.prepare(
  "SELECT * FROM preferences WHERE user_id = ?"
)
const upsertPreferences = db.prepare(
  `INSERT INTO preferences (user_id, language, notifications, dark_mode, results_per_page)
   VALUES (?, ?, ?, ?, ?)
   ON CONFLICT(user_id) DO UPDATE SET
     language = excluded.language,
     notifications = excluded.notifications,
     dark_mode = excluded.dark_mode,
     results_per_page = excluded.results_per_page,
     updated_at = CURRENT_TIMESTAMP`
)

export function registerUser(
  name: string,
  email: string,
  password: string,
  userType: "actor" | "usuario",
  preferences: {
    language: string
    notifications: boolean
    darkMode: boolean
    resultsPerPage: number
  }
) {
  const result = insertUser.run(name, email, password, userType)
  const userId = result.lastInsertRowid as number
  insertPreference.run(
    userId,
    preferences.language,
    preferences.notifications ? 1 : 0,
    preferences.darkMode ? 1 : 0,
    preferences.resultsPerPage
  )
  return {
    id: result.lastInsertRowid as number,
    name,
    email,
    userType,
  }
}

export function loginUser(
  email: string,
  password: string
): { id: number; name: string; email: string; userType: "actor" | "usuario"; preferences: any } | null {
  const user = findUserByEmail.get(email) as any
  if (!user || user.password !== password) return null
  const prefs = findPreferencesByUserId.get(user.id) as any
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    userType: user.user_type as "actor" | "usuario",
    preferences: {
      language: prefs?.language ?? "es",
      notifications: !!prefs?.notifications,
      darkMode: !!prefs?.dark_mode,
      resultsPerPage: prefs?.results_per_page ?? 10,
    },
  }
}

export function updatePreferences(
  userId: number,
  preferences: {
    language: string
    notifications: boolean
    darkMode: boolean
    resultsPerPage: number
  }
) {
  upsertPreferences.run(
    userId,
    preferences.language,
    preferences.notifications ? 1 : 0,
    preferences.darkMode ? 1 : 0,
    preferences.resultsPerPage
  )
}

export function getUserWithPreferences(email: string) {
  const user = findUserByEmail.get(email) as any
  if (!user) return null
  const prefs = findPreferencesByUserId.get(user.id) as any
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    userType: user.user_type as "actor" | "usuario",
    preferences: {
      language: prefs?.language ?? "es",
      notifications: !!prefs?.notifications,
      darkMode: !!prefs?.dark_mode,
      resultsPerPage: prefs?.results_per_page ?? 10,
    },
  }
}

export function getUserById(id: number) {
  const user = findUserById.get(id) as any
  if (!user) return null
  const prefs = findPreferencesByUserId.get(user.id) as any
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    userType: user.user_type as "actor" | "usuario",
    preferences: {
      language: prefs?.language ?? "es",
      notifications: !!prefs?.notifications,
      darkMode: !!prefs?.dark_mode,
      resultsPerPage: prefs?.results_per_page ?? 10,
    },
  }
}
