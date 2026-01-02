import data from '../data.js'
import CardForm from '../components/CardForm.tsx'

import CardItem from '../components/CardItem.tsx'

export default function AllCardsLayout() {
	const cardContainer = data.flashcards.map((item) => <CardItem props={item} key={item.id}/>)
	return(
		<>
			<CardForm/>
			{/*<!-- All Cards end -->*/}
			<div className="cards-container">
				{cardContainer}
			</div>
		</>
	)
}