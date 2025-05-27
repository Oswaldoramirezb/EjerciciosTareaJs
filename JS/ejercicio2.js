function ejecutarEjercicio2() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar problema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #2 Sugerencia: map()</h3>
        <p><strong>Problema:</strong></p>

        <p><strong>SOLUCIÓN:</strong></p>
    `;

    // logica
    function duplicarNum(arregloNum) {
        // map() para  un nuevo arreglo con valores duplicados
        const arregloDuplicado = arregloNum.map(function (numero) {
            return numero * 2;
        });

        console.log("Ejercicio 2 - Arreglo original:", arregloNum);
        console.log("Ejercicio 2 - Arreglo duplicado:", arregloDuplicado);

        return arregloDuplicado;
    }

    //ejecutar
    const arregloOriginal = [1, 2, 4, 5];
    const arregloDuplicado = duplicarNum(arregloOriginal);

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">
Arreglo original: ${JSON.stringify(arregloOriginal)}
Arreglo duplicado: ${JSON.stringify(arregloDuplicado)}
    `;

    contenedor.appendChild(ejercicioDiv);
} 