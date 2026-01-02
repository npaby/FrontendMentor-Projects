
import './App.css'
import CardHeader from './components/CardHeader.tsx'
import AllCardsLayout from './layouts/AllCardsLayout.tsx'
import StudyModeLayout from './layouts/StudyModeLayout.tsx'
import * as React from 'react'

function App() {
	const [layoutMode, setLayoutMode] = React.useState<"AllCards" | "StudyMode">("StudyMode")
	return (
		<>
			{/*<h1>Hello</h1>*/}
			<CardHeader setLayoutMode={setLayoutMode} currentLayout={layoutMode} />
			{
				layoutMode === "AllCards" ?
					<AllCardsLayout/> :
					<StudyModeLayout/>
			}
		</>
	)
}

export default App
