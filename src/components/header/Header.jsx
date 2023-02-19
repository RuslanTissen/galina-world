import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
// import logo from "../../images/logo-home.png"
import { AiOutlineHome } from 'react-icons/ai'

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<ul className='ul-first'>
				<AnchorLink href="#foto" className="logo"><AiOutlineHome /></AnchorLink>
				<li className="alq"><AnchorLink href="#alq">ALQUILER/VENTA</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#detalles">DETALLES</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#contacto">CONTACTO</AnchorLink></li>
				<li className='personal'><AnchorLink href="#personal">PERSONAL</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="alq"><AnchorLink href="#alq">ALQUILER/VENTA</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#detalles">DETALLES</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#contacto">CONTACTO</AnchorLink></li>
				<li className="personal"><AnchorLink href="#personal">PERSONAL</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header