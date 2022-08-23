class Propietario{
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`
    }
}
export default Propietario