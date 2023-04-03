/* 
    Ejercicio 2

B) Cofla vuelve de la comisaria exausto y por lo cansado que estaba
se fue a dormir...
Al otro dia  comienzan las clases del ciclo básico de la universidad
(porque cofla quiere ser programador y se inscribio en la facultad de 
ingenieria  para estudiar desarrollo de software).
En su curso en total son 19 alumnos, pero surgió un problema que
complicó un poco a la facultad:
Se rompio el sistema de registro de asistencias y durante los proximos
30 dias no se podran hacer registros de datos de ningun tipo,
por ende las clases no podrán comenzar hasta que este solucionado.

    -Crear mini-sistema que nos permita registrar los alumnos que
    estan presentes (P) y ausentes (A) en clases.
    -Pasado los 30 dias mostrar la situacion final de todos los
    alumnos (Nro total de presentes y ausentes).
    -Se puede tener un maximo de 10% de ausencias por semestre,
    si se tienen mas aclarar que esta reprobado.
*/

let cantidadA = prompt("¿Cuantos alumnos son?");
let alumnosTotales =[];

for(i=0; i < cantidadA; i++){
    alumnosTotales[i]= [prompt("Nombre del alumno " + (i+1)),0];

}
const tomarAsistencia = (nombre,p)=>{
    let asistencia = prompt(nombre);
    if (asistencia == "p" || asistencia == "P"){
        alumnosTotales[p][1]++;
    }
}


for(i=0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: ${alumnosTotales[alumno][1]}: <br>
    ________Ausencias: ${30 - alumnosTotales[alumno][1]}
    `;
    //10% de 180 dias (6meses)
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b> <br>";
    } else {
        resultado+= "<br><br>"
    }
    document.write(resultado);
}
