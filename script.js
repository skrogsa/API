/* Metode 1 async/await */

async function fetchCatFact() {
    //Betingelse
    try {
        //HENT
        // En variabel som bruker "await" vil vente til et løfte er oppnådd for å kjøres
        // fetch() er en teknikk på lik linje som document.querySelector som henter noe data
        const response = await fetch("https://catfact.ninja/facts");

        //MODIFISER
        // En variabel som venter på at et løfte er oppnådd for å lagre dataen som ble hentet i variabelen response
        const catData = await response.json();

        for (let i = 0; i < 0; i++) {
            console.log(cat.fact);
        }
        
        //SEND
        //Viser dataen hentet til console
        console.log(catData);
// hvis console.log(data.fact); får kun opp fact og ikkje length på string, hvis kun data, får alt
   

// Mapper gjennom dataen og setter det opp som en string istedenfor et json
        const factsArray = catData.data.map((cat) => cat.fact);
        
        // HENTER ET DOCUMENT element og sender tilbake til innhold
        const div = document.querySelector("catFacts");
        div.textContent = factsArray;

} catch (error) {
        console.error("Error, error.message");
    }
}

fetchCatFact();




  /*FEILMELDING??
  if (!response.ok) {
    throw new error('Failed to fetch cat fact');
}*/



/* Metode 2 response.then() */

function catFactGenerator() {
    fetch("https://catfact.ninja/facts").then((response) => {
        response.json();
    }).then()
}