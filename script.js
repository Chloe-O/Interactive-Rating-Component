const numberChoices = document.querySelectorAll(".number-rating");
const ratingMessage = document.getElementById("submitted-rating");
const submit = document.getElementById("submit");
const ratingCard = document.getElementById("rating-card");
const submittedCard = document.getElementById("submitted-card");
const modal = document.getElementById("modal-overlay");
const modalClose = document.getElementById("close");
let selectedRating;

numberChoices.forEach((i) => {
  i.addEventListener("click", () => {
    numberChoices.forEach((e) => {
      if (e.classList.contains("selected")) {
        e.classList.remove("selected");
      }
    });
    i.classList.add("selected");
    selectedRating = parseInt(i.innerHTML);
  });
});

submit.addEventListener("click", () => {
  if (!selectedRating) {
    console.log("pick a number!");
    modal.style.display = "block";
  } else {
    ratingMessage.innerText = `You selected ${selectedRating} out of 5`;
    ratingCard.style.display = "none";
    submittedCard.style.display = "flex";
  }
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
