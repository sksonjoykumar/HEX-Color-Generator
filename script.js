// Select all html class
const container = document.getElementById("main-container");
const mybtn = document.getElementById("mybtn");

// Create window onload function
window.onload = function () {
  main();
};

// create main function
function main() {
  mybtn.addEventListener("click", function () {
    const bgColor = generatedRGBColor();
    container.style.backgroundColor = bgColor;
  });
}

// generated RGB color function
function generatedRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red} ${green} ${blue})`;
}

console.log(generatedRGBColor());
