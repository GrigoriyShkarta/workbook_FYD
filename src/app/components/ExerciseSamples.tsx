'use client'

import { useState, useRef } from 'react'

const ExerciseSamples = () => {
	const [activeExercise, setActiveExercise] = useState<number | null>(null)
	const [currentTime, setCurrentTime] = useState<number[]>(Array(3).fill(0))
	const [duration, setDuration] = useState<number[]>(Array(3).fill(0))
	const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

	const exercises = [
		{
			id: 1,
			title: 'Вправа 1',
			description:
				"Базова вправа для підготовки голосових зв'язок до екстремального вокалу",
			demo: '/audio/demo1.mp3',
		},
		{
			id: 2,
			title: 'Вправа 2',
			description: 'Розвиває високу тесситуру та контроль над скрімінгом',
			demo: './audio/demo2.mp3',
		},
		{
			id: 3,
			title: 'Вправа 3',
			description: 'Вправа для збільшення сили та виразності дисторшну',
			demo: '/audio/demo3.mp3',
		},
	]

	const togglePlay = (index: number) => {
		if (activeExercise === index) {
			audioRefs.current[index]?.pause()
			setActiveExercise(null)
		} else {
			if (activeExercise !== null) {
				audioRefs.current[activeExercise]?.pause()
			}
			audioRefs.current[index]?.play()
			setActiveExercise(index)
		}
	}

	const handleTimeUpdate = (index: number) => {
		if (audioRefs.current[index]) {
			setCurrentTime(prev => {
				const newTimes = [...prev]
				newTimes[index] = audioRefs.current[index]?.currentTime || 0
				return newTimes
			})
		}
	}

	const handleLoadedMetadata = (index: number) => {
		if (audioRefs.current[index]) {
			setDuration(prev => {
				const newDurations = [...prev]
				newDurations[index] = audioRefs.current[index]?.duration || 0
				return newDurations
			})
		}
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	return (
		<section id='exercises' className='py-20 bg-gray-800/50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-neon-blue text-center mb-12'>Приклади вправ</h2>

				<div className='grid md:grid-cols-3 gap-8'>
					{exercises.map((exercise, index) => (
						<div
							key={exercise.id}
							className='bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition group'
						>
							<div className='flex justify-between items-start mb-4'>
								<h3 className='text-xl font-bold text-purple-400'>
									{exercise.title}
								</h3>
							</div>
							{/* <p className='text-gray-300 mb-6'>{exercise.description}</p> */}

							<audio
								ref={el => {
									audioRefs.current[index] = el
								}}
								src={exercise.demo}
								onEnded={() => setActiveExercise(null)}
								onTimeUpdate={() => handleTimeUpdate(index)}
								onLoadedMetadata={() => handleLoadedMetadata(index)}
							/>

							<div className='space-y-3'>
								<div className='flex items-center justify-between'>
									<button
										onClick={() => togglePlay(index)}
										className={`p-3 rounded-full flex items-center justify-center ${
											activeExercise === index
												? 'bg-purple-600 hover:bg-purple-700'
												: 'bg-gray-700 hover:bg-gray-600'
										} transition`}
										aria-label={
											activeExercise === index ? 'Пауза' : 'Відтворити'
										}
									>
										{activeExercise === index ? (
											<svg
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path
													fillRule='evenodd'
													d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z'
													clipRule='evenodd'
												/>
											</svg>
										) : (
											<svg
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
													clipRule='evenodd'
												/>
											</svg>
										)}
									</button>

									<div className='flex-1 mx-4'>
										<div className='h-1 bg-gray-700 rounded-full overflow-hidden'>
											<div
												className='h-full bg-purple-500'
												style={{
													width:
														duration[index] > 0
															? `${
																	(currentTime[index] / duration[index]) * 100
															  }%`
															: '0%',
												}}
											/>
										</div>
									</div>

									<span className='text-xs text-gray-400 w-10 text-right'>
										{formatTime(
											activeExercise === index ? currentTime[index] : 0
										)}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-16 text-center'>
					<h3 className='text-2xl font-bold mb-4'>
						Готові до наступного рівня?
					</h3>
					<p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
						Отримайте повний збірник з 20 професійними вправами, детальними
						інструкціями та програмою тренувань
					</p>
					<button className='bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full transition hover:opacity-90 hover:scale-105'>
						Завантажити збірник
					</button>
				</div>
			</div>
		</section>
	)
}

export default ExerciseSamples
