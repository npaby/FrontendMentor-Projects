import iconMenu from "../assets/images/icon-menu.svg";

export default function CardItem({props}:any){

	return(
		<div className="card-item shadow" >
			<h1 className="card-title">
				{props.question}
			</h1>
			<h2>
				Answer:
			</h2>
			<article>
				{props.answer}
			</article>
			<div className="card-item-bottom">
					<div className="card-item-category shadow">
						{props.category}
					</div>
					<progress value={props.knownCount} max="5"/>
					<div className="card-item-value">
						{props.knownCount}/5
					</div>
					<button className="card-item-menu-btn shadow">
						<img src={iconMenu}/>
					</button>
			</div>
		</div>
	)
}