const scriptEl = document.querySelector("body")
const inputEl = document.querySelector(".input-el")
const clearEl = document.querySelector(".clear-el")
const invertEl = document.querySelector(".invert-el")
const dividierenEl = document.querySelector(".dividieren-el")
const siebenEl = document.querySelector(".sieben-el")
const achtEl = document.querySelector(".acht-el")
const neunEl = document.querySelector(".neun-el")
const multiplikationEl = document.querySelector(".multiplikation-el")
const vierEl = document.querySelector(".vier-el")
const fuenfEl = document.querySelector(".fuenf-el")
const sechsEl = document.querySelector(".sechs-el")
const minusEl = document.querySelector(".minus-el")
const einsEl = document.querySelector(".eins-el")
const zweiEl = document.querySelector(".zwei-el")
const dreiEl = document.querySelector(".drei-el")
const plusEl = document.querySelector(".plus-el")
const nullEl = document.querySelector(".null-el")
const commaEl = document.querySelector(".comma-el")
const berechnenEl = document.querySelector(".berechnen-el")

let recnhungVor = ""
let rechnungNach = ""
let rechenzeichen = undefined
let rechnungStatus = "vor"
let ergebnis = ""

let division = false
let multiplikation = false
let subtraktion = false
let addition = false


//number buttons
nullEl.addEventListener("click", function() {
    if (recnhungVor === "0" || recnhungVor.charAt(0) === "0") {
        recnhungVor = "0"
        return
    }

    if (rechnungNach === "0" || rechnungNach.charAt(0) === "0") {
        rechnungNach = "0"
        return
    }
    
    if (rechnungStatus === "vor") {
        recnhungVor += "0"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "0"
    renderResult(rechnungNach)
})

einsEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "1"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "1"
    renderResult(rechnungNach)
})

zweiEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "2"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "2"
    renderResult(rechnungNach)
})

dreiEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "3"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "3"
    renderResult(rechnungNach)
})

vierEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "4"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "4"
    renderResult(rechnungNach)
})

fuenfEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "5"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "5"
    renderResult(rechnungNach)
})

sechsEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "6"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "6"
    renderResult(rechnungNach)
})

siebenEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "7"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "7"
    renderResult(rechnungNach)
})

achtEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "8"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "8"
    renderResult(rechnungNach)
})

neunEl.addEventListener("click", function() {
    while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
        recnhungVor = recnhungVor.substring(1);
    }

    while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
        rechnungNach = rechnungNach.substring(1);
    }

    if (rechnungStatus === "vor") {
        recnhungVor += "9"
        renderResult(recnhungVor)
        return
    }

    rechnungNach += "9"
    renderResult(rechnungNach)
})

//key actions

document.addEventListener("keydown", (event) => {
    if(event.key === "0") {
        if (recnhungVor === "0" || recnhungVor.charAt(0) === "0") {
            recnhungVor = "0"
            return
        }
    
        if (rechnungNach === "0" || rechnungNach.charAt(0) === "0") {
            rechnungNach = "0"
            return
        }
        
        if (rechnungStatus === "vor") {
            recnhungVor += "0"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "0"
        renderResult(rechnungNach)
    }
    
    if(event.key === "1") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "1"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "1"
        renderResult(rechnungNach)
    }
    
    if(event.key === "2") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "2"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "2"
        renderResult(rechnungNach)
    }
    
    if(event.key === "3") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "3"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "3"
        renderResult(rechnungNach)
    }
    
    if(event.key === "4") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "4"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "4"
        renderResult(rechnungNach)
    }
    
    if(event.key === "5") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "5"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "5"
        renderResult(rechnungNach)
    }
    
    if(event.key === "6") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "6"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "6"
        renderResult(rechnungNach)
    }

    if(event.key === "7") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "7"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "7"
        renderResult(rechnungNach)
    }

    if(event.key === "8") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "8"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "8"
        renderResult(rechnungNach)
    }

    if(event.key === "9") {
        while(recnhungVor.charAt(0) === '0' && recnhungVor.charAt(1) != '.') {
            recnhungVor = recnhungVor.substring(1);
        }
    
        while(rechnungNach.charAt(0) === '0' && rechnungNach.charAt(1) != '.') {
            rechnungNach = rechnungNach.substring(1);
        }
    
        if (rechnungStatus === "vor") {
            recnhungVor += "9"
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += "9"
        renderResult(rechnungNach)
    }

    if(event.key === "Enter") {
        zahl1 = parseFloat(recnhungVor)
    zahl2 = parseFloat(rechnungNach)

    if(division === true) {
        ergebnis = zahl1 / zahl2
        renderResult(ergebnis)
    }

    if(multiplikation === true) {
        ergebnis = zahl1 * zahl2
        renderResult(ergebnis)
    }

    if(subtraktion === true) {
        ergebnis = zahl1 - zahl2
        renderResult(ergebnis)
    }

    if(addition === true) {
        ergebnis = zahl1 + zahl2
        renderResult(ergebnis)
    }

    recnhungVor = ""
    rechnungNach = ""
    ergebnis = ""
    rechnungStatus = "vor"
    division = false
    multiplikation = false
    subtraktion = false
    addition = false
    }

    if(event.key === "*") {
        rechnungStatus = "nach"
        multiplikation = true
        renderResult(rechnungNach)
    }

    if(event.key === "/") {
        rechnungStatus = "nach"
        division = true
        renderResult(rechnungNach)
    }

    if(event.key === "-") {
        rechnungStatus = "nach"
        subtraktion = true
        renderResult(rechnungNach)
    }

    if(event.key === "+") {
        rechnungStatus = "nach"
        addition = true
        renderResult(rechnungNach)
    }

    if(event.key === ",") {
        if(inputEl.value === "") {
            return
        }
    
        if(rechnungStatus === "vor") {
            recnhungVor += '.'
            renderResult(recnhungVor)
            return
        }
    
        rechnungNach += '.'
        renderResult(rechnungNach)
    }

    if(event.key === "Escape") {
        recnhungVor = ""
        rechnungNach = ""
        rechnungStatus = "vor"
        ergebnis = ""
        division = false
        multiplikation = false
        subtraktion = false
        addition = false
        renderResult(recnhungVor)
    }
})

