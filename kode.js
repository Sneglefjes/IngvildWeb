// Her finner jeg knappen og overskriften, med id-verdien
// document.querySelector velger bare den første som treffer
// så om det er flere med samme id (er egentlig ikke lov, men kjører helt fint)
// så får man bare den første
const knappen = document.querySelector("#knappen")
const skriften = document.querySelector("#skriften")

// lager et array med strenger (data for flere bokstaver etterhverandre), som jeg kan hente fra når man trykker knappen
const skrifter = ["Underskrift", "Overskrift", "Høyreskrift", "Venstreskrift", "Bakskrift", "Forranskrift", "Inniskrift", "Utenforskrift"]

// Her sier vi at hver gang noen trykker på knappen, så skal vi kjøre byttSkrift-funksjonen
knappen.addEventListener("click", byttSkrift)


function byttSkrift() {
    // Her henter jeg ut det som står i overskriften nå, så jeg ikke bytter til det samme som var før
    const detSomStårNå = skriften.textContent

    // Her finner jeg bare de tekstene som ikke er verdien til detSomStårNå i skrifter-lista
    muligSkrift = skrifter.filter(skrift => skrift !== detSomStårNå)

    // Her velger jeg en tilfeldig verdi fra lista med nye tekster
    nesteSkrift = muligSkrift[Math.floor((Math.random()*muligSkrift.length))]

    // Her oppdaterer jeg overskriften med den verdien vi plukket
    skriften.textContent = nesteSkrift;
}

const knappen2 = document.querySelector("#knappen2")
knappen2.addEventListener("click", skiftBakgrunnsFarge)

function skiftBakgrunnsFarge() {
    const nyFarge = `rgb(${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random() * 255))})`
    const body = document.querySelector("body")
    body.style.backgroundColor = nyFarge
}


