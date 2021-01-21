const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((formInput) => {
  let thislabel = formInput.nextElementSibling;

  formInput.addEventListener("focus", () => {
    thislabel.classList.add("active");
  });

  formInput.addEventListener("blur", () => {
    if (formInput.value == "") {
      thislabel.classList.remove("active");
    }
  });
});
