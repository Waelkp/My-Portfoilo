let coptButton = document.querySelector(".copy button");
coptButton.onclick = function () {
  navigator.clipboard.writeText("Waelalhouri04@gmail.com");
  coptButton.textContent = "Copied!";
  setTimeout(() => {
    cHeoptButton.textContent = "Copy";
    console.log("Copy");
  }, 5000);
};
function copyText() {
  /* Copy text into clipboard */
}

console.log("Hello I am Wael  19 years old");
