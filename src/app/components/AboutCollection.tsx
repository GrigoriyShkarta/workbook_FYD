const AboutCollection = () => {
	return (
		<section id='about' className='py-20 container mx-auto px-4'>
			<h2 className='text-neon-blue text-center mb-12'>Про збірник</h2>

			<div className='grid md:grid-cols-2 gap-12 items-center'>
				<div>
					<h3 className='text-3xl font-bold mb-6'>
						Що таке &quot;Fire Up Your Drive&quot;?
					</h3>
					<p className='text-gray-300 mb-4'>
						&quot;Fire Up Your Drive” — це авторська збірка вправ, яка створена
						для розвитку та вдосконалення техніки “Drive” — однієї з ключових
						екстремальних вокальних технік.
					</p>
					<p className='text-gray-300 mb-4'>
						Ця збірка є логічним продовженням мого авторського марафону з
						однойменною назвою та служить як самостійним, так і додатковим
						тренувальним інструментом.
					</p>
					<p className='text-gray-300'>
						Незалежно від вашого рівня в екстремальному вокалі - початківець чи
						професіонал - ці вправи допоможуть вам вийти на новий рівень
						вокальної майстерності.
					</p>

					<a href='https://fire-up-your-drive-ua.vercel.app/' target='_blank'>
						<button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 mt-12 max-sm:mx-auto block'>
							Детальніше про марафон
						</button>
					</a>
				</div>

				<div className='bg-gray-800 p-8 rounded-xl border border-purple-900/50'>
					<h3 className='text-xl font-bold mb-4 text-purple-400'>
						Що ви отримаєте:
					</h3>
					<ul className='space-y-3'>
						<li className='flex items-start'>
							<span className='text-purple-400 mr-2'>✓</span>
							<span>20 професійних аудіо-вправ;</span>
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
								Mp3-файли, які можна легко завантажити за QR-кодом для зручного
								тренування у будь-який час.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutCollection
