import { createClient } from '@supabase/supabase-js'
import { PUBLIC_PROJECT_ID, PUBLIC_ANON_KEY } from '$env/dynamic/public'

export const supabase = createClient('https://$(PUBLIC_PROJECT_ID).supabase.co', '$(PUBLIC_ANON_KEY)')