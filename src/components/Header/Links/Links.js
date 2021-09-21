import styled from 'styled-components'
import { useState } from 'react'
import news1 from '../../../assets/news/news-1.png'
import news2 from '../../../assets/news/news-2.png'
import news3 from '../../../assets/news/news-3.png'
import news4 from '../../../assets/news/news-4.png'
import news5 from '../../../assets/news/news-5.png'
import news6 from '../../../assets/news/news-6.png'
import news7 from '../../../assets/news/news-7.png'

const StyledLinks = styled.nav`
	#links ul {
		min-width: 200px;
		background-color: #333;
		overflow-y: scroll;
		color: white;
		&:nth-child(odd) {
			background-color: black;
		}
	}
	#news {
		max-height: 600px;
		ul {

			max-width: 240px;
			background-color: #333;
			overflow-y: scroll;
			&:nth-child(odd) {
				background-color: black;
			}
		}
	}
`

const sublinks = [
	{ name: 'popular', links: [ 'featured', 'leaving soon', 'most popular', 'trending now' ] },
	{ name: 'genres', links: [ 'action', 'drama', 'sci-fi', 'western' ] },
	{ name: 'collections', links: [ 'not on netflix', 'cult classics', 'good eats' ] },
	{ name: 'networks', links: [ 'a&e', 'lifetime', 'FOX' ] }
]

const newsLinks = [
    {name: 'national', links: [news1, news7, news5]},
    {name: 'global', links: [news2, news4, news1]},
    {name: 'business', links: [news3, news6, news1]},
    {name: 'culture & entertainment', links: [news4, news2, news6, news7]},
    {name: 'local', links: [news5]},
]

const Links = ({ links }) => {
	const [ isActive, setIsActive ] = useState(null)

	const handleClick = (link) => {
		setIsActive(link)
		document.body.classList.toggle('freeze-flow')
	}
	const handleClose = () => {
		setIsActive(null)
		document.body.classList.remove('freeze-flow')
	}

	return (
		<StyledLinks className="md:flex gap-8 capitalize font-semibold hidden">
			{links.map((link, i) => (
				<div
					key={i}
					className="relative whitespace-nowrap py-8"
					onMouseEnter={() => handleClick(link)}
					onMouseLeave={handleClose}
				>
					<span className="cursor-pointer">{link}</span>
					{isActive === 'browse' &&
					i === 0 && (
						<div className="bg-white  absolute top-20 text-black overflow-hidden  rounded-lg grid grid-cols-2 lg:grid-cols-4 min-w-max opacity-90" id="links">
							{sublinks.map((link, i) => (
								<ul key={i} className="  pb-4">
									<h4 className="px-4 pt-4 mb-2 text-xs uppercase text-gray-200">
										{link.name}
									</h4>
									{link.links.map((link, i) => (
										<li
											key={i}
											className="px-4 py-2 text-sm cursor-pointer  hover:opacity-100 hover:bg-gray-800"
										>
											{link}
										</li>
									))}
								</ul>
							))}
						</div>
					)}
					{isActive === 'news on tubi' &&
					i === 2 && (
						<div className="bg-gray-800  fixed left-1/2 transform -translate-x-1/2 max-w-3xl  mx-auto top-20 text-black overflow-y-scroll rounded-lg grid grid-cols-3 xl:grid-cols-5 min-w-max opacity-90" id="news">
							{newsLinks.map((link, i) => (
								<ul key={i} className="  pb-4">
									<h4 className="px-4 pt-4 mb-2 text-xs uppercase text-gray-200">
										{link.name} news
									</h4>
									{link.links.map((link, i) => (
										<li
											key={i}
											className="px-4 py-2 text-sm cursor-pointer opacity-80 hover:opacity-100 "
										>
											<img src={link} className="rounded w-32 md:w-full" alt="" />
										</li>
									))}
								</ul>
							))}
						</div>
					)}
				</div>
			))}
		</StyledLinks>
	)
}
export default Links
