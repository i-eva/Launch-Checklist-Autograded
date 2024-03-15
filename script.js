// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    let planet;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
        listedPlanets = listedPlanets.json()
            return listedPlanets;
    }).then( function(json) {
        listedPlanets = json;
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets
        planet = pickPlanet(listedPlanets);
        // add that information to your destination.
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
        
    })

  
    
    let pilot, copilot, fuelLevel, cargoLevel;

    // Declare the form submit button
    let button = document.getElementById("formSubmit");
    // add event listener for when button clicked
    button.addEventListener("click", function(event) {
        list = document.getElementById("faultyItems");
        pilot = (document.getElementById("pilotName")).value;
        copilot = (document.querySelector("input[name=copilotName]")).value;
        fuelLevel = (document.querySelector("input[name=fuelLevel]")).value;
        cargoLevel = (document.querySelector("input[name=cargoMass]")).value;
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
    
});