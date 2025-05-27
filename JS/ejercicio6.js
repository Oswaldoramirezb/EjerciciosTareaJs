function ejecutarEjercicio6() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar problema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #6</h3>
        <p><strong>Problema:</strong></p>
        <p><strong>SOLUCIÓN:</strong></p>
    `;

    // logica
    function algoritmoBurbuja(arregloOriginal) {
        // crear una copia del arreglo para no modificar el original
        let arreglo = arregloOriginal.slice();
        const n = arreglo.length;

        console.log("Ejercicio 6 - Arreglo inicial:", arreglo);

        // algoritmo de burbuja con loops anidados
        for (let i = 0; i < n - 1; i++) {
            let siCambio = false;

            for (let j = 0; j < n - i - 1; j++) {
                // comparar elementos cercanos
                if (arreglo[j] > arreglo[j + 1]) {
                    // intercmbiar elementos (swap)
                    let temp = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = temp;
                 siCambio = true;
                }
            }

            // Si no hubo cambios, ya esta
            if ( siCambio) {
                break;
            }
        }

        console.log("Ejercicio 6 - Arreglo ordenado:", arreglo);
        return arreglo;
    }

    // ejecutar
    const arregloEntrada = [3, 6, 12, 5, 100, 1];
    const arregloOrdenado = algoritmoBurbuja(arregloEntrada);

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">
Arreglo inicial: ${JSON.stringify(arregloEntrada)}
Arreglo ordenado: ${JSON.stringify(arregloOrdenado)}
        </div>
    `;

    contenedor.appendChild(ejercicioDiv);
} 