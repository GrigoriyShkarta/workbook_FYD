'use client'

import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const faqs = [
		{
			question: 'Чи підійде цей збірник для початківців?',
			answer:
				'Якщо ви тільки починаєте свій вокальний шлях, цей збірник може бути для вас передчасним. Він розроблений для вокалістів із базовим рівнем підготовки, які вже впевнено тримають інтонацію, володіють основами сучасного вокалу та мають перші навички у виконанні екстрим-техніки драйв. Якщо ж ви вже маєте певний досвід і прагнете розвивати свій голос у рок-напрямку — цей збірник стане для вас потужним кроком уперед.',
		},
		{
			question:
				'Я ще не володію технікою драйв, але дуже хочу навчитися. Чи підійде мені збірник?',
			answer:
				'Якщо ви ще не володієте екстрим-технікою драйв, я рекомендую спершу пройти мій авторський вокальний марафон "Fire Up Your Drive". Він спеціально створений для тих, хто хоче навчитися драйву з нуля — безпечно, поступово та з глибоким розумінням механіки звучання. У марафоні ви отримаєте всі необхідні інструменти, щоб упевнено стартувати.\n\n' +
				'Сам збірник "Fire Up Your Drive" — це вже наступний рівень. Він ідеально підходить для тренувань, коли техніка вже освоєна хоча б на базовому рівні.\n\n' +
				'Але! Якщо ви хочете навчатися й одразу закріплювати матеріал на практиці — ви можете придбати марафон і збірник разом. Це найефективніший варіант, і до того ж я дарую знижку -10% на комплект.',
		},
		{
			question: 'Чи підійде збірник викладачам вокалу?',
			answer:
				'Так, однозначно! \n\n' +
				'Цей збірник — справжній скарб для викладачів вокалу. Ви не лише отримаєте потужний інструмент для власного розвитку, а й зможете поповнити арсенал своїх вправ — структурованих, стильних, перевірених на практиці.',
		},
		{
			question: 'Як придбати збірник?',
			answer:
				'Напишіть мені, який формат вас цікавить: \n\n' +
				'🔸 Базовий — збірник в PDF-форматі, стилізовані рок-вправи. \n\n' +
				'🔸 Повний — збірник в друкованому та PDF-форматі, стилізовані рок-вправи. \n\n' +
				'Я надішлю вам реквізити для оплати та коротку інструкцію.',
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
									{faq.answer.split('\n\n').map((paragraph, pIndex) => (
										<p key={pIndex} className='mb-4 last:mb-0'>
											{paragraph.trim()}
										</p>
									))}
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
