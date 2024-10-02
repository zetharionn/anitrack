import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import type { Release } from 'aniapi'

interface IAnimeCard {
	release: Release
}

export const AnimeCard = ({ release }: IAnimeCard) => {
	return (
		<Card>
			<CardBody>
				<Image
					alt='Anime poster'
					width={180}
					height={270}
					className='object-cover rounded-xl'
					src={`https://anilibria.top/${release.poster.optimized.src}`}
				/>
			</CardBody>
			<CardFooter className='flex flex-col items-start w-50 p-4'>
				<div className='flex flex-col w-full'>
					<h4 className='font-bold sm:text-[14px] md:text-[16px] lg:text-[18px]'>
						{release.name.english}
					</h4>
					<div className='flex flex-row justify-between'>
						<p>{release.episodes_total} ep</p>
						<p>{release.year}</p>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
