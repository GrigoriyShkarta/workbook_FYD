import Image from 'next/image'

import ava from '@/assets/ava.jpg'

const AboutAuthor: React.FC = () => {
	return (
		<section id='author' className='py-20 container mx-auto px-4'>
			<h2 className='text-neon-blue text-center mb-12'>Про автора</h2>

			<div className='flex gap-12 items-center max-sm:flex-col'>
				<div className='flex justify-center h-full w-full max-sm:h-[400px]'>
					<div className='w-full max-h-[500px]'>
						<Image
							src={ava}
							alt='Автор збірника'
							width={360}
							height={360}
							className='relative rounded-xl w-full max-w-md border-2 border-purple-500/30'
							// style={{ position: 'relative' }}
						/>
						{/* <div className=' -inset-4 border border-purple-500/20 rounded-xl -z-10'></div> */}
					</div>
				</div>

				<div>
					{/* <h3 className='text-3xl font-bold mb-6'>Олександр Воронов</h3> */}
					{/* <p className='text-gray-300 mb-4'>
						Професійний вокаліст з 15-річним досвідом, спеціаліст з
						екстремального та сучасного вокалу.
					</p>
					<p className='text-gray-300 mb-4'>
						Виступав з відомими рок- та метал-гуртами, проводив майстер-класи по
						всій Україні та за кордоном.
					</p>
					<p className='text-gray-300 mb-6'>
						Автор унікальної методики навчання, яка поєднує класичні вокальні
						техніки з сучасними підходами до екстремального вокалу.
					</p> */}

					<p className='text-gray-300 mb-4'>
						Привіт! Я — Яна, викладач сучасного, рок- та екстрим-вокалу,
						співачка і музикант з понад 15-річним досвідом у музиці та 8 років —
						у викладанні вокалу. Моя мета — допомогти тобі досягти найкращих
						результатів у вокалі, розвинути твій голос і освоїти складні
						екстрим-техніки.
					</p>

					<p className='text-gray-300 mb-4'>
						Колись я не могла знайти ідеальних вправ для тренування необхідної
						техніки та ще в своєму улюбленому стилі, тому вирішила створити їх
						сама — для себе, своїх учнів і всіх бажаючих розвиватися.
					</p>

					<p className='text-gray-300 mb-4'>
						&quot;Fire Up Your Drive&quot; — це результат багаторічної роботи,
						яка об’єднує мої знання, досвід і пристрасне бажання поділитися
						ефективними методами тренувань з кожним, хто прагне вдосконалювати
						свої навички.
					</p>

					<div className='bg-gray-800 p-6 rounded-xl'>
						<h4 className='text-xl font-bold mb-3 text-purple-400'>Кредо:</h4>
						<p className='italic text-gray-300'>
							&quot;Будь-який голос можна розвинути - головне знайти правильний
							підхід та регулярно працювати. Моя мета - допомогти вам розкрити
							свій унікальний вокальний потенціал.&quot;
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutAuthor
