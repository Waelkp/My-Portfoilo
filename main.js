let coptButton = document.querySelector(".copy button");
coptButton.onclick = function () {
  navigator.clipboard.writeText("Waelalhouri04@gmail.com");
  coptButton.textContent = "Copied!";
  setTimeout(() => {
              coptButton.textContent = "Copy";
              console.log("Copy");
  }, 5000);
};
function copyText() {
  /* Copy text into clipboard */
}
