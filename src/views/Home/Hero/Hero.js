import styled from 'styled-components'
const StyledHero = styled.div`
	position: relative;
	background-image: linear-gradient(to top, rgba(0,0,0,.75) 10%, transparent), linear-gradient(to bottom, rgba(0,0,0,.5) 1%, transparent 10%), url(${(props) => props.img}) ;
    background-size: cover;
	background-repeat: no-repeat;
    background-position: center center;
	height: 40vh;
	filter: brightness(1.1);
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
			<div className="max-w-6xl mx-auto h-full flex flex-col justify-end md:pb-5">
				<div className="px-4 py-4 xl:px-0">
					<h1 className="opacity-80 text-3xl md:text-6xl font-bold capitalize max-w-sm">{title}</h1>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
