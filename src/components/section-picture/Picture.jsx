import React from "react"
import './Picture.scss'
import home from "../../images/house.png"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">
			<div className="picture-container">
				<img src={home} alt="baner" className="onscroll-image-fade-in"/>
			</div>
			<div className="moto">
				<h1>¡AQUÍ PARA AYUDARLE A ENCONTRAR LA CASA DE SUS SUEÑOS!</h1>
			</div>
		</div>
	)
}