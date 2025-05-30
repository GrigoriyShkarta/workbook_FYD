const Footer = () => {
	return (
		<footer className='bg-gray-900/80 py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-4 gap-8 mb-8'>
					<div>
						<h3 className='text-neon-blue text-xl font-bold mb-4'>
							Fire Up Your Drive
						</h3>
						<p className='text-gray-400'>
							20 унікальних вправ у рок-стилі для тренування екстремальної
							вокальної техніки “Drive”
						</p>
					</div>
				</div>

				<div className='pt-8 border-t border-gray-800 text-center text-gray-500 text-sm'>
					<p>
						© {new Date().getFullYear()} Fire Up Your Drive. Всі права захищені.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
