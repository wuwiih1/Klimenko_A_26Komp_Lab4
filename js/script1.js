
function calc() {
    let val1 = parseFloat(document.getElementById("curs").value)
    let val2 = parseFloat(document.getElementById("sum").value)
    if (!(isNaN(val1)&&isNaN(val2))) {
        document.getElementById("res").value = Math.ceil(val2/val1*100)/100+"$"
    }
}

document.getElementById("clear").onclick = () => {
    document.getElementById("curs").value = ""
    document.getElementById("sum").value = ""
    document.getElementById("res").value = ""
}
