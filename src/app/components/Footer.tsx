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
							Збірник вправ для екстремального та сучасного вокалу у рок-стилі.
						</p>
					</div>

					<div>
						<h4 className='text-lg font-bold mb-4'>Навігація</h4>
						<ul className='space-y-2'>
							<li>
								<a
									href='#about'
									className='text-gray-400 hover:text-purple-400 transition'
								>
									Про збірник
								</a>
							</li>
							<li>
								<a
									href='#exercises'
									className='text-gray-400 hover:text-purple-400 transition'
								>
									Вправи
								</a>
							</li>
							<li>
								<a
									href='#author'
									className='text-gray-400 hover:text-purple-400 transition'
								>
									Автор
								</a>
							</li>
							<li>
								<a
									href='#pricing'
									className='text-gray-400 hover:text-purple-400 transition'
								>
									Ціна
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-lg font-bold mb-4'>Контакти</h4>
						<ul className='space-y-2 text-gray-400'>
							<li>Email: info@fireupyourdrive.com</li>
							<li>Телефон: +380 12 345 6789</li>
						</ul>
					</div>

					<div>
						<h4 className='text-lg font-bold mb-4'>Соцмережі</h4>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-gray-400 hover:text-purple-400 transition'
							>
								Instagram
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-purple-400 transition'
							>
								YouTube
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-purple-400 transition'
							>
								Telegram
							</a>
						</div>
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
