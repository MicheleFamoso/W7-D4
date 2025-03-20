// 1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina
// Per prima cosa creo una const con il link delle img
const japanURL = "https://api.pexels.com/v1/search?query=japan";

const japan = function () {
  fetch(japanURL, {
    headers: {
      Authorization: "jGXgeZlPp3PWSgDYs6tpGtSqOdSrW3OBIG22SUI9N7SV4qgY9UrB1moH",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      const images = data.photos; // Array di immagini ricevute
      const imgElements = document.querySelectorAll(".card img"); // Seleziono tutte le immagini nelle card

      imgElements.forEach((img, index) => {
        if (images[index]) {
          img.src = images[index].src.medium;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

document.querySelector("button.btn-primary").addEventListener("click", japan);

const montainsURL = "https://api.pexels.com/v1/search?query=montains";

const montains = function () {
  fetch(montainsURL, {
    headers: {
      Authorization: "jGXgeZlPp3PWSgDYs6tpGtSqOdSrW3OBIG22SUI9N7SV4qgY9UrB1moH",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      const images = data.photos; // Array di immagini ricevute
      const imgElements = document.querySelectorAll(".card img"); // Seleziono tutte le immagini nelle card

      imgElements.forEach((img, index) => {
        if (images[index]) {
          img.src = images[index].src.medium;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

document
  .querySelector("button.btn-secondary")
  .addEventListener("click", montains);
