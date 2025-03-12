import React from "react"
import Button from "./Button"

export default function NavButtons(/*props*/{data}) {
  
	/*const { wordsDataArray, currentWord, setCurrentWord, position } = props*/

	if (!data || !data.wordsDataArray) {
		return null; // veya bir yükleniyor göstergesi
	  }

	const { wordsDataArray, currentWord, setCurrentWord, position } = data

	function changeWord(currentIndex, direction, position) {
		let nextIndex

		if (direction === "forward") {
			nextIndex =
				currentIndex === wordsDataArray.length - 1 ? 0 : currentIndex + 1
		} else {
			nextIndex =
				currentIndex === 0 ? wordsDataArray.length - 1 : currentIndex - 1
		}
		setCurrentWord(wordsDataArray[nextIndex])

		position === "bottom" &&
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
	}

	return (
		<div className="two-buttons-container">
			<Button
				type="backward"
				clickHandler={() => changeWord(wordsDataArray.indexOf(currentWord), "backward", position)}
			/>

			<Button
				type="forward"
				clickHandler={() => changeWord(wordsDataArray.indexOf(currentWord), "forward", position)}
			/>
		</div>
	)
}
