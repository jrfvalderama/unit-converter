/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const unitEl = document.querySelector("#unit-el");
const convertBtn = document.querySelector("#convert-btn");
const volumeEl = document.querySelector("#volume-el");
const lengthEl = document.querySelector("#length-el");
const massEl = document.querySelector("#mass-el");

function convert(measure, decimals = 3) {
    const units = parseFloat(unitEl.value);    
    if (measure === "length") {
        const feet = (units * 3.281).toFixed(3);
        const meters = (units / 3.281).toFixed(3);
        return [meters, feet];
    } else if (measure === "volume") {
        const gallons = (units * 0.264).toFixed(decimals);
        const liters = (units / 0.264).toFixed(decimals);
        return [liters, gallons];
    } else {
        const kilograms = (units / 2.204).toFixed(decimals);
        const pounds = (units * 2.204).toFixed(decimals);
        return [kilograms, pounds];
    }
}

convertBtn.addEventListener("click", function () {
    const units = parseFloat(unitEl.value);
    const length = convert('length');
    const volume = convert("volume");
    const mass = convert("mass");
    lengthEl.textContent = `${units} meters = ${length[0]} | ${units} feet = ${length[1]} meters`;
    volumeEl.textContent = `${units} gallons = ${volume[0]} liters | ${units} liters = ${volume[1]} gallons`;
    massEl.textContent = `${units} pounds = ${mass[0]} kilograms | ${units} kilograms = ${mass[1]} feet`;
})