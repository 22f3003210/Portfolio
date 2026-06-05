-- ==========================================
-- SCALE WITH ABRAHAM - SUPABASE DATABASE SCHEMA
-- ==========================================
-- Copy and run these commands in the Supabase SQL Editor
-- to set up your tables for analytics and calendar booking.

-- 1. PAGE VIEWS TABLE (Tracks page loads & visitor location)
CREATE TABLE IF NOT EXISTS page_views (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  path TEXT NOT NULL,
  referrer TEXT,
  ip TEXT,
  country TEXT DEFAULT 'Unknown',
  city TEXT DEFAULT 'Unknown',
  user_agent TEXT
);

-- 2. CLICK EVENTS TABLE (Tracks actions/button clicks)
CREATE TABLE IF NOT EXISTS click_events (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  element_id TEXT NOT NULL,
  element_text TEXT,
  page_path TEXT NOT NULL,
  ip TEXT,
  country TEXT DEFAULT 'Unknown',
  city TEXT DEFAULT 'Unknown'
);

-- 3. APPOINTMENTS TABLE (Tracks calendar appointments)
CREATE TABLE IF NOT EXISTS appointments (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  date TEXT NOT NULL,          -- Format: YYYY-MM-DD
  time_slot TEXT NOT NULL,     -- Format: HH:MM (e.g. 10:00, 14:30)
  description TEXT,
  status TEXT DEFAULT 'Scheduled' -- e.g. Scheduled, Completed, Cancelled
);

-- Enable Row-Level Security (RLS) on all tables
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public (anon) writes
CREATE POLICY "Allow public insert to page_views" 
  ON page_views FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert to click_events" 
  ON click_events FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert to appointments" 
  ON appointments FOR INSERT WITH CHECK (true);

-- Create policies to allow public select (so calendar scheduler can query existing dates/slots to prevent double booking)
CREATE POLICY "Allow public read of appointments"
  ON appointments FOR SELECT USING (true);

-- Create policies for Admin reads (Allows the admin dashboard to read views/clicks stats)
-- Note: In this project, we bypass auth via a secure API code to keep it simple, so we allow public SELECT.
-- But you can secure this further in Supabase if needed.
CREATE POLICY "Allow public select of page_views"
  ON page_views FOR SELECT USING (true);

CREATE POLICY "Allow public select of click_events"
  ON click_events FOR SELECT USING (true);
