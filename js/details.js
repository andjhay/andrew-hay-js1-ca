const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const shipUrl = params.get("url");

const detailsContainer = document.querySelector(".detailsContainer");
const htmlLoader = document.querySelector(".outerLoader");
const pageTitle = document.querySelector("title");

async function fetchShip() {
  try {
    const response = await fetch(shipUrl);
    const shipDetails = await response.json();

    createShipHtml(shipDetails);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = error;
    window.confirm(error);
  }
}

fetchShip();

function createShipHtml(shipDetails) {
  try {
    htmlLoader.innerHTML = "";
    pageTitle.innerHTML += `${shipDetails.name} Details`;
    detailsContainer.innerHTML += `<h1> ${shipDetails.name} </h1> <div class="aStarship"> <p> <b>Manufacturer</b> - ${shipDetails.manufacturer} 
  <br> <b>Starship Class</b> - ${shipDetails.starship_class} <br> <b>Model</b> - ${shipDetails.model} <br> <b>Passengers</b> - ${shipDetails.passengers} 
  <br> <b>Crew Capacity</b> - ${shipDetails.crew} <br> <b>Cargo Capacity</b> - ${shipDetails.cargo} <br> <b>Galactic Credits Cost</b> - ${shipDetails.cost_in_credits} 
  <br> <b>Hyper Drive Rating</b> - ${shipDetails.hyperdrive_rating}   </p> </div> <h3><a href="index.html">Back</a></h3>`;
  } catch (error) {
    console.log(error);
    htmlStarships.innerHTML = error;
    window.confirm(error);
  }
}
