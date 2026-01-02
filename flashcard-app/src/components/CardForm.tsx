export default function CardForm(){
	return(
		<>
			<form className="card-form">
				<label>Question</label>
				<input type="text" id="cardQuestion" placeholder="e.g., What is the capital of France?"/>
				<label>Answer</label>
				<textarea id="cardAnswer" className="cardAnswer" placeholder="e.g., Paris"></textarea>
				<label>Category</label>
				<input type="text" id="cardCategory" placeholder="e.g., Geography"/>
				<button type="submit" className="create-btn shadow">Create Card</button>
			</form>
		</>
	)
}
