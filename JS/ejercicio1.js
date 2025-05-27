function ejecutarEjercicio1() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar porblema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #1 Sugerencia: join()</h3>
        <p><strong>Problema:</strong></p>
    `;

    // logica  
    let arr = ["This", "is", "a", "sentence."];

    function printOutString() {
        // join para unir 
        const resultado = arr.join(" ");
        console.log("Ejercicio 1 - Resultado:", resultado);
        return resultado;
    }

    // ejecutar
    const resultado = printOutString();

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">Arreglo original: ${JSON.stringify(arr)}
Resultado: "${resultado}"
        </div>
    `;

    contenedor.appendChild(ejercicioDiv);
} 