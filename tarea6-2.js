const historialSesiones = [
    { codigo: 1001, tipo: "Caminata ligera", duracionMin: 20, calorias: 110 },
    { codigo: 1015, tipo: "Movilidad y estiramiento", duracionMin: 30, calorias: 135 },
    { codigo: 1028, tipo: "Fuerza en casa", duracionMin: 45, calorias: 290 },
    { codigo: 1042, tipo: "Trote continuo", duracionMin: 50, calorias: 380 },
    { codigo: 1060, tipo: "Partido de fútbol", duracionMin: 60, calorias: 520 },
    { codigo: 1077, tipo: "Circuito funcional", duracionMin: 75, calorias: 610 },
    { codigo: 1095, tipo: "Ruta larga", duracionMin: 90, calorias: 740 }
];

function buscarSesionPorCodigo(sesionesOrdenadas, codigoBuscado) {
    let inicio = 0;
    let fin = sesionesOrdenadas.length - 1;
    let saltos = 0;

    while (inicio <= fin) {
        saltos++;

        let mitad = Math.floor((inicio + fin) / 2);
        let sesionActual = sesionesOrdenadas[mitad];

        console.log(`Rango actual: desde índice ${inicio} hasta ${fin}`);
        console.log(`El centro está en el índice [${mitad}] y su código es: ${sesionActual.codigo}`);

        if (sesionActual.codigo === codigoBuscado) {
            console.log(`--- Sesión encontrada ---`);
            console.log(`Código: ${sesionActual.codigo}`);
            console.log(`Tipo: ${sesionActual.tipo}`);
            console.log(`Duración: ${sesionActual.duracionMin} min`);
            console.log(`Calorías: ${sesionActual.calorias} kcal`);
            console.log(`Índice en el arreglo: [${mitad}]`);
            console.log(`Total de saltos: ${saltos}`);

            return { sesion: sesionActual, indice: mitad, totalSaltos: saltos };
        } else if (sesionActual.codigo < codigoBuscado) {
            console.log(`Descartamos la mitad izquierda`);
            inicio = mitad + 1;
        } else {
            console.log(`Descartamos la mitad derecha`);
            fin = mitad - 1;
        }
    }

    console.log(`No se encontró ninguna sesión con el código ${codigoBuscado}.`);
    return null;
}

// --- Ejemplos de ejecución ---

// 1. Búsqueda de una sesión existente
console.log("Búsqueda 1 (Código 1077):");
const resultado1 = buscarSesionPorCodigo(historialSesiones, 1077);

console.log("\n========================================\n");

// 2. Búsqueda de una sesión inexistente
console.log("Búsqueda 2 (Código 1050):");
const resultado2 = buscarSesionPorCodigo(historialSesiones, 1050);