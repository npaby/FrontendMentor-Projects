import CardForm from '../components/CardForm.tsx'
import CardItem from '../components/CardItem.tsx'
import type {CardItemProps} from '../types.ts'
import {DataContext} from '../contexts/DataContext.tsx'
import * as React from 'react'

export default function AllCardsLayout() {
	const { data } = React.useContext(DataContext);
	const cardContainer = data.map((item:CardItemProps) => <CardItem props={item} key={item.id}/>)
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