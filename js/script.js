//*ELEMENTS
const cmdInput = document.querySelector("#cmd-input");

//*UTILS
function appendToOutput(value, section) {
  const d = document.createElement("div")
  const p1 = document.createElement("p")
  const p2 = document.createElement("p")
  p1.innerHTML = `$ ${value}`
  p2.innerHTML = "command run successfully"
  d.append(p1, p2)
  section.append(d)
}

//* HANDLER
const cmdKeyHandler = (event) => {
  const outputSection = document.querySelector("section#output-section")
  if (event.key === "Enter") {
    const inputValue = event.target.value;
    appendToOutput(inputValue, outputSection)
    event.target.value = ""
  }
  console.log(event.target.value)
}

//*EVENT-LISTENER
cmdInput.addEventListener("keypress", cmdKeyHandler)
