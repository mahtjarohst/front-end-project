// fetch api
createFactButton();
async function fetchFact() {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  // assign the data to a variable
  const data = await response.json();
  let h2 = document.createElement("h2");
  h2.innerText = data.text;
  document.body.appendChild(h2);

}

// Create the Useless Fact Button
function createFactButton() {
  let factButton = document.createElement("button");
  factButton.innerHTML = "FACT BUTTON";
  factButton.type = "button";
  factButton.setAttribute("id", "factButton");
  factButton.addEventListener("click", () => {
    fetchFact();
  });

  document.body.appendChild(factButton);
}

