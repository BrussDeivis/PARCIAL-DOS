module.exports={
    /*calculate2: function(n) {
        let contador = n;
        if (contador < 3) {
            console.log("Primera condición - if: contador es menor que 3");
            if (contador < 2) {
                console.log("Segunda condición - if dentro del primero: contador es menor que 2");
            }
        }
        if (contador === 0) {
            console.log("Tercera condición - if fuera de los anteriores: contador es igual a 0");
        }
        do {
            console.log("Ciclo do-while ejecutándose al menos una vez");
            contador++;
        } while (contador < 3);
        return contador;
    }
*/



    pruebaValorLimtite: function(password) {
        if (password.length < 8 || password.length > 10) {
            throw new Error("La contraseña debe tener entre 8 y 10 caracteres.");
        }
        if ((password.match(/[a-zA-Z]/g) || []).length < 2) {
            throw new Error("La contraseña debe tener al menos dos letras.");
        }
        if (!/[A-Z]/.test(password)) {
            throw new Error("La contraseña debe tener al menos una letra mayúscula.");
        }
        if (!/[a-z]/.test(password)) {
            throw new Error("La contraseña debe tener al menos una letra minúscula.");
        }
        if (!/[0-9]/.test(password)) {
            throw new Error("La contraseña debe tener al menos un número.");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            throw new Error("La contraseña debe tener al menos un carácter especial.");
        }
        

        return "La contraseña es válida.";
    }

    
   
// Llamar a la función pruebaRutaFlujoControl con diferentes datos de estudiantes


    //17 - 14 + 2 = 5


}
