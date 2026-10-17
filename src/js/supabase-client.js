/**
 * REVA PHOENIX — Supabase Database Client
 * Handles real-time CRUD operations, table relationships, and data persistence
 * for Site Content, Media Assets, Brochures, Videos, and Inquiries.
 */

import { BACKEND_CONFIG, isSupabaseConfigured } from './config.js';

let supabaseClient = null;
let supabaseInitialized = false;

/**
 * Initialize Supabase client via official ESM build
 */
export async function initSupabase() {
  if (supabaseInitialized) return supabaseClient;

  if (!isSupabaseConfigured()) {
    console.warn("[Supabase] Project credentials not configured yet. Operating in local storage mode.");
    return null;
  }

  try {
    const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.8/+esm");
    const cleanUrl = (BACKEND_CONFIG.supabase.url || "").replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
    supabaseClient = createClient(
      cleanUrl,
      BACKEND_CONFIG.supabase.anonKey,
      {
        auth: {
          persistSession: false // Firebase handles authentication exclusively
        },
        realtime: {
          params: {
            eventsPerSecond: 10
          }
        }
      }
    );
    supabaseInitialized = true;
    console.log("[Supabase] Connected to project successfully.");
    return supabaseClient;
  } catch (err) {
    console.error("[Supabase] Failed to initialize client:", err);
    return null;
  }
}

/**
 * ==============================================================
 * 1. SITE CONTENT CRUD
 * ==============================================================
 */

/**
 * Fetch all content sections from `site_content` table
 */
export async function fetchCmsContent() {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('site_content')
      .select('section_key, content, updated_at');

    if (error) {
      console.warn("[Supabase] fetchCmsContent error:", error.message);
      return null;
    }

    if (!data || data.length === 0) return null;

    // Convert array of rows back into unified CMS object
    const cmsObj = {};
    data.forEach(row => {
      cmsObj[row.section_key] = row.content;
    });

    return cmsObj;
  } catch (err) {
    console.error("[Supabase] Error loading content:", err);
    return null;
  }
}

/**
 * Save / Upsert a single content section to `site_content`
 */
export async function saveCmsSection(sectionKey, contentData, userId = null) {
  const client = await initSupabase();
  if (!client) return { success: false, offline: true };

  try {
    const { data, error } = await client
      .from('site_content')
      .upsert({
        section_key: sectionKey,
        content: contentData,
        updated_at: new Date().toISOString(),
        updated_by: userId || 'admin'
      }, { onConflict: 'section_key' });

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error(`[Supabase] Error saving section ${sectionKey}:`, err);
    return { success: false, error: err.message };
  }
}

/**
 * Save entire CMS object to Supabase (saves each key as a record)
 */
export async function saveAllCmsContent(fullCmsData, userId = null) {
  const client = await initSupabase();
  if (!client) return { success: false, offline: true };

  try {
    const rows = Object.keys(fullCmsData).map(key => ({
      section_key: key,
      content: fullCmsData[key],
      updated_at: new Date().toISOString(),
      updated_by: userId || 'admin'
    }));

    const { data, error } = await client
      .from('site_content')
      .upsert(rows, { onConflict: 'section_key' });

    if (error) throw error;
    return { success: true, count: rows.length };
  } catch (err) {
    console.error("[Supabase] Error saving all content:", err);
    return { success: false, error: err.message };
  }
}

/**
 * ==============================================================
 * 2. MEDIA ASSETS CRUD
 * ==============================================================
 */

export async function fetchMediaAssets() {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('media_assets')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.warn("[Supabase] fetchMediaAssets error:", err.message);
    return null;
  }
}

export async function addMediaAsset(asset) {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('media_assets')
      .insert([{
        name: asset.name,
        url: asset.url,
        type: asset.type || 'image/png',
        size: asset.size || '0 KB',
        tag: asset.tag || 'Uploads',
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    return data?.[0] || null;
  } catch (err) {
    console.error("[Supabase] addMediaAsset error:", err);
    return null;
  }
}

export async function deleteMediaAsset(assetId) {
  const client = await initSupabase();
  if (!client) return false;

  try {
    const { error } = await client
      .from('media_assets')
      .delete()
      .eq('id', assetId);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error("[Supabase] deleteMediaAsset error:", err);
    return false;
  }
}

/**
 * ==============================================================
 * 3. BROCHURES & CERTIFICATES CRUD
 * ==============================================================
 */

export async function fetchBrochures() {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('brochures_downloads')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  } catch (err) {
    return null;
  }
}

export async function saveBrochures(brochuresList) {
  const client = await initSupabase();
  if (!client) return false;

  try {
    const { error } = await client
      .from('brochures_downloads')
      .upsert(brochuresList, { onConflict: 'id' });

    if (error) throw error;
    return true;
  } catch (err) {
    console.error("[Supabase] saveBrochures error:", err);
    return false;
  }
}

/**
 * ==============================================================
 * 4. VIDEOS CRUD
 * ==============================================================
 */

export async function fetchVideos() {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('videos')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  } catch (err) {
    return null;
  }
}

export async function saveVideos(videosList) {
  const client = await initSupabase();
  if (!client) return false;

  try {
    const { error } = await client
      .from('videos')
      .upsert(videosList, { onConflict: 'id' });

    if (error) throw error;
    return true;
  } catch (err) {
    console.error("[Supabase] saveVideos error:", err);
    return false;
  }
}

/**
 * ==============================================================
 * 5. CONTACT INQUIRIES & QUOTE REQUESTS (REAL USER FORM SUBMISSIONS)
 * ==============================================================
 */

/**
 * Insert new user contact inquiry into Supabase
 */
export async function submitContactInquiry(inquiry) {
  const client = await initSupabase();
  if (!client) {
    console.log("[Local Fallback] Contact inquiry captured locally:", inquiry);
    return { success: true, offline: true };
  }

  try {
    const { data, error } = await client
      .from('contact_inquiries')
      .insert([{
        name: inquiry.name,
        company: inquiry.company || '',
        email: inquiry.email,
        phone: inquiry.phone || '',
        service: inquiry.service,
        message: inquiry.message,
        status: 'unread',
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    return { success: true, data: data?.[0] };
  } catch (err) {
    console.error("[Supabase] Contact inquiry insertion error:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Insert new formal quote request into Supabase
 */
export async function submitQuoteRequest(quote) {
  const client = await initSupabase();
  if (!client) {
    console.log("[Local Fallback] Quote request captured locally:", quote);
    return { success: true, offline: true };
  }

  try {
    const { data, error } = await client
      .from('quote_requests')
      .insert([{
        service: quote.service || 'General Consulting',
        name: quote.name,
        email: quote.email,
        phone: quote.phone,
        company: quote.company || '',
        status: 'pending',
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    return { success: true, data: data?.[0] };
  } catch (err) {
    console.error("[Supabase] Quote request insertion error:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Realtime Subscription Helper
 */
export async function subscribeToRealtimeChanges(tableName, onUpdate) {
  const client = await initSupabase();
  if (!client) return null;

  try {
    const channel = client
      .channel(`realtime_${tableName}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, (payload) => {
        console.log(`[Supabase Realtime] Change detected on ${tableName}:`, payload);
        onUpdate(payload);
      })
      .subscribe();

    return channel;
  } catch (err) {
    console.warn(`[Supabase Realtime] Could not subscribe to ${tableName}:`, err);
    return null;
  }
}
