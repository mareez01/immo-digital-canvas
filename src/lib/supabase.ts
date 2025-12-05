import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for form submissions
export interface FormSubmission {
  id: number
  name: string
  email: string
  phone?: string
  message: string
  created_at: string
  status: 'new' | 'in_progress' | 'resolved'
}