import * as React from 'react'
import {DataContext, type DataContextProps} from '../contexts/DataContext.tsx'
import type {CardItemProps} from '../types.ts'
export default function StudyModeLayout() {
	const dataProvided : DataContextProps = React.useContext(DataContext);
	const [isRevealed, setIsRevealed] = React.useState(false);
	const style:string = isRevealed ? "revealed-style" : "hidden-style";
	const curr:CardItemProps= dataProvided.data[1]
	const content = (
		<>
			<div className={style + " shadow"} onClick={() => setIsRevealed(!isRevealed)}>
				<div className="category">{curr.category}</div>
				<div className="main">

					{
						isRevealed
							?   <h1>{curr.answer}</h1>
							:   <>
								<h1>{curr.question}</h1>
								<h2>Click to reveal answer</h2>
							</>
					}
				</div>
				<div className="progress">
					<progress value={curr.knownCount} max={5} />
					<span>{curr.knownCount}/5</span>
				</div>

			</div>
			<div className="content-buttons">
				<button className="shadow">
					I Know This
				</button>
				<button className="shadow">
					In Reset Progress
				</button>
			</div>
		</>
	)
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
					{content}
				</div>

				<div className="footer">
					<button className="shadow prev-button">
						Previous
					</button>
					<button className="shadow next-button">
						Next
					</button>
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