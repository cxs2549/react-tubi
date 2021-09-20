import styled from 'styled-components'
import Hero from './Hero/Hero'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

const StyledHome = styled.div`

`



const Home = () => {
	return (
		<StyledHome className="h-screen bg-green-200">
		<Hero />
		</StyledHome>
	)
}
export default Home
