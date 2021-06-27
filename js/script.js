// The unordered list where the player's guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
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
const message = document.querySelector(".message");
const word = "magnolia";
const guessedLetters = [];

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
// Validate Input in the Button Event Handler
	message.innerText = "";
	const validGuess = validate(guess);
	console.log(validGuess);
	if (validGuess) {
		makeGuess(guess);
	}
	letterInput.value = "";
});

// Create a Function to Check Player's Input
const validate = function(input) {
	const acceptedLetter = /[a-zA-Z]/;
	if (input.length === 0) {
		message.innerText = "Please enter a letter";
	} else if (input.length > 1) {
		message.innerText = "Please enter one letter"; 
	} else if (!input.match(acceptedLetter)) {
		message.innerText = "Please enter a letter from A to Z"
	} else {
		return input;
	};
};

const makeGuess = function(guess) {
	guess = guess.toUpperCase();
	if  (guessedLetters.includes(guess)) {
		console.log("This letter has already been guessed, please try another letter");
	} else {
		guessedLetters.push(guess);
		console.log(guessedLetters)
		displayGuess();
		updateProgress(guessedLetters)
	}
}

// Create a Function to Show the Guessed Letters
const displayGuess = function() {
	guessedLettersElement.innerHTML = "";
	for(const letter of guessedLetters) {
	const li = document.createElement("li");
	li.innerHTML = letter;
	guessedLettersElement.append(li);
	}
};

// Create a Function to Update the Word in Progress

const updateProgress = function(guessedLetters) {
	const wordUpper = word.toUpperCase();
	const wordArray = wordUpper.split("");
	const revealWord = [];
	for (const letter of wordArray) {
		if (guessedLetters.includes(letter)) {
			revealWord.push(letter.toUpperCase())
		} else {
			revealWord.push("●")
		};
	};
	wordInProgress.innerText = revealWord.join("");
	wordGuessed();
};

const wordGuessed = function() {
	if (word.toUpperCase() === wordInProgress.innerText) {
		message.classList.add("win")
		message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`
	}
}