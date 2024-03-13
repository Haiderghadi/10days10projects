const btn = document.querySelector("#btn");
let input = document.querySelector("#password");

btn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    btn.src = "show.png";
  } else {
    input.type = "password";
    btn.src = "hide.png";
  }
});
