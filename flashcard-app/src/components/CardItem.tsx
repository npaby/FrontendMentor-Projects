export default function CardItem({props}:any){
	console.log(props);
	return(
		<div className="card-item">
			<h1 className="card-title">{props.question}</h1>
			<h2>Answer:</h2>
			<article>{props.answer}</article>
			<div className="card-item-bottom">
				<div className="card-item-category">{props.category}</div>
				<progress value={props.knownCount} max="5">{props.knownCount}</progress>
				<div>{props.knownCount}</div>
			</div>
		</div>
	)
}