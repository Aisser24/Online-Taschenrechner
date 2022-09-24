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

    let stromverbrauch = inputEl.value
    let strompreisFin = (stromverbrauch * strompreis - strompreisBremse) / 100
    
    ausgabeEl.textContent = `Ihr Strompreis (inkl. Strompreisbremse): ${strompreisFin}€`
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