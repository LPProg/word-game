// Game Logic
function createReferenceGrid() {
    Object.entries(imageMap).forEach(([image, letter]) => {
        const div = document.createElement('div');
        div.className = 'reference-item';
        div.innerHTML = `
            <img src="images/${image}" class="reference-image">
            <div>${letter}</div>
        `;
        referenceGrid.appendChild(div);
    });
}

function showNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    currentWordDiv.innerHTML = currentWord.images
        .map(img => `<img src="images/${img}" class="word-image">`)
        .join('');
}

function updateInputDisplay() {
    inputDisplay.textContent = userInput.join('');
}

function checkAnswer() {
    const userAnswer = userInput.join('');
    if (userAnswer === currentWord.answer) {
        score++;
        scoreElement.textContent = score;
        inputDisplay.classList.add('correct');
        setTimeout(() => {
            inputDisplay.classList.remove('correct');
            newRound();
        }, 1000);
    } else {
        inputDisplay.classList.add('incorrect');
        setTimeout(() => {
            inputDisplay.classList.remove('incorrect');
            userInput = [];
            updateInputDisplay();
        }, 1000);
    }
}

function newRound() {
    userInput = [];
    updateInputDisplay();
    showNewWord();
}