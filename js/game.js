async function cargarPalabras() {
    try {
        const response = await fetch('../data/palabras.json');
        const data = await response.json();
        palabrasDisponibles = data.palabras
            .map(palabra => palabra.toUpperCase())
            .filter(palabra => 
                [...palabra].every(letra => 
                    Object.values(imageMap).includes(letra)
                )
            );
        
        if(palabrasDisponibles.length === 0) {
            throw new Error('No hay palabras válidas');
        }
    } catch (error) {
        console.error('Error cargando palabras:', error);
        palabrasDisponibles = ['GATO', 'SOL', 'PAN']; // Respaldo
    }
}

function obtenerPalabraAleatoria() {
    return palabrasDisponibles[
        Math.floor(Math.random() * palabrasDisponibles.length)
    ];
}

async function mostrarNuevaPalabra() {
    currentWord = obtenerPalabraAleatoria();
    currentWordDiv.innerHTML = [...currentWord].map(letra => {
        const imagen = Object.keys(imageMap).find(
            img => imageMap[img] === letra
        );
        return `<img src="images/${imagen}" class="word-image">`;
    }).join('');
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