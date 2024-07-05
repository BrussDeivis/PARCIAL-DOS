const nineraList = [];

function agregarNinera(nombre, tarifaPorHora) {
    if (!nombre || !tarifaPorHora || tarifaPorHora <= 4 || tarifaPorHora > 10) {
        throw new Error('Datos de niñera inválidos. La tarifa por hora debe estar entre 1 y 10.');
    }
    const existeNinera = nineraList.some(ninera => ninera.nombre === nombre);
    if (existeNinera) {
        throw new Error('La niñera ya existe.');
    }
    const ninera = { nombre, tarifaPorHora, reservada: false, cliente: null };
    nineraList.push(ninera);
    return ninera;
}

function obtenerNinera(nombre) {
    return nineraList.find(n => n.nombre === nombre);
}

function reservarNinera(nombreNinera, cliente) {
    const ninera = obtenerNinera(nombreNinera);
    if (!ninera || !cliente) {
        throw new Error('Faltan datos de niñera o cliente');
    }
    if (ninera.reservada) {
        throw new Error('La niñera ya está reservada');
    }
    ninera.reservada = true;
    ninera.cliente = cliente;
    return `Niñera ${ninera.nombre} reservada para ${cliente.nombre}`;
}

function liberarNinera(nombreNinera) {
    const ninera = obtenerNinera(nombreNinera);
    if (!ninera || !ninera.reservada) {
        throw new Error('La niñera no está reservada');
    }
    ninera.reservada = false;
    ninera.cliente = null;
    return `Niñera ${ninera.nombre} liberada`;
}

function calcularCostoServicio(nombreNinera, horas) {
    const ninera = obtenerNinera(nombreNinera);
    if (!ninera || !ninera.reservada || horas <= 0) {
        throw new Error('No se puede calcular el costo del servicio');
    }
    return ninera.tarifaPorHora * horas;
}

module.exports = {
    agregarNinera,
    obtenerNinera,
    reservarNinera,
    liberarNinera,
    calcularCostoServicio
};
