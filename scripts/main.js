//VARIEBLES
const producto1 = "Crema Corporal"
const producto2 = "Base Líquida"
const producto3 = "Delineador Lapiz"
const producto4 = "Esmalte de Uña"

const precio1 = 1500
const precio2 = 950
const precio3 = 560
const precio4 = 500

//FUNCIONES

function sacarTurno(){
    let nombre = prompt(`Ingrese su nombre completo`)
    let dia = prompt(`Ingrese el día del turno`)
    let hora = prompt(`Ingrese lo hora deseada`)
    alert(`El tuno quedó registrado a nombre de: ${nombre} \nDía del Turno: ${dia} \nHorario: ${hora}`)
    
}

function confirmarCompra(precio1, precio2, precio3, precio4){
    let confirma = prompt(`Si desea comprar todos los productos ingrese la letra Y`)
    if ((confirma = "Y") || (confirma = "y")) {
        let precioTotal = precio1 + precio2 + precio3 + precio4
        alert(`Felicitacios usted adquirió todos los productos \nEl Total a pagar es $ ${precioTotal}`)
    } else {
        alert(`Gracias por visitar la tienda`)
    }
}

//CÓDIGO
let opcion = parseInt(prompt(`Ingrese la opción deseada: \n 1) Sacar Turno \n 2) Comprar Productos \n 3) Salir`))

do {
    if (opcion === 1) {
           
        sacarTurno()
        break
        
    } else if (opcion === 2){
            
        alert(`LISTA PRODUCTOS \n1) ${producto1} = $ ${precio1} \n2) ${producto2} = $ ${precio2} \n3) ${producto3} = $ ${precio3} \n4) ${producto4} = $ ${precio4}`)
        confirmarCompra(precio1, precio2, precio3, precio4)
        break
    
    } else if (opcion === 3) {
    
        break
    } else {
        
        alert(`Ingresó una opción inválida, vuelva a intentar`)
        opcion = parseInt(prompt(`Ingrese la opción deseada: \n 1) Sacar Turno \n 2) Comprar Productos \n 3) Salir`))
    }
    
    } while (opcion != 1 || opcion != 2 || opcion != 3) 

