const numberChoices = document.querySelectorAll(".number-rating");
const ratingMessage = document.getElementById("submitted-rating");
const submit = document.getElementById("submit");
const ratingCard = document.getElementById("rating-card");
const submittedCard = document.getElementById("submitted-card");
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
  } else {
    ratingMessage.innerText = `You selected ${selectedRating} out of 5`;
    ratingCard.style.display = "none";
    submittedCard.style.display = "flex";
  }
});
