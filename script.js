let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerText === "<") {
      string = string.slice(0, -1); // Remove the last character
      document.querySelector("input").value = string;
    } else if (e.target.innerText === "AC") {
      string = ""; // clear the display
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerText;
      document.querySelector("input").value = string;
      //   console.log(e.target);
    }
  });
});
