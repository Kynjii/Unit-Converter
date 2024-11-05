const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")
const header = document.getElementById("header")
let inputValue = 0

btnEl.addEventListener('click', function(){
    // parses the string entered into the input field as a number and adds it to a var
    inputValue = parseFloat(inputEl.value)
    
    // calculations added to vars
    let meterLength = inputValue * 3.281
    let feetLength = inputValue / 3.281
    let literVolume = inputValue * 0.264
    let gallonVolume = inputValue / 0.264
    let kiloMass = inputValue * 2.204
    let poundMass = inputValue / 2.204
    
    // throws a browser alert if an invalid number (or no number) was added to the input field
    if (isNaN(inputValue)) {
        alert("Please use a valid number")
    } else {
        // takes the above vars and renders them into their respective containers
        lengthConversion.textContent = `${inputValue} meters = ${meterLength.toFixed(3)} feet | ${inputValue} feet = ${feetLength.toFixed(3)} meters`
        
        volumeConversion.textContent = `${inputValue} liters = ${literVolume.toFixed(3)} gallons | ${inputValue} gallons = ${gallonVolume.toFixed(3)} liters`
        
        massConversion.textContent = `${inputValue} kilos = ${kiloMass.toFixed(3)} pounds | ${inputValue} pounds = ${poundMass.toFixed(3)} kilos`
    }

})

// adds a min-max number that can be added to the input field
function limiter(input) {
   if (input.value < 0) input.value = 0;
   if (input.value > 1000000) input.value = 1000000;
}
