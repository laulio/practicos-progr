const unitConversions = {
  length: {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084
  },
  weight: {
    grams: 1,
    kilograms: 0.001,
    pounds: 0.00220462,
    ounces: 0.035274
  },
  temperature: {
    celsius: 'C',
    fahrenheit: 'F',
    kelvin: 'K'
  }
};

function populateUnits() {
  const unitType = document.getElementById('unitType').value;
  const inputUnit = document.getElementById('inputUnit');
  const outputUnit = document.getElementById('outputUnit');

  inputUnit.innerHTML = '';
  outputUnit.innerHTML = '';

  for (let unit in unitConversions[unitType]) {
    const option1 = document.createElement('option');
    option1.value = unit;
    option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
    inputUnit.appendChild(option1);

    const option2 = option1.cloneNode(true);
    outputUnit.appendChild(option2);
  }
}

function convert() {
  const unitType = document.getElementById('unitType').value;
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;

  if (unitType === 'temperature') {
    convertTemperature(inputValue, inputUnit, outputUnit);
  } else {
    const inputFactor = unitConversions[unitType][inputUnit];
    const outputFactor = unitConversions[unitType][outputUnit];
    const result = (inputValue * inputFactor) / outputFactor;
    document.getElementById('outputValue').textContent = result.toFixed(2);
  }
}

function convertTemperature(value, from, to) {
  let result;
  if (from === to) {
    result = value;
  } else if (from === 'celsius') {
    result = to === 'fahrenheit' ? (value * 9/5) + 32 : value + 273.15;
  } else if (from === 'fahrenheit') {
    result = to === 'celsius' ? (value - 32) * 5/9 : (value - 32) * 5/9 + 273.15;
  } else if (from === 'kelvin') {
    result = to === 'celsius' ? value - 273.15 : (value - 273.15) * 9/5 + 32;
  }
  document.getElementById('outputValue').textContent = result.toFixed(2);
}

// Inicializa las opciones al cargar la página
window.onload = populateUnits;
