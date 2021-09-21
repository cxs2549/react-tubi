import styled from 'styled-components'

const StyledRow = styled.div`
	img {
		min-width: 140px;
		@media (min-width: 768px) {
			min-width: 180px;
		}
	}
    span {
        color: #818184;
    }
`
const Row = ({ title, images }) => {
	return (
		<StyledRow id="row" className="border border-gray-800">
			<div className="max-w-6xl mx-auto  py-8  ">
				<h1 className="text-xl capitalize font-bold px-4 xl:px-0 text-white mb-2">
					{title}
				</h1>
				<div className="flex gap-4 py-3 overflow-x-scroll px-4 xl:px-0 shadow-inner lg:rounded ">
					{images.map((img, i) => (
						<div key={i}>
							<img
								src={img}
								alt=""
								className="cursor-pointer shadow rounded w-56 xl:w-64 opacity-70 hover:opacity-100 transition-opacity duration-200"
							/>
							<div className="py-2">
								<div className="flex justify-between mb-1">
                                    <h4 className="capitalize font-medium">title</h4>
                                    <div className="bg-gray-600 opacity-80  text-white px-2 flex items-center justify-center rounded font-semibold text-xs">TV-14</div>
                                </div>
								<div className="flex flex-col text-xs font-medium">
									<span>(2010) 1hr 30min</span>
									<span>Action, Thriller</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</StyledRow>
	)
}
export default Row
