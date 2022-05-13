//Este sistema nos entregara que profesor tiene cada materia y cuantos alumnos estan inscriptos en ellas (son 4 materias)

const obtenerInformacion = (materia) =>{
     let materias = {
         fisica: ["Perez","Pedro","Pepito","Facu","Maria"],
         programacion: ["Guardia","Pedro","Juan","Pepito"],
         logica: ["Gonzalez","Pedro","Juan","Pepito","Facu","Maria"],
         quimica: ["Rodriguez","Pedro","Juan","Pepito","Facu","Maria"]
    }
    if (materias[materia] !== undefined){
     return [materias[materia],materia,materias];
    }else {
     return materias;
    }  
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br> 
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        } 
    }
    return `<b style='color:green'>
    ${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
    Esta cursando las clases: <b>${clasesPresentes}</b><br><br>
    `;
}


mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

document.write(cantidadDeClases("Facu"));
document.write(cantidadDeClases("Juan"));
document.write(cantidadDeClases("Pedro"));