const boardImage = document.querySelector("#board-image");
const boardPlaceholder = document.querySelector("#board-placeholder");
const moveButtons = document.querySelectorAll(".move-btn");

moveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    boardImage.src = button.dataset.image;
    boardImage.alt = button.textContent.trim();
    boardImage.hidden = false;
    boardPlaceholder.hidden = true;
  });
});