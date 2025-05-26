const AbstractElement = () => {
	return (
		<div className='fixed inset-0 overflow-hidden pointer-events-none -z-10'>
			<div className='absolute top-0 left-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
			<div className='absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
		</div>
	)
}

export default AbstractElement
