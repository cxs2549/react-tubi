import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchbar = styled.div`
	svg {
		font-size: 1.25rem;
	}
	input {
		min-width: 100%;
		max-width: 500px;
		font-size: 94%;
		@media (min-width: 768px) {
			min-width: 320px;
			max-width: 600px;

			opacity: .7;
		}
	}
`
const Searchbar = () => {
	return (
		<StyledSearchbar className="relative">
			<input
				type="search"
				placeholder="Find movies, TV shows, and more..."
				className="focus:outline-none bg-gray-800 text-white py-2 px-5 rounded-full"
			/>
			<div className="absolute text-gray-400 right-5 top-1/2 transform -translate-y-1/2">
				<FiSearch />
			</div>
		</StyledSearchbar>
	)
}
export default Searchbar
