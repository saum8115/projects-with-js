let buttons = document.querySelectorAll(".add-friend");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const status = card.querySelector(".status");

    if (status.textContent === "Stranger") {
      status.textContent = "Friend";
      btn.textContent = "Unfriend";
      btn.style.backgroundColor = "red";
    } else {
      status.textContent = "Stranger";
      btn.textContent = "Add Friend";
      btn.style.backgroundColor = "#007bff";
    }
  });
});