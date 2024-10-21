import { createClient } from '@supabase/supabase-js'
import { Anilibria } from 'aniapi'
import { AnimeService } from './services/AnimeService'
import { AuthService } from './services/AuthService'

const supabase = createClient(
	`${import.meta.env.VITE_SUPABASE_URL}`,
	`${import.meta.env.VITE_SUPABASE_KEY}`
)

export const authService = new AuthService(supabase)

const anilibria = new Anilibria()

export const animeService = new AnimeService(anilibria)
