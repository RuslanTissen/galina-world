import React from "react"
import './Picture.scss'
import home from "../../images/house.png"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">
			<div className="picture-container">
				<img src={home} alt="" />
			</div>
			<div className="moto">
				<h1>HERE TO HELP YOU FIND YOUR DREAM HOME!</h1>
			</div>
		</div>
	)
}