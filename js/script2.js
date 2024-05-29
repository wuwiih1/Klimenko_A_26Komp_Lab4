
function swap() {
    let text1 = document.getElementById("first").value
    document.getElementById("first").value = document.getElementById("second").value
    document.getElementById("second").value = text1
}

function count(div) {
    let text = div.getElementsByTagName("textarea")[0].value
    let symbols = text.length
    let words = 0
    let sent = 0
    for (let i of text) {
        if (i == " ") {
            words++
        } if (".!?".includes(i)) {
            sent++
        }
    }
    if (symbols>0) words++
    if (symbols>0) sent++
    div.getElementsByTagName("p")[0].textContent = `Символів: ${symbols}. Слів: ${words}. Речень: ${sent}`
}

document.getElementById("swap").onclick = () => {
    swap()
    count(document.querySelectorAll(".flex > div")[0])
    count(document.querySelectorAll(".flex > div")[1])
}
document.getElementById("first").oninput = () => {
    count(document.querySelectorAll(".flex > div")[0])
}
document.getElementById("second").oninput = () => {
    count(document.querySelectorAll(".flex > div")[1])
}
