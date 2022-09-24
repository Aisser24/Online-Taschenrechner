const inputEl = document.querySelector(".input-el")
const berechnenEl = document.querySelector(".berechnen-el")
const ausgabeEl = document.querySelector(".ausgabe-el")
const inputStrompreisNeuEl = document.querySelector("#strompreisNeu-el")
const abbrechenEl = document.querySelector(".abbrechen-el")
const bestätigenEl = document.querySelector(".bestätigen-el")
const hierKlickenEl = document.querySelector(".hierKlicken-el")
const popupEl = document.querySelector(".popup")
const headerEl = document.querySelector(".header-el")
let strompreis = 30

headerEl.textContent = `Stromverbrauch in KwH (aktueller Strompreis: ${strompreis}c/KwH)`

berechnenEl.addEventListener("click", () => {
    strompreisBerechnern()
})

function strompreisBerechnern() {
    if(isNaN(inputEl.value)) {
        alert("Bitte Zahl eingeben")
        return
    }

    let strompreisBremse = strompreis - 10
    
    if(strompreisBremse > 30) {
        strompreisBremse = 30
    }

    let stromverbrauch = (inputEl.value * strompreis - strompreisBremse) / 100
    let grundgebühr = stromverbrauch * 0.0024
    let netzgebühr = stromverbrauch * 0.067
    let abgaben = stromverbrauch * 0.0012
    let steuern = (stromverbrauch + grundgebühr + netzgebühr + abgaben) * 0.2
    let strompreisFin = stromverbrauch + grundgebühr + netzgebühr + abgaben + steuern
    
    ausgabeEl.textContent = `Ihr Strompreis (inkl. Strompreisbremse): ${strompreisFin.toFixed(2)}€`
}

hierKlickenEl.addEventListener("click", () => {
    popupEl.style.visibility = "visible"
})

abbrechenEl.addEventListener("click", () => {
    popupEl.style.visibility = "hidden"
})

bestätigenEl.addEventListener("click", () => {
    changeStrompreis()
})

document.addEventListener("keydown", (event) => {
    if(event.key === 'Enter' && popupEl.style.visibility === "visible") {
        changeStrompreis()
        return
    }

    if(event.key === 'Enter') {
        strompreisBerechnern()
    }
})

function changeStrompreis() {
    if(isNaN(inputStrompreisNeuEl.value)) {
        alert("Bitte Zahl eingeben")
        return
    }
    
    let neuerStrompreis = inputStrompreisNeuEl.value
    
    strompreis = neuerStrompreis
    headerEl.textContent = `Stromverbrauch in KwH (aktueller Strompreis: ${strompreis}c/KwH)`
    popupEl.style.visibility = "hidden"
}