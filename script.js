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
    
    
    let pilot, copilot, fuelLevel, cargoMass, cargoLevel;

    // Declare the form submit button
    let button = document.getElementById("formSubmit");
    // add event listener for when button clicked
    button.addEventListener("click", function(event) {
        list = document.getElementById("faultyItems");
        pilot = document.getElementById("pilotName");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoLevel = document.querySelector("input[name=cargoMass]");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
    });
    
});