//action buttons

clearEl.addEventListener("click", function() {
    recnhungVor = ""
    rechnungNach = ""
    rechnungStatus = "vor"
    ergebnis = ""
    division = false
    multiplikation = false
    subtraktion = false
    addition = false
    renderResult(recnhungVor)
})

invertEl.addEventListener("click", function() {
    if(rechnungStatus === "vor") {
        while(recnhungVor.charAt(0) === "-") {
            recnhungVor = recnhungVor.substring(1)
            renderResult(recnhungVor)
            return
        }
    
        recnhungVor = '-' + recnhungVor
        renderResult(recnhungVor)
        return
    }

    while(rechnungNach.charAt(0) === "-") {
        rechnungNach = rechnungNach.substring(1)
        renderResult(rechnungNach)
        return
    }

    rechnungNach = '-' + rechnungNach
    renderResult(rechnungNach)
})

dividierenEl.addEventListener("click", function() {
    rechnungStatus = "nach"
    division = true
    renderResult(rechnungNach)
})

multiplikationEl.addEventListener("click", function() {
    rechnungStatus = "nach"
    multiplikation = true
    renderResult(rechnungNach)
})

minusEl.addEventListener("click", function() {
    rechnungStatus = "nach"
    subtraktion = true
    renderResult(rechnungNach)
})

plusEl.addEventListener("click", function() {
    rechnungStatus = "nach"
    addition = true
    renderResult(rechnungNach)
})

commaEl.addEventListener("click", function() {
    if(inputEl.value === "") {
        return
    }

    if(rechnungStatus === "vor") {
        recnhungVor += '.'
        renderResult(recnhungVor)
        return
    }

    rechnungNach += '.'
    renderResult(rechnungNach)
})

berechnenEl.addEventListener("click", function() {
    zahl1 = parseFloat(recnhungVor)
    zahl2 = parseFloat(rechnungNach)

    if(division === true) {
        ergebnis = zahl1 / zahl2
        renderResult(ergebnis)
    }

    if(multiplikation === true) {
        ergebnis = zahl1 * zahl2
        renderResult(ergebnis)
    }

    if(subtraktion === true) {
        ergebnis = zahl1 - zahl2
        renderResult(ergebnis)
    }

    if(addition === true) {
        ergebnis = zahl1 + zahl2
        renderResult(ergebnis)
    }

    recnhungVor = ""
    rechnungNach = ""
    ergebnis = ""
    rechnungStatus = "vor"
    division = false
    multiplikation = false
    subtraktion = false
    addition = false
})



function renderResult(r) {
    inputEl.value = r
}





//foatneet

const fortniteEl = document.querySelector(".fortnite-el")
const fortnite = document.querySelector(".img")

fortniteEl.addEventListener("click", () => {
    if(fortnite.style.visibility === "visible") {
        fortnite.style.visibility = "hidden"
        fortnite.style.display = "none"
    } else {
        fortnite.style.visibility = "visible"
        fortnite.style.display = "block"
    }
})