//const { myFetch } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {




    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    console.log(myFetch())
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination
        let selectedPlanet = pickPlanet(listedPlanets)

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl)


    })
    let ready = document.getElementById("faultyItems");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"

    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let coPilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;


        formSubmission(document, list, pilotName, coPilotName, fuelLevel, cargoMass, faultyItems, launchStatus,
            fuelStatus, cargoStatus, ready)


    })



});