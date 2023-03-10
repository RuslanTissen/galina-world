import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Footer from './components/footer/Footer';
import { LoremIpsum } from 'react-lorem-ipsum';
import thinking from "./images/thinking.png"
import idea from "./images/idea.png"
import kontract from "./images/contract.png"
import personal from "./images/personal.png"
// import wa from "./images/WhatsAppButtonGreenMedium.png"
import { BsWhatsapp } from "react-icons/bs"

function App() {
	// const about = document.getElementsByClassName('')

	return (
		<div className="app">
			<Header />
			<Pictuer />
			<div id={'alq'} >
				<MidSection
					image={thinking}
					title={"Alquiler o Venta?"}
					text={"Quiere comprar una casa o un apartamento, o tal vez alquilar una casa adosada. ¿Y no sabes por dónde empezar? ¡Entonces estás en la compañía adecuada! Te ayudaremos a elegir una zona con un buen colegio para tus hijos, con una ubicación conveniente y rápido acceso al metro y a los intercambiadores de transporte."} />
			</div>
			<div id={'detalles'} >
				<MidSection
					image={idea}
					// title={"Open Time"}
					text={"Y así encontró la casa de sus sueños, pero el procedimiento de registro no le resulta familiar. ¡Ningún problema! ¡Te contamos todos los detalles y te ayudamos con los trámites y el contrato!"} />
			</div>
			<div id={'contacto'}>
				<MidSection
					image={kontract}
					text={"Nuestro personal calificado llevará a cabo la transacción desde el inicio hasta la firma del contrato. ¡Hasta la entrega de las llaves de tu nuevo nido!"}
					a={<a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/5491145579810"><BsWhatsapp style={{margin:"5px 0", width:"2em", height:"2em", color:"rgb(0,168,132)"}}/> </a>} />
			</div>
			<div id={"personal"}>
				<MidSection
					image={personal}
					title={"Personal."}
					text={"Nuestro amable equipo está bien educado y capacitado. ¡Y nuestras ofertas exitosas hablan por sí solas! ¡Y nuestra súper profesional Galina lleva a todo el equipo al éxito!"} />
			</div>

			<Footer />
		</div>
	);
}

export default App;
