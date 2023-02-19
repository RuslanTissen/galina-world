import React from 'react'
import './Footer.scss'
import { GrFacebookOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa'
// import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import tissen from "../../images/tissen.png"
// import tissen from "../../images/tissen1.png"

export default function Footer() {
	return (
		<div id="footer" className="footer">
			<div className="footer-links">
				{/* <a href="#nav"><img src={liya} alt="" /></a> */}
				{/* <AnchorLink href="#foto"><img src={liya} alt="liya" /></AnchorLink> */}
				<a href='#'><GrFacebookOption /></a>
				<a href='#'><BsTwitter /></a>
				<a href="#"><FaLinkedinIn /></a>
				<a href="#"><FaTelegram /></a>
			</div>
			<div className="studio">
				<a href="">Created by studio<br /><img src={tissen} alt="tissen" /> </a>
				{/* <h5>Created by </h5> */}
			</div>
		</div>
	)
}