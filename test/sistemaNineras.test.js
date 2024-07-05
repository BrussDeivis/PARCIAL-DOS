const assert = require('assert');
const { agregarNinera } = require('../techniques/sistemaNineras'); // Ajusta la ruta según sea necesario

describe('Pruebas Unitarias - Función agregarNinera', function() {

    // Particiones
    describe('Particiones', function() {
        it('Debe rechazar tarifa por hora menor a 5 (invalido)', function() {
            assert.throws(() => {
                agregarNinera('Juan', 3);
            }, Error);
        });

        it('Debe aceptar tarifa por hora entre 5 y 10 (valido)', function() {
            const result = agregarNinera('Maria', 8);
            assert.strictEqual(result.tarifaPorHora, 8);
        });

        it('Debe rechazar tarifa por hora mayor a 10 (invalido)', function() {
            assert.throws(() => {
                agregarNinera('Pedro', 13);
            }, Error);
        });
    });

    // Valores límites
    describe('Valores Límites', function() {
        it('Debe rechazar tarifa por hora igual a 4 (invalido)', function() {
            assert.throws(() => {
                agregarNinera('Ana', 4);
            }, Error);
        });

        it('Debe aceptar tarifa por hora igual a 5 (valido)', function() {
            const result = agregarNinera('Carlos', 5);
            assert.strictEqual(result.tarifaPorHora, 5);
        });

        it('Debe aceptar tarifa por hora igual a 6 (valido)', function() {
            const result = agregarNinera('Elena', 6);
            assert.strictEqual(result.tarifaPorHora, 6);
        });

        it('Debe aceptar tarifa por hora igual a 9 (valido)', function() {
            const result = agregarNinera('Sofia', 9);
            assert.strictEqual(result.tarifaPorHora, 9);
        });

        it('Debe aceptar tarifa por hora igual a 10 (valido)', function() {
            const result = agregarNinera('Lucas', 10);
            assert.strictEqual(result.tarifaPorHora, 10);
        });

        it('Debe rechazar tarifa por hora igual a 11 (invalido)', function() {
            assert.throws(() => {
                agregarNinera('Julia', 11);
            }, Error);
        });
    });


   
    
});
