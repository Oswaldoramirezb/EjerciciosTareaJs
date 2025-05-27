function ejecutarEjercicio3() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar problema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #3 Sugerencia: reduce()</h3>
        <p><strong>Problema:</strong></p>
        <p><strong>SOLUCIÓN:</strong></p>
    `;

    // logica
    function calcularSumaYProducto(arregloNumeros) {
        // Usando reduce() suma
        const suma = arregloNumeros.reduce(function (acumulador, numeroActual) {
            return acumulador + numeroActual;
        }, 0); // Inicial 0

        // Usando reduce() producto
        const producto = arregloNumeros.reduce(function (acumulador, numeroActual) {
            return acumulador * numeroActual;
        }, 1); // Inicial 1

        console.log("Ejercicio 3 - Arreglo:", arregloNumeros);
        console.log("Ejercicio 3 - Suma:", suma);
        console.log("Ejercicio 3 - Producto:", producto);

        return { suma, producto };
    }

    // ejecutar
    const arregloNumeros = [1, 2, 3, 4];
    const resultado = calcularSumaYProducto(arregloNumeros);

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">
Arreglo: ${JSON.stringify(arregloNumeros)}
Suma: ${resultado.suma}
Producto: ${resultado.producto}
    `;

    contenedor.appendChild(ejercicioDiv);
} 