const inscriptionLink = document.getElementById("inscription-link");
const inscriptionForm = document.getElementById("inscription-form");

inscriptionLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (inscriptionForm.style.display === "block") {
    inscriptionForm.style.display = "none";
  } else {
    inscriptionForm.style.display = "block";
  }
});
