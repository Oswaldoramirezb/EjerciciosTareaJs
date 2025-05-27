function ejecutarEjercicio5() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar problema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #5</h3>
        <p><strong>Problema:</strong></p>
        <p><strong>SOLUCIÓN:</strong></p>
    `;

    // logica
    function manipularPersonas() {
        let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
        let resultados = [];

        // 1 imprimir todas las personas
        console.log("1. Todas las personas:", personas);
        resultados.push("1. Lista inicial: " + personas.join(", "));

        // 2 remover "Dani" del arreglo
        const indiceDani = personas.indexOf("Dani");
        if (indiceDani !== -1) {
            personas.splice(indiceDani, 1);
        }
        console.log("2. Después de remover Dani:", personas);
        resultados.push("2. Después de remover Dani: " + personas.join(", "));

        // 3 remover "Juan" del arreglo
        const indiceJuan = personas.indexOf("Juan");
        if (indiceJuan !== -1) {
            personas.splice(indiceJuan, 1);
        }
        console.log("3. Después de remover Juan:", personas);
        resultados.push("3. Después de remover Juan: " + personas.join(", "));

        // 4 mover "Luis" al frente del arreglo
        const indiceLuis = personas.indexOf("Luis");
        if (indiceLuis !== -1) {
            // remover Luis de su posición actual
            const luis = personas.splice(indiceLuis, 1)[0];
            // agregarlo al inicio
            personas.unshift(luis);
        }
        console.log("4. Luis movido al frente:", personas);
        resultados.push("4. Luis movido al frente: " + personas.join(", "));

        // 5 agregar nombre al final
        personas.push("Oswaldo");
        console.log("5. Agregado Oswaldo al final:", personas);
        resultados.push("5. Agregado Oswaldo al final: " + personas.join(", "));

        // 6 iterar hasta encontrar "Maria" y salir con break
        console.log("6. Iterando hasta encontrar Maria:");
        let encontroMaria = false;
        for (const persona of personas) {
            console.log("   Revisando:", persona);
            if (persona === "Maria") {
                console.log("Encontre a maria y break");
                encontroMaria = true;
                break;
            }
        }
        resultados.push("6. Iteración hasta Maria: " + (encontroMaria ? "Encontrada" : "No encontrada"));

        // 7 encontrar el índice  "Maria"
        const indiceMaria = personas.indexOf("Maria");
        console.log("7. Índice  Maria:", indiceMaria);
        resultados.push("7. Índice  Maria: " + indiceMaria);

        console.log("Arreglo final:", personas);
        console.log("Cantidad final de personas:", personas.length);
        resultados.push("Arreglo final: " + personas.join(", "));
        resultados.push("Cantidad final: " + personas.length + " personas");

        return { personas, resultados };
    }

    // ejecutar
    const resultado = manipularPersonas();

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">${resultado.resultados.join('\n')}

Se ocupo:
- indexOf(): Encuentra la posición de un elemento
- splice(): Remueve elementos del arreglo
- unshift(): Agrega elemento al inicio
- push(): Agrega elemento al final
- break: Termina el loop cuando se encuentra maria</div>
    `;

    contenedor.appendChild(ejercicioDiv);
} 