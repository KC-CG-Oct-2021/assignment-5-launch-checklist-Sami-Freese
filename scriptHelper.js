// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

window.addEventListener("load", function validateInput(testInput) {
   let form = document.querySelector("launchForm");
   form.addEventListener("submit", function() {
       let pilot = document.querySelector("input[name=pilotName");
       let copilot = document.querySelector("input[name=copilotName");
       let fuel = document.querySelector("input[name=fuelLevel");
       let cargo = document.querySelector("input[name=cargoMass");
       if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
           allert("All fileds are required.");
           event.preventDefault();
       }
       else if (pilot.value != String || copilot.value != String || isNaN(cargo.value) || isNaN(fuel.value)) {
            allert("Please enter valid information for each field.");
            event.preventDefault();
       }
   })
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
