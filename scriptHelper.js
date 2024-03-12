// Write your helper functions here!

require('cross-fetch/polyfill');

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
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";  
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     // for valid input, update the list and make it visible
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel)=== "Empty") {
        alert("Empty");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Is a Number");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number")  {
        alert("Not a number"); 
    } else {

        // declare status
        launchStatus = document.getElementById("launchStatus");
        pilotStatus = document.getElementById("pilotStatus");
        copilotStatus = document.getElementById("copilotStatus");
        fuelStatus = document.getElementById("fuelStatus");
        cargoStatus = document.getElementById("cargoStatus");
        // update pilot and copilot messages (list 1 & 2)
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        // set go status
        let go = true;
        // compare fuel input to go level and update message (list 3)
        if (fuelLevel >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        } else {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            go = false;
        }
        // compare cargo input to go level and update message (list 4)
        if (cargoLevel < 10000) {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        } else {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            go = false;
        } 
        // check go status and update list header message and color
        if (go === true) {
            launchStatus.innerHTML = `Shuttle is Ready for Launch`
            launchStatus.style.color = 'green';
        } else {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`
            launchStatus.style.color = 'red';
        } 
    // now that list is fully updated, make list visible
    list.style.visibility = 'visible';
    }
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            console.log(json);
        });
     });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    maxValue = myFetch().length;
    index = (Math.floor(Math.random()*maxValue))
    // got interrupted here
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;