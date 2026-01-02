export default function CardForm(){
	return(
		<>
			<form className="card-form">
				<label>Question</label>
				<input type="text" id="cardQuestion" placeholder="e.g., What is the capital of France?"/>
				<label>Answer</label>
				<input type="text" id="cardAnswwer" placeholder="e.g., Paris"/>
				<label>Category</label>
				<input type="text" id="cardCategory" placeholder="e.g., Geography"/>
				<button type="submit">Create Card</button>
			</form>
		</>
	)
}
