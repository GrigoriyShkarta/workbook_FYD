'use client'

import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const faqs = [
		{
			question: 'Чи підійде цей збірник для початківців?',
			answer:
				'Так, збірник містить вправи різного рівня складності, включаючи спеціальні вправи для початківців з детальними поясненнями.',
		},
		{
			question: 'Як часто потрібно виконувати вправи?',
			answer:
				'Рекомендуємо займатися 4-5 разів на тиждень по 20-30 хвилин. У повній версії збірника є готова програма тренувань.',
		},
		{
			question: "Чи можу я пошкодити голосові зв'язки цими вправами?",
			answer:
				'Вправи розроблені з урахуванням безпеки, але важливо дотримуватися всіх рекомендацій. Якщо відчуваєте біль ані дискомфорт - припиніть заняття.',
		},
		{
			question: 'Як отримати доступ до збірника після оплати?',
			answer:
				'Після оплати ви отримаєте лист з посиланням на завантаження всіх матеріалів у цифровому форматі.',
		},
		{
			question: 'Чи є гарантія повернення коштів?',
			answer:
				'Так, ми надаємо 14-денну гарантію повернення коштів, якщо збірник вам не підійде.',
		},
	]

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<section id='faq' className='py-20 bg-gray-800/50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-neon-blue text-center mb-12'>Поширені запитання</h2>

				<div className='max-w-3xl mx-auto'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='mb-4 border-b border-gray-700 last:border-0'
						>
							<button
								onClick={() => toggleFAQ(index)}
								className='w-full py-4 text-left flex justify-between items-center'
							>
								<h3 className='text-lg font-medium'>{faq.question}</h3>
								<span className='text-purple-400 text-xl'>
									{activeIndex === index ? '−' : '+'}
								</span>
							</button>

							{activeIndex === index && (
								<div className='pb-4 text-gray-300'>
									<p>{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FAQ
