import React from "react"
import './Mid-section.scss'

function MidSection(props) {
	let { title, text, image, a } = props

	return (
		<div className="section">
		<img className="img" src={image} alt="image" />
			<div className="section-text">
				<a className="whatsapp" href={a}></a>
				<div className="title">{title} </div>
				<div className="text">{text}</div>
			</div>
		</div>
	)
}

export default MidSection