let numberContainer = document.getElementById("numberContainer");
let numberChoices = document.querySelectorAll(".number-rating");
let selectedRating;

function collectRating() {
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

  console.log(selectedRating);
}

collectRating();
