let displayContainer = document.getElementById("container");
let ratings = document.querySelectorAll(".rating");
let btn = document.getElementById("btn");

let selectedRating = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    selectedRating = rating.querySelector("p").innerText;
    rating.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (selectedRating !== "") {
    displayContainer.innerHTML = `
      <strong>Thank you!</strong>
      <br><br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
