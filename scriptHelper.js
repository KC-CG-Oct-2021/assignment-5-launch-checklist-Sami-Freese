// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   document.querySelector("#missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>`
}


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelValidation = validateInput(fuelLevel);
    let cargoValidation = validateInput(cargoLevel);

    list.style.visibility = "hidden"
    document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
    document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`

    if ([pilotValidation, copilotValidation, fuelValidation, cargoValidation].includes("Empty")) {
        alert("All fields are required.");
    } else if ([pilotValidation, copilotValidation].includes("Is a Number") || [fuelValidation, cargoValidation].includes("Not a Number")) {
        alert("Please enter valid information for each field.")
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.querySelector("#launchStatus").style.color = "rgb(199, 37, 78)"
        list.style.visibility = "visible"
        document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch"
        document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch"
    } else if (fuelLevel < 10000 ) {
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.querySelector("#launchStatus").style.color = "rgb(199, 37, 78)"
        list.style.visibility = "visible"
        document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch"
        document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch"
    } else if (cargoLevel > 10000) {
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.querySelector("#launchStatus").style.color = "rgb(199, 37, 78)"
        list.style.visibility = "visible"
        document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch"
        document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch"
    } else {
        document.querySelector("#launchStatus").innerHTML = "Shuttle is Ready for Launch"
        document.querySelector("#launchStatus").style.color = "rgb(65, 159, 106)"
        list.style.visibility = "visible"
        document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch"
        document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch"

    }
}

async function myFetch() {
    let planetsReturned
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
