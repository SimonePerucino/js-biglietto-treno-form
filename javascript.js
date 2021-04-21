var datiUtente = document.getElementById("nomeCognomeUtente")

var kmUtente = document.getElementById("kilometri")

var prezzoStampato = document.getElementById("prezzo-stampato")

var bottone = document.getElementById("genera");

var scontoSulBiglietto = document.getElementById("sconto-sul-biglietto")

var nomePasseggero = document.getElementById("nome-passeggero")

var carrozza = document.getElementById("carrozza")

var codiceBiglietto = document.getElementById("codice-biglietto")

bottone.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("sono entrato nella funzione")8


    var scelta = document.getElementById("scelta").value
    // console.log(scelta)

    var fasciaEta = scelta

    var nomeCognome = datiUtente.value;
    console.log(nomeCognome);

    var numeroKm = kmUtente.value;
    console.log(numeroKm);

    var prezzo = numeroKm * 0.21;




    if (fasciaEta === "minorenne") {
        console.log("sono entrato")
        Sconto = ((prezzo / 100) * 20)
        PrezzoScontato = prezzo - Sconto
        prezzoStampato.innerText = PrezzoScontato.toFixed(2) +" €"
        scontoSulBiglietto.innerText = "sconto minorenne"
    } else if (fasciaEta === "over") {
        // console.log("sono entrato nella fascia over")
        Sconto = ((prezzo / 100) * 40)
        PrezzoScontato = prezzo - Sconto
        prezzoStampato.innerText = PrezzoScontato.toFixed(2) +" €"
        scontoSulBiglietto.innerText = "sconto anziani"
    } else {
        prezzoStampato.innerText = prezzo +" €"
        scontoSulBiglietto.innerText = "tariffa standard"
    }

    nomePasseggero.innerText = nomeCognomeUtente.value

    carrozza.innerText = randomIntFromInterval(1, 16)

    codiceBiglietto.innerText = randomIntFromInterval(90000, 100000)

})





function randomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}