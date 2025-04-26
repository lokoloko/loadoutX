// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project's URL and anon key
const SUPABASE_URL = 'https://cnawbjfzadpzhdkzmifw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuYXdiamZ6YWRwemhka3ptaWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2OTM4NzQsImV4cCI6MjA2MTI2OTg3NH0.zaeH3IPBGVz4nVwmfsaBMKN4-hUP6Smzex8b0K_nA6I';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);