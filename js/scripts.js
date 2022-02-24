//  Googled star wars api found free api resource to use for the CA https://swapi.dev/api/

const htmlStarships = document.querySelector(".starships");
const htmlLoader = document.querySelector(".outerLoader");

async function getStarships() {
  try {
    // The full list of api was divided into 4 pages so added loop and if statement to loop page numbers

    for (let i = 1; i >= 0; i++) {
      const url = `https://swapi.dev/api/starships/?page=${i}`;
      const response = await fetch(url);
      if (response.ok === true) {
        const results = await response.json();
        const starships = results.results;
        htmlLoader.innerHTML = "";
        starshipsHtml(starships);
      } else {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    htmlStarships.innerHTML = error;
    window.confirm(error);
  }

  function starshipsHtml(starships) {
    try {
      for (let i = 0; i < starships.length; i++) {
        htmlStarships.innerHTML += `<div class="aStarship"> <h3> ${starships[i].name} </h3> <b>Manufacturer</b> - ${starships[i].manufacturer} <br>
       <b>Class</b> - ${starships[i].starship_class} <br> <b>Passengers</b> - ${starships[i].passengers} 
       <a href="details.html?url=${starships[i].url}"><button>More Details</button></a> </div>`;
      }
    } catch (error) {
      console.log(error);
      htmlStarships.innerHTML = error;
      window.confirm(error);
    }
  }
}

getStarships();
