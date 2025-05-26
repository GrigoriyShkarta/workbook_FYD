import AboutAuthor from './components/AboutAuthor'
import AboutCollection from './components/AboutCollection'
import AbstractElement from './components/AbstractElement'
import Banner from './components/Banner'
import ExerciseSamples from './components/ExerciseSamples'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

export default function Home() {
	return (
		<div className='bg-gray-900 text-gray-100 min-h-screen'>
			<AbstractElement />
			<Header />
			<main>
				<Banner />
				<AboutCollection />
				<ExerciseSamples />
				<AboutAuthor />
				<Pricing />
				<Testimonials />
				<FAQ />
			</main>

			<Footer />
		</div>
	)
}
