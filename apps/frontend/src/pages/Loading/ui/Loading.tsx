import { Spinner } from '@nextui-org/react'

const Loading = () => {
	return (
		<div className='flex items-center justify-center h-[85vh]'>
			<Spinner size='lg' />
		</div>
	)
}

export default Loading
