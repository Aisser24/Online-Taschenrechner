const binärzahlEl = document.querySelector(".binärzahl-el")
const berechnenEl = document.querySelector(".berechnen-el")
const ergebnisEl = document.querySelector(".ergebnis-el")
const dezimalzahlEl = document.querySelector(".dezimalzahl-el")
const berechnenDEl = document.querySelector(".berechnenD-el")
const ergebnisDEl = document.querySelector(".ergebnisD-el")
const copyBEl = document.querySelector(".copyB-el")
const copyDEl = document.querySelector(".copyD-el")
let ergebnisB = ""
let ergebnisD = ""

berechnenEl.addEventListener("click", () => {
    if(checkString(binärzahlEl.value) === true) {
        ergebnisEl.textContent = `Die Dezimalzahl lautet: ${berechnen(parseInt(binärzahlEl.value))}`
        ergebnisB = berechnen(parseInt(binärzahlEl.value))

    } else {
        alert("Bitte Valide Binärzahl eingeben!")
    }
})

// Berechnen

function berechnen(zahl) {
    return parseInt(zahl, 2)
}

// Schaut ob Eingabe String binär ist - gibt boolean aus

function checkString(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0" || str[i] === "1") {
        isBinary = true;
      } else {
        isBinary = false;
        return isBinary
      }
    }
    return isBinary;
}

// rechnet dezimal zu binär um

function dezimalZuBinär(zahl) {
    return zahl.toString(2)
}

berechnenDEl.addEventListener("click", () => {
    if(isNaN(parseInt(dezimalzahlEl.value)) === false) {
        ergebnisDEl.textContent = `Die Binärzahl lautet: ${dezimalZuBinär(parseInt(dezimalzahlEl.value))}`
        ergebnisD = dezimalZuBinär(parseInt(dezimalzahlEl.value))
    } else {
        alert("Bitte Valide Dezimalzahl eingeben!")
    }
})

//kopieren der zahlen

copyBEl.addEventListener("click", () => {
    navigator.clipboard.writeText(ergebnisB)
})

copyDEl.addEventListener("click", () => {
    navigator.clipboard.writeText(ergebnisD)
})