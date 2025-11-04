// script.js
if (key === 'ArrowRight' && !(direction.x === -1 && direction.y === 0)) { direction = { x: 1, y: 0 }; }
}


// Keyboard input listener
window.addEventListener('keydown', (e) => {
const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
if (!keys.includes(e.key)) return;
e.preventDefault();
setDirectionFromKey(e.key);
});


// Mobile on-screen buttons
mobileButtons.forEach(btn => {
btn.addEventListener('click', () => {
const d = btn.dataset.dir;
if (d === 'up') setDirectionFromKey('ArrowUp');
if (d === 'down') setDirectionFromKey('ArrowDown');
if (d === 'left') setDirectionFromKey('ArrowLeft');
if (d === 'right') setDirectionFromKey('ArrowRight');
});
});


// --- Game control functions ---
function startLoop() {
if (running) return;
running = true;
intervalId = setInterval(step, FPS_INTERVAL);
}


function stopLoop() {
running = false;
if (intervalId) clearInterval(intervalId);
}


function endGame() {
stopLoop();
showOverlay();
finalScore.textContent = score;
}


function updateScore() {
scoreEl.textContent = `Score: ${score}`;
}


// overlay helpers
function showOverlay() {
overlay.classList.remove('hidden');
overlay.setAttribute('aria-hidden', 'false');
}
function hideOverlay() {
overlay.classList.add('hidden');
overlay.setAttribute('aria-hidden', 'true');
}


// --- Button bindings ---
startBtn.addEventListener('click', () => { startLoop(); });
resumeBtn.addEventListener('click', () => { startLoop(); hideOverlay(); });
pauseBtn.addEventListener('click', () => { stopLoop(); });
restartBtn.addEventListener('click', () => { resetGame(); startLoop(); });


// also allow clicking the Start/Resume in footer


// --- Initial setup ---
resetGame();
draw();


// Expose a small API for debugging in the browser console if needed
window.SnakeGame = {
reset: resetGame,
start: startLoop,
stop: stopLoop,
getState: () => ({ snake, food, score, running })
};
})();