import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledButtons = styled.div`
	svg {
		display: none;
		font-size: 1.5rem;
		@media (min-width: 768px) {
			display: block;
		}
		@media (min-width: 992px) {
			display: none;
		}
	}
	button {
		min-width: 80px;
		text-transform: capitalize;
		/* padding: .5rem 1rem; */
		border-radius: 8px;
		font-weight: 600;
		min-height: 40px;
		max-height: 40px;
		min-width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
const Buttons = () => {
	return (
		<StyledButtons className="flex items-center gap-2 md:gap-3 text-sm xl:text-base">
			<FiSearch />
			<button className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow">
				register
			</button>
			<button className="border-2 shadow">sign in</button>
		</StyledButtons>
	)
}
export default Buttons
