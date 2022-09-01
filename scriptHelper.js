// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionData = document.getElementById("missionTarget")
    missionData.innerHTML =
        `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}  </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else (!isNaN(testInput))
    return "Is a Number"

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //alert("All fields are required!");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid info in each field!")
    } else {
        list.style.visibility = "visible";
        //document.getElementById("faultyItems").style.visibilty = 'visible';
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibilty = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";

    } if (cargoLevel >= 10000) {
        document.getElementById("faultyItems").style.visibilty = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";

    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";

    } if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        document.getElementById("faultyItems").style.visibilty = "hidden";
    }
}



async function myFetch() {
    let planetsReturned;


    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json() 
             
        });

    

    return planetsReturned;
}


function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);

    return planets[index];



}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
