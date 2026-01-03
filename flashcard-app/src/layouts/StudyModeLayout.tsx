import * as React from 'react'
import {DataContext, type DataContextProps} from '../contexts/DataContext.tsx'

export default function StudyModeLayout() {
	const dataProvided : DataContextProps = React.useContext(DataContext);
	const curr = dataProvided.data[1]
	return(
		<div className="study-mode">
			<div className="flashcard corner shadow">
				<div className="header">
					<button>
						All Categories
					</button>
					<h1>
						Hide Mastered
					</h1>
					<button className="shuffle-button">
						Shuffle
					</button>
				</div>
				<div className="content">
					{curr.id}
				</div>
				<div className="footer">

				</div>
			</div>
			<div className="statistics corner shadow">
				<h1>
					Study Statistics
				</h1>
				<div className="data-container shadow">
					<h1>Total Cards</h1>
					<h2>40</h2>
				</div>
				<div className="data-container shadow">
					<h1>Mastered</h1>
					<h2>11</h2>
				</div>
				<div className="data-container shadow">
					<h1>In Progress</h1>
					<h2>21</h2>
				</div>
				<div className="data-container shadow">
					<h1>Not Started</h1>
					<h2>8</h2>
				</div>
			</div>
		</div>
	)
}