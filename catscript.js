/* Metode 2 response.then() */

function catFactGenerator() {
    fetch("https://catfact.ninja/facts")
    .then((response) => response.json())
    .then((catFactData) => {
      // for (let i = 0; i < 0; i++) {
      //      console.log(catFactData);
      //  }

        const mappedArray = catFactData.data.map((catData) => catData.fact);

        console.log(mappedArray);

        const moreCatFatcs = document.querySelector("#moreCatFacts");
        moreCatFacts.textContent = mappedArray.join(", ")

    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
}

catFactGenerator();


