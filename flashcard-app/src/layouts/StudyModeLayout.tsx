import * as React from 'react'
import {DataContext, type DataContextProps} from '../contexts/DataContext.tsx'
import type {CardItemProps} from '../data.ts'

export default function StudyModeLayout() {
	const dataProvided : DataContextProps = React.useContext(DataContext);
	const [isRevealed, setIsRevealed] = React.useState(false);
	const style:string = isRevealed ? "revealed-style" : "hidden-style";
	const curr:CardItemProps= dataProvided.data[1]

	const content = (
		<div className={style}>
			<div className="category">{curr.category}</div>
			<div className="main">

				{
					isRevealed
						?   <h1>{curr.answer}</h1>
						:   <>
							<h1>{curr.question}</h1>
							<button onClick={() => setIsRevealed(true)}>Click to reveal answer</button>
						</>
				}
			</div>
			<div className="progress">
				<progress value={curr.knownCount} max={5} />
				<span>{curr.knownCount}/5</span>
			</div>
		</div>
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
				<div className="content-buttons">
					<button>
						I Know This
					</button>
					<button>
						In Reset Progress
					</button>
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