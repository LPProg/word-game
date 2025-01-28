// Timer Logic
function updateTimer() {
    const minutes = Math.floor(timeLeft / 120);
    const seconds = timeLeft % 60;
    timerElement.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        alert(`Game Over! Score: ${score}`);
    }
}