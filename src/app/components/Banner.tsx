import Image from 'next/image'
import workbook from '@/assets/workbook.jpg'

const Banner = () => {
	return (
		<section className='relative py-20 overflow-hidden max-sm:pb-0'>
			<div className='container mx-auto px-4 relative z-10 flex items-center max-sm:flex-col gap-10'>
				<div className='max-w-3xl max-sm:items-center flex flex-col'>
					<h2 className=''>Rock Exercises</h2>
					<h1 className='title text-5xl max-sm:text-[40px] font-bold mb-6 mt-10'>
						Fire Up Your Drive
					</h1>
					<p className='text-xl text-gray-300 mb-8 max-sm:text-center'>
						20 унікальних вправ у рок-стилі для тренування екстремальної
						вокальної техніки “Drive”
					</p>
					<a href='https://t.me/yana_vocalcoach' target='_blank'>
						<button className='max-w-[300px] bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 max-sm:mx-auto'>
							Отримати збірник
						</button>
					</a>
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
