import {type JSX, useState} from 'react'
import * as React from 'react'

export default function CardHeader({setLayoutMode, currentLayout}:any): JSX.Element {

	return(
		<header>
			<h1>
				Flashcard
			</h1>
			<div className="shadow">
				<button className={currentLayout === "StudyMode" ? "selected-btn" : "not-selected-btn"}
					onClick={() => setLayoutMode("StudyMode")}>
					Study Mode
				</button>
				<button className={currentLayout === "AllCards" ? "selected-btn" : "not-selected-btn"}
					onClick={() => setLayoutMode("AllCards")}>
					All Cards
				</button>
			</div>
		</header>

	)
}