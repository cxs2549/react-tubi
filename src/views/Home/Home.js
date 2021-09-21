import styled from 'styled-components'
import Hero from './Hero/Hero'
import troy from '../../assets/heroes/troy.png'
import little from '../../assets/heroes/little.png'
import apoc from '../../assets/heroes/apoc.png'
import jen from '../../assets/heroes/jen.png'

import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import Row from './Row/Row'

import recs1 from '../../assets/cards/recs/recs-1.jpg'
import recs2 from '../../assets/cards/recs/recs-2.jpg'
import recs3 from '../../assets/cards/recs/recs-3.jpg'
import recs4 from '../../assets/cards/recs/recs-4.jpg'
import recs5 from '../../assets/cards/recs/recs-5.png'
import trend1 from '../../assets/cards/trending/trending-1.jpg'
import trend2 from '../../assets/cards/trending/trending-2.jpg'
import trend3 from '../../assets/cards/trending/trending-3.png'
import trend4 from '../../assets/cards/trending/trending-4.jpg'
import trend5 from '../../assets/cards/trending/trending-5.jpg'
import pop1 from '../../assets/cards/pop/pop-1.jpg'
import pop2 from '../../assets/cards/pop/pop-2.jpg'
import pop3 from '../../assets/cards/pop/pop-3.jpg'
import pop4 from '../../assets/cards/pop/pop-4.jpg'
import pop5 from '../../assets/cards/pop/pop-5.jpg'

const StyledHome = styled.div`
	background-color: #1c1c22;
	.indicators {
		transform: translateX(-50%) translateY(-.75rem);
		z-index: 100;
		position: absolute;
		border-radius: 999999px;
		left: 50%;
		gap: .5rem;
	}
	.react-slideshow-container + ul.indicators .each-slideshow-indicator::before {
		width: 11px;
		height: 11px;
		background-color: white;
	}
	.react-slideshow-container .default-nav {
		button svg path {
			stroke: white;
		}
	}
	.react-slideshow-container .default-nav:first-of-type {
		transform: translateX(1rem) translateY(5rem);
		background: none;
		color: white;
		opacity: .5;
		svg {
			fill: white;
		}
	}
	.react-slideshow-container .default-nav:last-of-type {
		transform: translateX(-1rem) translateY(5rem);
		background-color: transparent;
		opacity: .5;
		svg {
			fill: white;
		}
	}
`
const recs = [ recs1, recs2, recs3, recs4, recs5 ]
const trending = [ trend1, trend2, trend3, trend4, trend5 ]
const pop = [ pop1, pop2, pop3, pop4, pop5 ]

const Home = () => {
	return (
		<StyledHome className="">
			<Fade easing="ease" indicators>
				<Hero img={troy} title="troy" />
				<Hero img={little} title="little women of atlanta" />
				<Hero img={apoc} title="Apocolypto" />
				<Hero img={jen} title="Jennifer's Body" />
			</Fade>
			<div id="rows">
				<Row title="recommended" images={recs} />
				<Row title="trending" images={trending} />
				<Row title="most popular" images={pop} />
			</div>
		</StyledHome>
	)
}
export default Home
