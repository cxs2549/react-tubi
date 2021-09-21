import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Buttons from './Buttons/Buttons'
import Links from './Links/Links'
import Searchbar from './Searchbar/Searchbar'
import Headroom from 'react-headroom'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { useEffect, useRef } from 'react'

const StyledHeader = styled.header`
	
`
const Header = () => {
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 550) {
				headerRef.current.classList.add('bg-black')
			} else {
				headerRef.current.classList.remove('bg-black')
			}
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})
	const links = [ 'browse', 'tubi kids', 'news on tubi' ]
	const headerRef = useRef()
	return (
		<Headroom>
			<StyledHeader
				className="h-20 bg-gradient-to-b from-gray-900 to-transparent transition-colors duration-200"
				ref={headerRef}
			>
				<div className="max-w-6xl mx-auto px-4 xl:px-0 flex items-center justify-between h-full ">
					<div className="flex gap-1 md:gap-8 items-center">
						<BurgerMenu links={links} />
						<img src={logo} alt="" className="w-20 filter invert object-cover" />
						<Links links={links} />
					</div>
					<div className="flex gap-4 xl:gap-8">
						<div className="hidden lg:block">
							<Searchbar />
						</div>
						<Buttons />
					</div>
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
