// The unordered list where the player's guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");
// The button with the text "Guess!" in it.
const guessButton = document.querySelector(".guess");
// The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display.
const remainingSpan = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter.
const correctMessage = document.querySelector(".message");
const word = "magnolia";

// Write a Function to Add Placeholders for Each Letter
const placeHolders = function(word) {
	const placeholderLetters = [];
	for(const letter of word) {
		console.log(letter);
		placeholderLetters.push("●")
	}
	wordInProgress.innerText = placeholderLetters.join("");
};

placeHolders(word);

// Add an Event Listener for the Button
guessButton.addEventListener("click", function(e) {
	e.preventDefault();
	const guess = letterInput.value;
	console.log(guess);
	letterInput.value = "";
});