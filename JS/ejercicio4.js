function ejecutarEjercicio4() {
    // mostrar ejercicio
    const contenedor = document.getElementById("resultados");
    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio";

    // mostrar problema
    ejercicioDiv.innerHTML = `
        <h3>Ejercicio #4 Sugerencia: filter() e includes()</h3>
        <p><strong>Problema:</strong></p>
        <p><strong>SOLUCIÓN:</strong></p>
    `;

    // logica
    let cursosEstudiante1 = ['Math', 'English', 'Programming'];
    let cursosEstudiante2 = ['Geography', 'Spanish', 'Programming'];

    function encontrarCursosComunes(cursosEst1, cursosEst2) {
        // Usando filter() e includes() para encontrar cursos comunes
        const cursosComunes = cursosEst1.filter(function (curso) {
            return cursosEst2.includes(curso);
        });

        console.log("Ejercicio 4 - Estudiante 1:", cursosEst1);
        console.log("Ejercicio 4 - Estudiante 2:", cursosEst2);
        console.log("Ejercicio 4 - Cursos comunes:", cursosComunes);

        // Imprimir cada curso común
        if (cursosComunes.length > 0) {
            console.log("Los cursos comunes son:");
            for (const curso of cursosComunes) {
                console.log("- " + curso);
            }
        } else {
            console.log("No hay cursos comunes");
        }

        return cursosComunes;
    }

    // ejecutar
    const cursosComunes = encontrarCursosComunes(cursosEstudiante1, cursosEstudiante2);

    // mostrar
    ejercicioDiv.innerHTML += `
        <div class="resultado">
Estudiante 1: ${JSON.stringify(cursosEstudiante1)}
Estudiante 2: ${JSON.stringify(cursosEstudiante2)}
Cursos comunes: ${JSON.stringify(cursosComunes)}

    `;

    contenedor.appendChild(ejercicioDiv);
} 