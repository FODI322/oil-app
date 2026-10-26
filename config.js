const APP_CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT_ID.supabase.co',
  supabaseAnonKey: 'YOUR_ANON_KEY_HERE'
};

// Чтобы включить полный режим для нескольких планшетов:
// 1. Создай проект в Supabase
// 2. Включи Auth -> Email/Password
// 3. Вставь URL и anon key выше
// 4. Выполни SQL ниже:
//
// CREATE TABLE profiles (
//   id UUID PRIMARY KEY,
//   name TEXT NOT NULL,
//   email TEXT UNIQUE,
//   last_seen TIMESTAMPTZ DEFAULT NOW()
// );
//
// CREATE TABLE answers (
//   student_id UUID NOT NULL,
//   student_name TEXT NOT NULL,
//   part_id TEXT NOT NULL,
//   level INT NOT NULL CHECK (level BETWEEN 0 AND 2),
//   updated_at TIMESTAMPTZ DEFAULT NOW(),
//   PRIMARY KEY (student_id, part_id)
// );
//
// ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
// ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
//
// CREATE POLICY "profiles_select_for_all" ON profiles FOR SELECT USING (true);
// CREATE POLICY "profiles_upsert_for_all" ON profiles FOR INSERT WITH CHECK (true);
// CREATE POLICY "profiles_update_for_all" ON profiles FOR UPDATE USING (true);
//
// CREATE POLICY "answers_select_for_all" ON answers FOR SELECT USING (true);
// CREATE POLICY "answers_upsert_for_all" ON answers FOR INSERT WITH CHECK (true);
// CREATE POLICY "answers_update_for_all" ON answers FOR UPDATE USING (true);
//
// В режиме без Supabase приложение работает локально на одном устройстве.
