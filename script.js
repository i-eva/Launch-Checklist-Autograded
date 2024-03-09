// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
    list = document.getElementById("faultyItems");
    let pilot, copilot, fuelLevel, cargoMass;

    // Declare the form submit button
    let button = document.getElementById("formSubmit");
    // add event listener for when button clicked
    button.addEventListener("click", function() {
        pilot = document.getElementById("pilotName");
        copilot = document.querySelector("input[name=copilotName]")
        fuelLevel = document.querySelector("input[name=fuelLevel]")
        cargoMass = document.querySelector("input[name=cargoMass]")
        console.log(pilot.value, copilot.value,fuelLevel.value, cargoMass.value);
    });

});