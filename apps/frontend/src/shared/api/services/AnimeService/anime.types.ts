import type { IAnilibria, Release } from 'aniapi'

export interface IAnimeService {
	readonly anilibriaClient: IAnilibria
	release: (aliasOrId: string) => Promise<Release>
	random: () => Promise<Release[]>
	search: (query: string) => Promise<Release[]>
	latest: () => Promise<Release[]>
}
