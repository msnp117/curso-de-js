let cantidadAlumnos = prompt("¿Cuántos alumnos son?");
let alumnos = [];

for (i = 0; i < cantidadAlumnos; i++){
    alumnos[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p) => {
    let presencia = prompt(nombre);
    if (presencia == "p"){
        alumnos[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnos){
        tomarAsistencia(alumnos[alumno][0], alumno);
    }
}

for (alumno in alumnos){

    let inasistencias = 30 - alumnos[alumno][1];
    document.write("Nombre: " + alumnos[alumno][0] + "<br>");
    document.write("Asistencias: " + alumnos[alumno][1] + "<br>");
    document.write("Inasistencias: " + inasistencias + "<br>");
    if (inasistencias > 18){
        document.write("Reprobado por inasistencia <br>")
    }
}