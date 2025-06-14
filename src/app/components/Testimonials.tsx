const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: 'Марія Цепкова',
			role: 'Учасниця марафону',
			content: 'Дякую, вам за цікавий урок, та неймовірні вправи!',
			rating: 5,
		},
		{
			id: 2,
			name: 'Софія Некоз',
			role: 'Учениця',
			content:
				'Твої вправи — це окремий вид мистецтва! З різними мелодіями, аранжуванням, нотами.',
			rating: 5,
		},
		{
			id: 3,
			name: 'Марія Флис',
			role: 'Учасниця марафону',
			content:
				'Таких стилізованих вправ я ще не виконувала і вони дійсно посприяли тому, що я ще більше полюбила свій голос. Мені дуже сподобалося!',
			rating: 5,
		},
	]

	return (
		<section className='py-20 container mx-auto px-4'>
			<h2 className='text-neon-blue text-center mb-12'>Відгуки</h2>

			<div className='grid md:grid-cols-3 gap-8'>
				{testimonials.map(testimonial => (
					<div
						key={testimonial.id}
						className='bg-gray-900 p-6 rounded-xl border border-gray-700'
					>
						<div className='flex mb-4'>
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${
										i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
									}`}
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							))}
						</div>
						<p className='text-gray-300 mb-6 italic'>
							&quot;{testimonial.content}&quot;
						</p>
						<div>
							<p className='font-bold'>{testimonial.name}</p>
							<p className='text-sm text-gray-400'>{testimonial.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Testimonials
