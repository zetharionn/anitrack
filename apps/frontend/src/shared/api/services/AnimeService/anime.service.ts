import type { IAnilibria } from 'aniapi'
import type { IAnimeService } from './anime.types'

export class AnimeService implements IAnimeService {
	readonly anilibriaClient: IAnilibria
	constructor(anilibria: IAnilibria) {
		this.anilibriaClient = anilibria
	}

	release(aliasOrId: string) {
		return this.anilibriaClient.release({
			aliasOrId: aliasOrId
		})
	}

	random() {
		return this.anilibriaClient.random()
	}

	search(query: string) {
		return this.anilibriaClient.search({
			query: query
		})
	}

	latest() {
		return this.anilibriaClient.latest()
	}
}
