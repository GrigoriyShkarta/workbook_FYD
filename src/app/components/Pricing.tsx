const Pricing = () => {
	return (
		<section id='pricing' className='py-20 bg-gray-800/50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-neon-blue text-center mb-6'>Вартість збірника</h2>
				<p className='text-center text-gray-400 mb-12 max-w-2xl mx-auto'>
					Інвестуйте у свій голос - отримайте професійний інструмент для
					розвитку, який залишиться з вами назавжди
				</p>

				<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
					<div className='bg-gray-900 p-8 rounded-xl border border-gray-700'>
						<h3 className='text-xl font-bold mb-4 text-center'>Базовий</h3>
						<div className='text-center mb-6'>
							<span className='text-4xl font-bold'>499</span>
							<span className='text-gray-400'>₴</span>
						</div>
						<ul className='space-y-3 mb-8'>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>20 аудіо-вправ</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Інструкції до вправ</span>
							</li>
							<li className='flex items-start'>
								<span className='text-gray-500 mr-2'>✗</span>
								<span className='text-gray-500'>Програма тренувань</span>
							</li>
							<li className='flex items-start'>
								<span className='text-gray-500 mr-2'>✗</span>
								<span className='text-gray-500'>Доступ до спільноти</span>
							</li>
						</ul>
						<button className='w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition'>
							Обрати
						</button>
					</div>

					<div className='bg-gray-900 p-8 rounded-xl border-2 border-purple-500 relative transform scale-105 z-10'>
						<div className='absolute top-0 right-0 bg-purple-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg'>
							НАЙКРАЩИЙ ВИБІР
						</div>
						<h3 className='text-xl font-bold mb-4 text-center'>Повний</h3>
						<div className='text-center mb-6'>
							<span className='text-4xl font-bold'>799</span>
							<span className='text-gray-400'>₴</span>
						</div>
						<ul className='space-y-3 mb-8'>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>20 аудіо-вправ</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Детальні інструкції</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>4-тижнева програма</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Доступ до спільноти</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Бонус: поради з охорони голосу</span>
							</li>
						</ul>
						<button className='w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 rounded-lg transition'>
							Обрати
						</button>
					</div>

					{/* <div className='bg-gray-900 p-8 rounded-xl border border-gray-700'>
						<h3 className='text-xl font-bold mb-4 text-center'>Преміум</h3>
						<div className='text-center mb-6'>
							<span className='text-4xl font-bold'>1299</span>
							<span className='text-gray-400'>₴</span>
						</div>
						<ul className='space-y-3 mb-8'>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Усе з повного пакету</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Особистий розбір техніки</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>30-хвилинна консультація</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>Додаткові бонусні матеріали</span>
							</li>
						</ul>
						<button className='w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition'>
							Обрати
						</button>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Pricing
