'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	// Закрытие меню при изменении размера экрана
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false)
			}
		}

		// Эффект для изменения хедера при скролле
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed w-full z-50 transition-all ${
				isScrolled || isMenuOpen
					? 'bg-gray-900/90 backdrop-blur-sm py-2'
					: 'py-4'
			}`}
		>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<Link
						href='/'
						className='title text-2xl font-bold hover:opacity-80 transition'
					>
						Fire Up Your Drive
					</Link>

					{/* Десктопное меню */}
					<nav className='hidden md:block'>
						<ul className='flex space-x-6'>
							<li>
								<Link
									href='#about'
									className='hover:text-purple-400 transition'
								>
									Про збірник
								</Link>
							</li>
							<li>
								<Link
									href='#exercises'
									className='hover:text-purple-400 transition'
								>
									Вправи
								</Link>
							</li>
							<li>
								<Link
									href='#author'
									className='hover:text-purple-400 transition'
								>
									Автор
								</Link>
							</li>
							<li>
								<Link
									href='#pricing'
									className='hover:text-purple-400 transition'
								>
									Ціна
								</Link>
							</li>
						</ul>
					</nav>

					{/* Мобильная кнопка меню */}
					<button
						className='md:hidden text-gray-300 hover:text-purple-400 focus:outline-none'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label='Меню'
					>
						{isMenuOpen ? (
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Мобильное меню */}
				<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
					<div className='pt-4 pb-6 space-y-2'>
						<Link
							href='#about'
							className='block px-3 py-2 hover:bg-gray-800 rounded hover:text-purple-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Про збірник
						</Link>
						<Link
							href='#exercises'
							className='block px-3 py-2 hover:bg-gray-800 rounded hover:text-purple-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Вправи
						</Link>
						<Link
							href='#author'
							className='block px-3 py-2 hover:bg-gray-800 rounded hover:text-purple-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Автор
						</Link>
						<Link
							href='#pricing'
							className='block px-3 py-2 hover:bg-gray-800 rounded hover:text-purple-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Ціна
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
