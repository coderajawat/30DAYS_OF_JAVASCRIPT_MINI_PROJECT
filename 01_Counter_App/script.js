const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Update Count
function updateCounter(){
    counter.textContent = count;
}

// Increment
incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Decrement
decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});



