# BidForge Waitlist Landing Page

A high-performance elite waitlist landing page for BidForge, built with Next.js 15, Bun, TypeScript, Tailwind CSS, Framer Motion, Supabase, and Resend.

## Features
- 🚀 **Modern Aesthetic:** Steel Gray & Construction Orange palette.
- ⚡ **Real-Time Updates:** Dynamic waitlist count from Supabase.
- 📧 **Automated Emails:** Welcome emails via Resend with beautiful React Email templates.
- 📱 **Mobile First:** Fully responsive across all devices.
- 🎭 **Smooth Animations:** Framer Motion for premium feel.
- 🛠️ **Production Ready:** Pre-configured for Netlify deployment.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Runtime:** Bun
- **Styling:** Tailwind CSS & Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Email:** Resend
- **Deployment:** Netlify

## Getting Started

### 1. Prerequisites
- [Bun](https://bun.sh) installed.
- Supabase project.
- Resend API key.

### 2. Environment Variables
Create a `.env.local` file (use `.env.example` as a template):
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup (Supabase)
Run this SQL in your Supabase SQL Editor:
```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS (Optional but recommended)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable insertions for everyone" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable select count for everyone" ON waitlist FOR SELECT USING (true);
```

### 4. Install & Run
```bash
bun install
bun dev
```

## Deployment to Netlify
1. Connect your repo to Netlify.
2. Set the build command to `bun run build`.
3. Set the publish directory to `.next`.
4. Add your environment variables in Netlify UI.
5. Profit!
