import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cerqrsttskwutpnhbcvq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcnFyc3R0c2t3dXRwbmhiY3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MzMzODUsImV4cCI6MjA4MDAwOTM4NX0.zorIOTNMTevhmspNTCxaCuA5nCrrUA2hLLoowny3-rQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



