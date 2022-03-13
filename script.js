// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       let planetSelection = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image)
    });


   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName").value;
        let copilot = document.querySelector("input[name=copilotName").value;
        let fuel = document.querySelector("input[name=fuelLevel").value;
        let cargo = document.querySelector("input[name=cargoMass").value;
        formSubmission(document, list, pilot, copilot, fuel, cargo);
   })
});