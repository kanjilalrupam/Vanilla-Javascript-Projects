const buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === "gray") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
