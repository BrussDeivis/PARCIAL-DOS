const assert = require('assert');
const {
    agregarNinera,
    reservarNinera,
    liberarNinera,
    obtenerNinera
} = require('../techniques/sistemaNineras'); // Ajusta la ruta según sea necesario

describe('Prueba de Transición de Estado ', function() {
    beforeEach(function() {
        // Limpiar la lista de niñeras antes de cada prueba
        nineraList = [];
    });

    it('Debe cambiar el estado de reservada a true al reservar una niñera', function() {
        agregarNinera('Anita', 8); // Agregar una niñera con tarifa válida
        const cliente = { nombre: 'Carlos', correo: 'carlos@example.com' };

        reservarNinera('Anita', cliente); // Reservar la niñera

        const ninera = obtenerNinera('Laura');
        assert.strictEqual(ninera.reservada, true);
    });

    it('Debe cambiar el estado de reservada a false al liberar una niñera reservada', function() {
      

        liberarNinera('Anita'); // Liberar la niñera

        const ninera = obtenerNinera('Anita');
        assert.strictEqual(ninera.reservada, false);
    });
});
