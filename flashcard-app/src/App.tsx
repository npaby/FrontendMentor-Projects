
import './App.css'
import data from './data.js'
import CardItem from './components/CardItem.tsx'
import CardForm from './components/CardForm.tsx'
import CardHeader from './components/CardHeader.tsx'

function App() {
	const cardContainer = data.flashcards.map((item) => <CardItem props={item}/>)
	return (
		<>
			{/*<h1>Hello</h1>*/}
			<CardHeader/>
			<CardForm/>
			{/*<!-- All Cards end -->*/}
			<div className="cards-container">
				{cardContainer}
			</div>
		</>
	)
}

export default App
