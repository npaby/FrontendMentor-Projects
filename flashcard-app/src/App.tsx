
import './App.css'
import CardHeader from './components/CardHeader.tsx'
import { DataContext } from './contexts/DataContext.tsx'
import AllCardsLayout from './layouts/AllCardsLayout.tsx'
import StudyModeLayout from './layouts/StudyModeLayout.tsx'
import {data as currData, type CardItemProps} from "./data.ts"
import * as React from 'react'
function App() {
	const [layoutMode, setLayoutMode] = React.useState<"AllCards" | "StudyMode">("StudyMode");
	const [data, setData] = React.useState<CardItemProps[]>(currData);

	return (
		<DataContext.Provider value={{data,setData}}>
			<CardHeader setLayoutMode={setLayoutMode} currentLayout={layoutMode} />
			{layoutMode === "AllCards" ? <AllCardsLayout /> : <StudyModeLayout />}
		</DataContext.Provider>
	);
}

export default App;