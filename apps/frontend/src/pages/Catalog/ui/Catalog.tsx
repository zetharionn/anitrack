import { Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

const Catalog = () => {
	return (
		<div className='flex flex-col text-center items-center justify-center gap-4 h-[85vh]'>
			<h1 className='sm:text-3xl md:text-4xl lg:text-5xl font-extrabold'>
				Coming Soon
			</h1>
			<p className='md:text-xl lg:text-2xl text-foreground-600'>
				This page is still under construction, please wait!
			</p>
			<div>
				<span>Return to </span>
				<Link href={ROUTES.HOME} color='primary' underline='hover'>
					home page
				</Link>
			</div>
		</div>
	)
}
export default Catalog
