import styled from 'styled-components'
import troy from '../../../assets/heroes/troy.png'
const StyledHero = styled.div`
    img {
        height: 40vh;
        object-fit: cover;
        min-width: 100%;
        @media (min-width: 768px) {
            height: 64vh;
        }
    }
`
const Hero = () => {
return (
<StyledHero>
    <img src={troy} alt="" />
</StyledHero>
)
}
export default Hero