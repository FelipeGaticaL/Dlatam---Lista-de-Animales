/* Importamos los modulos de clase para utilizar sus métodos y funciones*/

import Mascota from "./mascota.js";
import Propietario from "./propietario.js";



/* Dejamos la función limpiar lista para ser llamada luego en el submit */
const limpiando = function () {
    document.querySelector('#propietario').value = "";
    document.querySelector('#telefono').value = "";
    document.querySelector('#direccion').value = "";
    document.querySelector('#nombreMascota').value = "";
    document.querySelector('#tipo').value = "";
    document.querySelector('#enfermedad').value = "";
}

/* Utilizando el querySelector ID#Tipo en el HTML, retornamos el tipo de animal */

const Mascota_Tipo = function () {
    let tipo = document.querySelector('#tipo').value;
    if(tipo == 'perro'){
        return tipo
    }else if(tipo == 'gato'){
        return tipo
    }else if (tipo == 'conejo') {
        return tipo
    }
        
}

/* Desplegamos los datos albergados en las clases  */
const deploy_all_data = function (mascota) {
    const resultado = document.querySelector('#resultado')
    const propietario = document.createElement('li')
    const Mascota_Dato = document.createElement('li')

    propietario.innerHTML = mascota.datosPropietario() 
    resultado.append(propietario)
    
    Mascota_Dato.innerHTML = mascota.datosMascota()
    resultado.append(Mascota_Dato)
    
}
/* A) Ingresa, selecciona todos los datos que están ingresados en el formulario y los convierte en una instancia
   B) luego ejecuta la función deploy_all_data, que inyecta en los elementos creados HTML listados (li) la función que se encuentra en la clase Propietario y Mascota
   C) Se ejecuta la función limpiar, para que los datos desaparezcan del formulario */
const ingresar = function(e) {
    e.preventDefault()
  
        let propietario = document.querySelector('#propietario').value;
        let telefono = document.querySelector('#telefono').value;
        let direccion = document.querySelector('#direccion').value;
        let nombreMascota = document.querySelector('#nombreMascota').value;
        let tipo = Mascota_Tipo();
        let enfermedad = document.querySelector('#enfermedad').value;

    const mascota = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad)
    
        deploy_all_data(mascota)
        limpiando()
}

/* Seleccionamos el formulario */
let formulario = document.querySelector('form');
/* Declaramos que al efectuarse el evento sumbit se ejecutará la función ingresar */
formulario.addEventListener('submit',ingresar);
