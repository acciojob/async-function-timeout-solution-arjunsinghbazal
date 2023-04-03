// JavaScript code
const delayText = async () => {
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value * 1000;
  const output = document.getElementById("output");

  // Clear any existing text in output
  output.innerText = "";

  // Wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Display the text in output
  output.innerText = text;
};

document.getElementById("btn").addEventListener("click", delayText);
