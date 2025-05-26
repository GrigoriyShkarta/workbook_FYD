import Image from 'next/image'
import workbook from '@/assets/workbook.jpg'

const Banner = () => {
	return (
		<section className='relative py-20 overflow-hidden max-sm:pb-0'>
			<div className='container mx-auto px-4 relative z-10 flex items-center max-sm:flex-col gap-10'>
				<div className='max-w-3xl'>
					<h2 className='text-neon-blue mb-6'>Розпали свій голос</h2>
					<h1 className='text-5xl md:text-6xl font-bold mb-6'>
						Fire Up Your Drive
					</h1>
					<p className='text-xl text-gray-300 mb-8'>
						20 унікальних вправ у рок-стилі для екстремального та сучасного
						вокалу
					</p>
					<button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105'>
						Отримати збірник
					</button>
				</div>

				<Image
					src={workbook}
					alt='workbook'
					// fill
					className='w-1/2 max-sm:w-full max-h-[500px]'
				/>
			</div>
			<div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-0'></div>
		</section>
	)
}

export default Banner
