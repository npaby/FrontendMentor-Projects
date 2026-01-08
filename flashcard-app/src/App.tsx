
import './App.css'
import CardHeader from './components/CardHeader.tsx'
import { DataContext } from './contexts/DataContext.tsx'
import AllCardsLayout from './layouts/AllCardsLayout.tsx'
import StudyModeLayout from './layouts/StudyModeLayout.tsx'
import {data as currData} from "./data.ts"
import * as React from 'react'
import type {CardItemProps, LayoutMode} from './types.ts'

function App() {
	const [layoutMode, setLayoutMode] = React.useState<LayoutMode>("StudyMode");
	const [data, setData] = React.useState<CardItemProps[]>(currData);

	return (
		<DataContext.Provider value={{data,setData}}>
			<CardHeader setLayoutMode={setLayoutMode} currentLayout={layoutMode} />
			{layoutMode === "AllCards" ? <AllCardsLayout /> : <StudyModeLayout />}
		</DataContext.Provider>
	);
}

export default App;