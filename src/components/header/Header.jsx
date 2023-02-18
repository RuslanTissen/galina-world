import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import logo from "../../images/logo-home.png"
import {AiOutlineHome} from 'react-icons/ai'

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<ul className='ul-first'>
				<AnchorLink href="#foto" className="logo"><AiOutlineHome /></AnchorLink>
				<li className="pricing"><AnchorLink href="#pricing">PRICING</AnchorLink> </li>
				<li className="time"><AnchorLink href="#open-time">OPEN TIME</AnchorLink></li>
				<li className="adress"><AnchorLink href="#adress">ADRESS</AnchorLink></li>
				<li><AnchorLink href="#about" >ABOUT</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="pricing"><AnchorLink href="#pricing">PRICING</AnchorLink> </li>
				<li className="time"><AnchorLink href="#open-time">OPEN TIME</AnchorLink></li>
				<li className="adress"><AnchorLink href="#adress">ADRESS</AnchorLink></li>
				<li className="about"><AnchorLink href="#about">ABOUT</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header