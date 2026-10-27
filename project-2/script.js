document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      history.back();
    });
  }

  const card = document.getElementById("concept-card");
  const conceptNodes = document.querySelectorAll(".concept-node");
  if (card && conceptNodes.length) {
    const cardTitle = card.querySelector(".concept-card-title");
    const cardText = card.querySelector(".concept-card-text");
    const closeBtn = card.querySelector(".concept-card-close");

    conceptNodes.forEach((node) => {
      node.addEventListener("click", (e) => {
        e.preventDefault();
        cardTitle.textContent = node.dataset.title || "";
        cardText.textContent = node.dataset.text || "";
        card.classList.add("open");
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        card.classList.remove("open");
      });
    }
  }
});
