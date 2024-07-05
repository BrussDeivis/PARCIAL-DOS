/*const { calcularArea} = require("../techniques/basicpath4")

const assert =require('assert')


describe("Pruebas de Ruta basica Ejercicio 2", function(){
    it('debería devolver 3 para entrada 0', function() {
        assert.strictEqual(calculate2(0), 3);
    });

    it('debería devolver 3 para entrada 1', function() {
        assert.strictEqual(calculate2(1), 3);
    });

    it('debería devolver 3 para entrada 2', function() {
        assert.strictEqual(calculate2(2), 3);
    });

    it('debería devolver 4 para entrada 3', function() {
        assert.strictEqual(calculate2(3), 6);
    })








   
    it('debería devolver un mensaje de aprobación si la calificación es mayor o igual a 60', () => {
        const resultado = pruebaRutaFlujoControl('Ana', 70);
        assert.strictEqual(resultado, 'Ana aprobo con 70.\nAna no tiene premio.');
    });
    it('debería devolver un mensaje de aprobación si la calificación es mayor o igual a 60', () => {
        const resultado = pruebaRutaFlujoControl('Ana', 70);
        assert.strictEqual(resultado, 'Ana aprobo con 70.\nAna no tiene premio.');
    });

    it('debería devolver un mensaje de reprobación si la calificación es menor a 60', () => {
        const resultado = pruebaRutaFlujoControl('Juan', 45);
        assert.strictEqual(resultado, 'Juan repobo con 45.\nJuan no tiene premio.');
    });

    it('debería devolver un mensaje de elegibilidad para un premio si la calificación es mayor a 90', () => {
        const resultado = pruebaRutaFlujoControl('Carlos', 95);
        assert.strictEqual(resultado, 'Carlos aprobo con 95.\nCarlos tiene premio');
    });
   it('debería devolver un mensaje de elegibilidad para un premio si la calificación es mayor a 90', () => {
        const resultado = pruebaRutaFlujoControl('Carlos', 95);
        assert.strictEqual(resultado, 'Carlos aprobo con 95');
    });
    















    it('should calculate the area of a circle correctly', () => {
        const shape = 'circle';
        const dimensions = { radius: 5 };
        const result = calcularArea(shape, dimensions);
        assert.strictEqual(result.toFixed(3), (Math.PI * 5 * 5).toFixed(3));
    });

    it('should calculate the area of a square correctly', () => {
        const shape = 'square';
        const dimensions = { side: 4 };
        const result = calcularArea(shape, dimensions);
        assert.strictEqual(result, 16);
    });

    it('should calculate the area of a triangle correctly', () => {
        const shape = 'triangle';
        const dimensions = { base: 6, height: 3 };
        const result = calcularArea(shape, dimensions);
        assert.strictEqual(result, 0.5 * 6 * 3);
    });

    it('should throw an error for an unknown shape', () => {
        const shape = 'hexagon';
        const dimensions = {};
        assert.throws(() => calcularArea(shape, dimensions), /Unknown shape/);
    });





























    
    /*it('debería devolver false para n &lt;= 1', function() {
        assert.strictEqual(calculate2(0), true);
    });

    it('debería devolver true para el número primo 3', function() {
        assert.strictEqual(calculate2(3), true);
    });

    it('debería devolver true para el número primo 4', function() {
        assert.strictEqual(calculate2(4), false);
    });
    it('debería devolver true para el número primo 9', function() {
        assert.strictEqual(calculate2(9), false);
    });




    it('debería devolver un error si la contraseña tiene 7 caracteres', () => {
        assert.throws(() => pruebaValorLimtite('P@ssw17'), /La contraseña debe tener entre 8 y 10 caracteres./);
    });
    it('debería devolver un error si la contraseña tiene 11 caracteres', () => {
        assert.throws(() => pruebaValorLimtite('P@ssw178941'), /La contraseña debe tener entre 8 y 10 caracteres./);
    });

    it('debería devolver un mensaje de aprobación si la contraseña es válida con 8 caracteres', () => {
        const resultado = pruebaValorLimtite('Passw1@r');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    });

    it('debería devolver un mensaje de aprobación si la contraseña es válida con 10 caracteres', () => {
        const resultado = pruebaValorLimtite('Passw1@rd1');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    });

    it('debería devolver un error si la contraseña no tiene letras mayúsculas', () => {
        assert.throws(() => pruebaValorLimtite('p@ssword1'), /La contraseña debe tener al menos una letra mayúscula./);
    });

    it('debería devolver un error si la contraseña no tiene letras minúsculas', () => {
        assert.throws(() => pruebaValorLimtite('P@SSWORD1'), /La contraseña debe tener al menos una letra minúscula./);
    });

    it('debería devolver un error si la contraseña no tiene números', () => {
        assert.throws(() => pruebaValorLimtite('Password!'), /La contraseña debe tener al menos un número./);
    });

    it('debería devolver un error si la contraseña no tiene caracteres especiales', () => {
        assert.throws(() => pruebaValorLimtite('Password1'), /La contraseña debe tener al menos un carácter especial./);
    });

    /*it('debería devolver un error si la contraseña no tiene al menos dos letras', () => {
        assert.throws(() => validatePassword('P@1895!9'), /La contraseña debe tener al menos dos letras./);
    });

    it('debería devolver un error si la contraseña no tiene al menos dos letras', () => {
        assert.throws(() => pruebaValorLimtite('P@1895!9'), /La contraseña debe tener al menos dos letras./);
    });

    it('debería devolver un mensaje de aprobación si la si tiene al menos una minúscula ', () => {
        const resultado = pruebaValorLimtite('Pa78891@P');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    
    });


});

/*
@startuml

digraph foo{
 I -> L2_3_4_5
 L2_3_4_5 -> L6
 L6->L7
 L7->L8_9
 L8_9->L13
 L7->L11
 L11->L6
 L6->L13
 L13->L14
 L13->F
 L14->F
}

@enduml
 */