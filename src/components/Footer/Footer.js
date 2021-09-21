import styled from 'styled-components'
import logo from '../../assets/logo.png'
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineTwitter,
	AiOutlineLinkedin
} from 'react-icons/ai'

const StyledFooter = styled.footer`background-color: #18181c;
    #socials svg {
        font-size: 2rem;
    }
`
const Footer = () => {
	const links = [
		{ name: 'company', links: [ 'about us', 'careers', 'contact' ] },
		{ name: 'support', links: [ 'contact support', 'help center', 'supported devices', 'activate your device' ] },
		{ name: 'partners', links: [ 'advertise with us', 'partner with us' ] },
		{ name: 'get the apps', links: [ 'iOS', 'android', 'roku', 'amazon fire' ] },
		{ name: 'press', links: [ 'press release', 'tubi in the news' ] },
		{ name: 'legal', links: [ 'privacy policy', 'terms of use', 'do not sell my personal information'] }
	]
	const socials = [
		<AiOutlineFacebook />,
		<AiOutlineInstagram />,
		<AiOutlineLinkedin />,
		<AiOutlineTwitter />
	]
	return (
		<StyledFooter className="lg:col-span-2 w-full">
			<div className="w-full max-w-6xl mx-auto px-4 xl:px-0 py-8">
				<div className="flex items-center justify-between border-b border-gray-800 pb-8">
					<img src={logo} className="w-20 filter invert" alt="" />
					<div id="socials" className="flex gap-4">
                        {socials.map((social, i) => (
                            <div key={i} className="cursor-pointer">{social}</div>
                        ))}
                    </div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 py-8 border-b border-gray-800">
					{links.map((link, i) => (
						<ul key={i}>
							<h4 className="mb-3 uppercase font-semibold text-xs">{link.name}</h4>
							{link.links.map((link, i) => (
								<li key={i} className="capitalize py-1 text-sm hover:underline cursor-pointer">
									{link}
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="pt-8 text-center text-xs gap-2 flex flex-col">
					<span>Copyright &copy; 2021 CxS Development for Tubi, Inc.</span>
					<p>
						Tubi is a registered trademark of Tubi, Inc. <br />
						All rights reserved.
					</p>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
