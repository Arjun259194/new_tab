//*ELEMENTS
const cmdInput = document.querySelector("#cmd-input");
const outputSection = document.querySelector("section#output-section")

//*UTILS
function appendToOutput(output, cmd, section) {
  if (cmd === "clear") return
  if (cmd === "" || cmd === undefined) return
  const d = document.createElement("div")
  const p1 = document.createElement("p")
  const p2 = document.createElement("p")
  p1.innerHTML = `$ ${cmd}`
  p2.innerHTML = output ?? "command not found"
  d.append(p1, p2)
  section.append(d)
}

//* HANDLER
const cmdKeyHandler = (event) => {
  if (event.key === "Enter") {
    const inputValue = event.target.value;
    cmdHandler(inputValue.trim(), cmdMap)
    event.target.value = ""
  }
}

function cmdHandler(cmd, map) {
  const fn = map.get(cmd)
  if (!fn)
    appendToOutput(undefined, cmd, outputSection)
  const result = fn()
  appendToOutput(result, cmd, outputSection)
}

//*EVENT-LISTENER
cmdInput.addEventListener("keypress", cmdKeyHandler)

//*CMD

const cmdMap = new Map()

cmdMap.set("clear", function () {
  document.querySelector("section#output-section").innerHTML = ""
  return ""
})

cmdMap.set("youtube", function () {
  window.location.href = "https://www.youtube.com"
  return "redirecting to youtube..."
})
