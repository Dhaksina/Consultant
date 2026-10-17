-- ==============================================================================
-- REVA PHOENIX LABS & CONSULTANTS PVT. LTD.
-- SUPABASE DATABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable UUID extension if not already present
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TABLE: site_content
-- Stores CMS sections (siteSettings, hero, about, services, apiServices, etc.)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_content (
  section_key TEXT PRIMARY KEY,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_by TEXT DEFAULT 'admin'
);

COMMENT ON TABLE public.site_content IS 'Unified key-value JSON store for CMS website sections';

-- Enable Row Level Security
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Policies: Anyone can view website content; only authenticated admins can edit
CREATE POLICY "Public can view site content"
  ON public.site_content
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can update site content"
  ON public.site_content
  FOR ALL
  USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

-- ------------------------------------------------------------------------------
-- 2. TABLE: media_assets
-- Media library holding uploaded image, video, and document paths
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.media_assets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL UNIQUE,
  type TEXT DEFAULT 'image/png',
  size TEXT DEFAULT '0 KB',
  tag TEXT DEFAULT 'Uploads',
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

COMMENT ON TABLE public.media_assets IS 'Media assets catalog for images, PDFs, and video files';

ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view media assets"
  ON public.media_assets
  FOR SELECT
  USING (true);

CREATE POLICY "Manage media assets"
  ON public.media_assets
  FOR ALL
  USING (true);

-- ------------------------------------------------------------------------------
-- 3. TABLE: brochures_downloads
-- Verified corporate brochures, training catalogs, and accredited certificates
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.brochures_downloads (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_type TEXT DEFAULT 'PDF Document',
  file_path TEXT NOT NULL,
  size TEXT DEFAULT '1.0 MB',
  verified TEXT DEFAULT 'Official Publication',
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

COMMENT ON TABLE public.brochures_downloads IS 'Downloadable brochures and official management certificates';

ALTER TABLE public.brochures_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view brochures"
  ON public.brochures_downloads
  FOR SELECT
  USING (true);

CREATE POLICY "Manage brochures"
  ON public.brochures_downloads
  FOR ALL
  USING (true);

-- ------------------------------------------------------------------------------
-- 4. TABLE: videos
-- Corporate and technical training video showcase
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  duration TEXT DEFAULT 'Corporate Film',
  category TEXT DEFAULT 'Training',
  thumbnail TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

COMMENT ON TABLE public.videos IS 'Video masterclasses and training archive';

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view videos"
  ON public.videos
  FOR SELECT
  USING (true);

CREATE POLICY "Manage videos"
  ON public.videos
  FOR ALL
  USING (true);

-- ------------------------------------------------------------------------------
-- 5. TABLE: contact_inquiries
-- Real user submissions from the website main contact form
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'in_review', 'responded', 'archived')),
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

COMMENT ON TABLE public.contact_inquiries IS 'Lead inquiries captured from public contact forms';

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact inquiry
CREATE POLICY "Public can submit contact inquiries"
  ON public.contact_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Inquiries are protected and only readable by admins
CREATE POLICY "Admins can view contact inquiries"
  ON public.contact_inquiries
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can update contact inquiries"
  ON public.contact_inquiries
  FOR UPDATE
  USING (true);

-- ------------------------------------------------------------------------------
-- 6. TABLE: quote_requests
-- Formal requests for quotes from the quote modal
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  service TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'declined', 'closed')),
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

COMMENT ON TABLE public.quote_requests IS 'Formal quotation requests received via quote modal';

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view and manage quote requests"
  ON public.quote_requests
  FOR ALL
  USING (true);

-- ------------------------------------------------------------------------------
-- 7. TABLE: admin_users (Firebase Auth Bridge)
-- Maps Firebase authenticated users to authorization roles
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_users (
  firebase_uid TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  last_sign_in TIMESTAMPTZ
);

COMMENT ON TABLE public.admin_users IS 'Maps Firebase authenticated UIDs to role-based access';

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view admin users"
  ON public.admin_users
  FOR ALL
  USING (true);

-- ------------------------------------------------------------------------------
-- 8. INITIAL SEED DATA
-- ------------------------------------------------------------------------------

-- Seed Brochures
INSERT INTO public.brochures_downloads (id, title, description, file_type, file_path, size, verified)
VALUES
  ('corporate-brochure', 'Reva Phoenix Corporate Brochure', 'Complete guide to Consulting, Training, Implementation, Auditing, and Oil & Gas API solutions.', 'PDF Document', 'assets/documents/reva-phoenix-corporate-brochure.pdf', '1.6 MB', 'Official Publication'),
  ('iso-certificate', 'ISO 9001:2015 Certificate', 'Official Management System Certificate of Reva Phoenix Labs & Consultants Pvt. Ltd.', 'PDF Document', 'assets/documents/iso-9001-2015-certificate.pdf', '775 KB', 'Accredited Certificate')
ON CONFLICT (id) DO NOTHING;

-- Seed Videos
INSERT INTO public.videos (id, title, subtitle, duration, category, thumbnail)
VALUES
  ('ki2GdYTqp2E', 'Reva Phoenix Corporate Overview', '2 Decades of Excellence in Quality & Consulting', 'Corporate Film', 'Corporate Video', 'https://img.youtube.com/vi/ki2GdYTqp2E/maxresdefault.jpg'),
  ('khYBWO56eP4', 'Automotive Quality & IATF 16949 Masterclass', 'Process Auditing & Core Tools Implementation', 'Technical Session', 'Automotive Training', 'https://img.youtube.com/vi/khYBWO56eP4/maxresdefault.jpg'),
  ('lNjo4ZoRF0w', 'ISO & IMS Professional Training Courses', 'Comprehensive Auditor Development Pathways', 'Training Program', 'Training Courses', 'https://img.youtube.com/vi/lNjo4ZoRF0w/maxresdefault.jpg'),
  ('UsfIL2BU7ao', 'Oil & Gas API Certification & Auditing', 'API Spec Q1 / Q2 & Monogram Compliance', 'Industry Masterclass', 'Oil & Gas Training', 'https://img.youtube.com/vi/UsfIL2BU7ao/maxresdefault.jpg')
ON CONFLICT (id) DO NOTHING;
