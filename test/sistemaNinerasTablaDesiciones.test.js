const assert = require('assert');
let nineraList = [];
const { agregarNinera, reservarNinera } = require('../techniques/sistemaNineras');

describe('Tabla de desiciones', function() {
    beforeEach(function() {
        nineraList = []; // Reiniciar la lista antes de cada prueba
    });

    it('Debería agregar una niñera correctamente si no existe previamente', function() {
        const ninera = agregarNinera('Laura', 8); 
        assert.strictEqual(nineraList.length, 0);
    });

    it('Debería lanzar un error al intentar agregar una niñera que ya existe', function() {
        assert.throws(() => agregarNinera('Laura', 8), Error);
    });

    it('Debería reservar una niñera correctamente si está disponible', function() {
        const cliente = { nombre: 'Carlos', correo: 'carlos@example.com' };

        const resultado = reservarNinera('Laura', cliente);
        assert.strictEqual(resultado, `Niñera Laura reservada para ${cliente.nombre}`);
    });

    it('Debería lanzar un error al intentar reservar una niñera que no existe', function() {
        assert.throws(() => reservarNinera('Laura', { nombre: 'Carlos', correo: 'carlos@example.com' }), Error);
    });

    it('Debería lanzar un error al intentar reservar una niñera que ya está reservada', function() {
    
        const cliente2 = { nombre: 'María', correo: 'maria@example.com' };


        assert.throws(() => reservarNinera('Laura', cliente2), Error);
    });
});
