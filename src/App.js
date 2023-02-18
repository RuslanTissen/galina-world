import './App.scss';
import Header from './components/header/Header.jsx';
// import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Footer from './components/footer/Footer';
// import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
// const about = document.getElementsByClassName('')

	return (
		<div className="app">
			<Header />
			<Pictuer />
			{/* <div id={'pricing'} ><MidSection title={"Pricing"} text={<LoremIpsum avgWordsPerSentence={3} />} image={img1} /></div>
			<div id={'open-time'} ><MidSection title={"Open Time"} text={<LoremIpsum avgWordsPerSentence={5} />} image={img2} /></div>
			<div id={'adress'}><MidSection  title={"Adress"} text={<LoremIpsum avgWordsPerSentence={1} />} image={img3} /></div>
			<div id={"about"}><MidSection title={"About"} text={<LoremIpsum />} image={img4} /></div> */}
			<Footer />
		</div>
	);
}

export default App;
