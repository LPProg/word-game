function createKeyboard() {
    const letters = [...new Set(Object.values(imageMap))].sort();
    
    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'key-btn';
        btn.onclick = () => handleLetterInput(letter);
        keyboardDiv.appendChild(btn);
    });

    // Botones especiales
    const specialButtons = [
        { text: '⌫', action: () => userInput.pop() },
        { text: '👍 ENVIAR', action: checkAnswer }
    ];

    specialButtons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.className = 'special-btn';
        button.onclick = btn.action;
        keyboardDiv.appendChild(button);
    });
}