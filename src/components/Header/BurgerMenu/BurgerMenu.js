import { useState, useRef } from 'react'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'
import Overlay from './Overlay/Overlay'

const StyledBurger = styled.div`
color: white;
`

const BurgerMenu = ({links}) => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		setIsOpen(!isOpen)
		document.body.classList.toggle('freeze-flow')
	}
	const handleClose = () => {
		setIsOpen(false)
		document.body.classList.remove('freeze-flow')
	}

	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)
	return (
		<StyledBurger ref={menuRef} className="md:hidden -ml-2">
			<Hamburger toggled={isOpen} toggle={handleOpen} />
			<Menu open={isOpen} links={links} />
			{isOpen && <Overlay close={handleClose} /> }
			
		</StyledBurger>
	)
}
export default BurgerMenu
