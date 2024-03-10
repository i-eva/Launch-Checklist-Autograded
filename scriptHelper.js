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
    if (testInput.pilotInput === "" || testInput.copilotInput === "" || testInput.fuelLevelInput === "" || testInput.cargoMassInput === "") {
        alert("Empty")  
    } else if (testInput.pilotInput) {
        let letters = /^[A-Za-z]+$/;
        if((testInput.pilotInput).match(letters) || (testInput.copilotInput).match(letters))
            {
         return true;
               }
         else
            {
            alert("message");
            return false;
         }
    }
};

 
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