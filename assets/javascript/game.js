// Javascript for Hangman

window.onload = function () {

    var termsJson = [{
        "term": "trust-rank",
        "definition": "Link analysis technique for search engines to distinguish legitimate web pages from spam."
    },
    {
        "term": "usability",
        "definition": "Refers to the level or degree of a page's operating friendliness for the user."
    },
    {
        "term": "validation",
        "definition": "Validation is a way to make sure that your (HTML) code is compliant with current HTML specifications."
    },
    {
        "term": "wysiwyg",
        "definition": "‘What You See Is What You Get’ HTML editors such as Dreamweaver and FrontPage."
    },
    {
        "term": "white-hat",
        "definition": "SEO tactics which conform to search engine guidelines by creating content that is useful for visitors rather than focused on deceiving search engine spider"
    },
    ];

    var wordIndex;         // Randomly selected index into JSON 
    var word;              // Selected word (by index)
    var guess;             // Guess (letter)
    var guesses = [];      // Guessed letters
    var gameboard = [];    // Gameboard [H _ l l _ - W _ _l _]
    var guessesRemaining;  // guessesRemaining
    var countCorrect;      // Count correct guesses
    var countSpaces;       // Number of spaces in word '-'

    // Get elements
    var showGameboard = document.getElementById("tileHolder")
    var showguessesRemaining = document.getElementById("myguessesRemaining");
    var showGuesses = document.getElementById("myguesses");
    var showClue = document.getElementById("clue");

    refreshBoard = function () {
        showGameboard.innerHTML = "";
        for (var i = 0; i < word.length; i++) {
            if (word[i] == "-") {
                gameboard[i] = "-";
            }
            else if ( guesses.includes(word[i]) ) {
                gameboard[i] = word[i];
            }
            else {
                gameboard[i] = "_";
            }
        }
        showGameboard.innerHTML = gameboard.join(" ");
    }


    // Show guessesRemaining
    updateStats = function () {
        showguessesRemaining.innerHTML = "You have " + guessesRemaining + " Guesses Remaining";
        if (guessesRemaining < 1) {
            showguessesRemaining.innerHTML = "Game Over";
        }
        for (var i = 0; i < word.length; i++) {
            if (countCorrect + countSpaces === word.length) {
                showguessesRemaining.innerHTML = "You Win!";
            }
        }
        myguesses.innerHTML = "Guessed: " + guesses;
    }


    // OnKeyUp Function
    userGuess = function () {
        document.onkeyup = function (event) {
            var letter = event.key;

            if (guesses.includes(letter) == false) {
                guesses.push(letter);

                for (var i = 0; i < word.length; i++) {
                    if (word[i] === letter) {
                        countCorrect += 1;
                    }
                }
                var j = (word.indexOf(letter));
                if (j === -1) {
                    guessesRemaining -= 1;
                }
                updateStats();

                refreshBoard();
            }
        }
    }


    // Play
    play = function () {
        // Choose a random word
        wordIndex = Math.floor(Math.random() * termsJson.length);
        word = termsJson[wordIndex].term;
        word = word.replace(/\s/g, "-").toLowerCase();

        console.log(word);

        guesses = [];
        guessesRemaining = 10;
        countCorrect = 0;
        countSpaces = 0;
        refreshBoard();
        updateStats();
        userGuess();
    }

    play();

    // Hint 
    hintBtn.onclick = function () {
        var aHint = termsJson[wordIndex].definition;

        showClue.innerHTML = "Clue: " + aHint;
    };

    // Reset
    document.getElementById('resetBtn').onclick = function () {
        guesses = [];
        guessesRemaining = 10;
        countCorrect = 0;
        countSpaces = 0;
        gameboard = [];
        showClue.innerHTML = "";
        showGameboard.innerHTML = "";
        showClue.innerHTML = "Clue: " 
        word = "";
        refreshBoard();
        play();
    }
}


