function calcularIMC(event) {
    event.preventDefault();
  
    const altura = document.getElementById("altura").value / 100; // Convertir cm a metros
    const peso = document.getElementById("peso").value;
    const imc = peso / (altura * altura);
    const resultadoIMC = document.getElementById("resultadoIMC");
    const categoriaIMC = document.getElementById("categoriaIMC");
  
    resultadoIMC.textContent = imc.toFixed(2);
  
    let categoria = "";
    if (imc < 18.5) {
      categoria = "Bajo peso";
    } else if (imc < 24.9) {
      categoria = "Peso normal";
    } else if (imc < 29.9) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidad";
    }
  
    categoriaIMC.textContent = `Categoría: ${categoria}`;
  }
  