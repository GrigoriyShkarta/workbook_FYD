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
							<span className='text-4xl font-bold'>1500</span>
							<span className='text-gray-400'>₴</span>
						</div>
						<ul className='space-y-3 mb-8'>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>20 аудіо-вправ з демонстраціями та мінусівками</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Унікальні вправи, адаптовані під рок стиль, які максимально
									наближені до реального виконання пісень;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Практика голосних, складів і фраз англійською та українською
									мовами — для відпрацювання всіх етапів роботи над технікою;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Структурована програма, що дозволяє опанувати техніку “Drive”
									поступово, з чітким фокусом на відчуття та безпеку голосу;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Mp3-файли, які можна легко знайти за QR-кодом для зручного
									тренування у будь-який час;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Pdf-збірник Доступ до закритого телеграм-каналу, де зібрані
									всі матеріали;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-gray-500 mr-2'>✗</span>
								<span className='text-gray-500'>Друкована версія збірника</span>
							</li>
						</ul>
						<a href='https://t.me/yana_vocalcoach' target='_blank'>
							<button className='w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition'>
								Обрати
							</button>
						</a>
					</div>

					<div className='bg-gray-900 p-8 rounded-xl border-2 border-purple-500 relative transform scale-105 z-10'>
						<div className='absolute top-0 right-0 bg-purple-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg'>
							НАЙКРАЩИЙ ВИБІР
						</div>
						<h3 className='text-xl font-bold mb-4 text-center'>Повний</h3>
						<div className='text-center mb-6'>
							<span className='text-4xl font-bold'>1750</span>
							<span className='text-gray-400'>₴</span>
						</div>
						<ul className='space-y-3 mb-8'>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>20 аудіо-вправ з демонстраціями та мінусівками</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Унікальні вправи, адаптовані під рок стиль, які максимально
									наближені до реального виконання пісень;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Практика голосних, складів і фраз англійською та українською
									мовами — для відпрацювання всіх етапів роботи над технікою;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Структурована програма, що дозволяє опанувати техніку “Drive”
									поступово, з чітким фокусом на відчуття та безпеку голосу;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Mp3-файли, які можна легко знайти за QR-кодом для зручного
									тренування у будь-який час;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Pdf-збірник Доступ до закритого телеграм-каналу, де зібрані
									всі матеріали;
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-purple-400 mr-2'>✓</span>
								<span>
									Друкована версія збірника (збір заявок для першого тиражу до
									14 червня, відправка збірників після 20 червня).
								</span>
							</li>
						</ul>
						<a href='https://t.me/yana_vocalcoach' target='_blank'>
							<button className='w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 rounded-lg transition'>
								Обрати
							</button>
						</a>
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
