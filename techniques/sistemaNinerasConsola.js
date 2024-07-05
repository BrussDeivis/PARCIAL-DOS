const readline = require('readline');
const { agregarNinera, reservarNinera, liberarNinera, calcularCostoServicio } = require('./sistemaNineras');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirDatosNinera(callback) {
    rl.question('Ingrese el nombre de la niñera: ', (nombre) => {
        rl.question('Ingrese la tarifa por hora: ', (tarifa) => {
            const tarifaPorHora = parseFloat(tarifa);
            if (isNaN(tarifaPorHora) || tarifaPorHora <= 0) {
                console.log('Tarifa inválida. Intente de nuevo.');
                pedirDatosNinera(callback);
            } else {
                const ninera = agregarNinera(nombre, tarifaPorHora);
                console.log(`Niñera ${nombre} agregada con tarifa de ${tarifaPorHora} por hora.`);
                callback(ninera);
            }
        });
    });
}

function menuPrincipal() {
    console.log('\nSistema de Renta de Niñeras');
    console.log('1. Agregar Niñera');
    console.log('2. Reservar Niñera');
    console.log('3. Liberar Niñera');
    console.log('4. Calcular Costo del Servicio');
    console.log('5. Salir');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                pedirDatosNinera(() => menuPrincipal());
                break;
            case '2':
                rl.question('Ingrese el nombre de la niñera a reservar: ', (nombreNinera) => {
                    rl.question('Ingrese el nombre del cliente: ', (nombreCliente) => {
                        rl.question('Ingrese el correo del cliente: ', (correoCliente) => {
                            const cliente = { nombre: nombreCliente, correo: correoCliente };
                            try {
                                const resultado = reservarNinera(nombreNinera, cliente);
                                console.log(resultado);
                            } catch (error) {
                                console.log(error.message);
                            }
                            menuPrincipal();
                        });
                    });
                });
                break;
            case '3':
                rl.question('Ingrese el nombre de la niñera a liberar: ', (nombreNinera) => {
                    try {
                        const resultado = liberarNinera(nombreNinera);
                        console.log(resultado);
                    } catch (error) {
                        console.log(error.message);
                    }
                    menuPrincipal();
                });
                break;
            case '4':
                rl.question('Ingrese el nombre de la niñera: ', (nombreNinera) => {
                    rl.question('Ingrese el número de horas: ', (horas) => {
                        const horasServicio = parseInt(horas);
                        try {
                            const costo = calcularCostoServicio(nombreNinera, horasServicio);
                            console.log(`El costo del servicio es: ${costo}`);
                        } catch (error) {
                            console.log(error.message);
                        }
                        menuPrincipal();
                    });
                });
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuPrincipal();
                break;
        }
    });
}

menuPrincipal();
