import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import Searchbar from '../../Searchbar/Searchbar'

import { useState, useRef } from 'react'
const StyledMenu = styled.div`
	position: fixed;
	top: 80px;
	left: ${(props) => (props.open ? '0' : '-100%')};
	transition: left 500ms;
	width: 90%;
	height: calc(100vh - 80px);
	border-top-right-radius: 8px;
	overflow: hidden;
	overflow-y: scroll;
	z-index: 100;
	svg {
		font-size: 1.5rem;
	}
`
const Menu = ({ open, links }) => {
	const [ isOpen, setIsOpen ] = useState(false)
	const [ isOpenSub, setIsOpenSub ] = useState(null)

	const handleClick = () => {
		setIsOpen(!isOpen)
		browserChev.current.classList.toggle('rotate-180')
	}

	const handleSubs = (sub, index) => {
		if (!isOpenSub) {
			setIsOpenSub(sub)
		} else if (isOpenSub === sub) {
			setIsOpenSub(null)
		} else {
			setIsOpenSub(sub)
		}
	}

	const sublinks = [
		{ name: 'popular', links: [ 'featured', 'leaving soon', 'most popular', 'trending now' ] },
		{ name: 'genres', links: [ 'action', 'drama', 'sci-fi', 'western' ] },
		{ name: 'collections', links: [ 'not on netflix', 'cult classics', 'good eats' ] },
		{ name: 'networks', links: [ 'a&e', 'lifetime', 'FOX' ] }
	]

	const browserChev = useRef()
	return (
		<StyledMenu
			open={open}
			className="bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 capitalize font-semibold text-base text-gray-200"
		>
			<div className="px-3 py-4 border-b border-gray-600">
				<Searchbar />
			</div>
			{links.map((link, i) => (
				<div key={i}>
					<div
						onClick={handleClick}
						className="flex relative items-center justify-between px-4 py-4 filter  hover:text-white transition-colors duration-200  cursor-pointer border-b border-gray-600"
					>
						<span>{link}</span>
						{i === 0 && (
							<div ref={browserChev} className="transform">
								<FiChevronDown />
							</div>
						)}
					</div>

					{i === 0 &&
					isOpen && (
						<div className="text-base">
							{sublinks.map((link, i) => (
								<div
									key={i}
									className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
								>
									<div
										onClick={() => handleSubs(link.name, i)}
										className="px-4 hover:text-white transition-colors duration-200 flex  justify-between py-3 border-b border-gray-600   cursor-pointer"
									>
										<h4 className="">{link.name}</h4>
										{/* sub chevron */}
										<div
											className="subchev"
											id={`subchev-${i}`}
											className={`transform  ${isOpenSub === link.name &&
												'rotate-180'}`}
										>
											<FiChevronDown />
										</div>
									</div>
									<div>
										{isOpenSub === link.name && (
											<ul className="text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
												{link.links.map((link, i) => (
													<li
														key={i}
														className="px-4 py-3  hover:text-white transition-colors duration-200 cursor-pointer"
													>
														{link}
													</li>
												))}
											</ul>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</StyledMenu>
	)
}
export default Menu
