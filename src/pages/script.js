// hent dropdown knap //
const button = document.querySelector(".dropdown button");
const dropDownContent = document.querySelector(".content");

// tilføj klik-event //
  button.addEventListener("click", () => {
    // tjek om dropdown allerede er vist //
    if (dropDownContent.style.display === "block") {
        dropDownContent.style.display = "none";
    } else {
        dropDownContent.style.display = "block";
    }
  });

  // luk dropdown hvis der klikkes udenfor //
  window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown button")) {
        dropDownContent.style.display = "none";
    }
  });
