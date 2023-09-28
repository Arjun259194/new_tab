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
    event.target.value = ""
    cmdHandler(inputValue.trim(), cmdMap)
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

cmdMap.set("welcome", function () {
  const msg = `
                                                                                                                              bbbbbbbb            
NNNNNNNN        NNNNNNNN                                                                TTTTTTTTTTTTTTTTTTTTTTT               b::::::b            
N:::::::N       N::::::N                                                                T:::::::::::::::::::::T               b::::::b            
N::::::::N      N::::::N                                                                T:::::::::::::::::::::T               b::::::b            
N:::::::::N     N::::::N                                                                T:::::TT:::::::TT:::::T                b:::::b            
N::::::::::N    N::::::N    eeeeeeeeeeee  wwwwwww           wwwww           wwwwwww     TTTTTT  T:::::T  TTTTTTaaaaaaaaaaaaa   b:::::bbbbbbbbb    
N:::::::::::N   N::::::N  ee::::::::::::ee w:::::w         w:::::w         w:::::w              T:::::T        a::::::::::::a  b::::::::::::::bb  
N:::::::N::::N  N::::::N e::::::eeeee:::::eew:::::w       w:::::::w       w:::::w               T:::::T        aaaaaaaaa:::::a b::::::::::::::::b 
N::::::N N::::N N::::::Ne::::::e     e:::::e w:::::w     w:::::::::w     w:::::w                T:::::T                 a::::a b:::::bbbbb:::::::b
N::::::N  N::::N:::::::Ne:::::::eeeee::::::e  w:::::w   w:::::w:::::w   w:::::w                 T:::::T          aaaaaaa:::::a b:::::b    b::::::b
N::::::N   N:::::::::::Ne:::::::::::::::::e    w:::::w w:::::w w:::::w w:::::w                  T:::::T        aa::::::::::::a b:::::b     b:::::b
N::::::N    N::::::::::Ne::::::eeeeeeeeeee      w:::::w:::::w   w:::::w:::::w                   T:::::T       a::::aaaa::::::a b:::::b     b:::::b
N::::::N     N:::::::::Ne:::::::e                w:::::::::w     w:::::::::w                    T:::::T      a::::a    a:::::a b:::::b     b:::::b
N::::::N      N::::::::Ne::::::::e                w:::::::w       w:::::::w                   TT:::::::TT    a::::a    a:::::a b:::::bbbbbb::::::b
N::::::N       N:::::::N e::::::::eeeeeeee         w:::::w         w:::::w                    T:::::::::T    a:::::aaaa::::::a b::::::::::::::::b 
N::::::N        N::::::N  ee:::::::::::::e          w:::w           w:::w                     T:::::::::T     a::::::::::aa:::ab:::::::::::::::b  
NNNNNNNN         NNNNNNN    eeeeeeeeeeeeee           www             www                      TTTTTTTTTTT      aaaaaaaaaa  aaaabbbbbbbbbbbbbbbb   
`
})
