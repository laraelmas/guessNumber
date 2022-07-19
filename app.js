let button = document.getElementById("button");
let output = document.getElementById("output");
let number = Math.floor(Math.random() * 100);

console.log("SADOBABO", output);

const guessNumber = () => {
  let input = document.getElementById("input").value;
  if (input === number) {
    output.innerText = `right ${number}`;
  } else if (input < number) {
    output.innerText = "Low";
  } else {
    output.innerText = "High";
  }
};
