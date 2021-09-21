import styled from 'styled-components'
const StyledHero = styled.div`
	position: relative;
	background-image: linear-gradient(to top, rgba(0,0,0,.5) 1%, transparent), url(${(props) => props.img}) ;
    background-size: cover;
    background-position: center center;
	height: 40vh;
	@media (min-width: 768px) {
        background-size: cover;
		height: 72vh;
	}
	img {
		object-fit: cover;
		min-width: 100%;
	}
`
const Hero = ({ img, title }) => {
	return (
		<StyledHero img={img}>
			<div className="max-w-6xl mx-auto h-full flex flex-col justify-end md:justify-center">
				<div className="px-4 py-4 xl:px-0">
					<h1 className="opacity-80 text-3xl md:text-6xl font-bold capitalize max-w-sm">{title}</h1>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
