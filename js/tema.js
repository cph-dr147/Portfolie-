const buttons = document.querySelectorAll(".toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    content.classList.toggle("active");
  });
});
