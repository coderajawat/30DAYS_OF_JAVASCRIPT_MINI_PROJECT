const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

btn.addEventListener("click", () => {
    const newColor = getRandomColor();
    color.textContent = newColor;
    color.style.color = newColor;
    document.body.style.backgroundColor = newColor;
});