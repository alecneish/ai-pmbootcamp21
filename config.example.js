// Supabase Configuration
// Replace these values with your actual Supabase project credentials
// Get them from: https://app.supabase.com/project/_/settings/api

const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL', // e.g., 'https://abcdefghij.supabase.co'
    anonKey: 'YOUR_SUPABASE_ANON_KEY' // Your anon/public key
};

// Check if Supabase is configured
function isSupabaseConfigured() {
    return SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL' &&
           SUPABASE_CONFIG.anonKey !== 'YOUR_SUPABASE_ANON_KEY';
}
