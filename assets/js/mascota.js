import Animal from "./animal.js";

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {return this._nombreMascota;}
  set nombreMascota(nombreMascota) {this._nombreMascota = nombreMascota;}

  get enfermedad() {return this._enfermedad;}
  set enfermedad(enfermedad) {this._enfermedad = enfermedad;}

  datosMascota() {return ` El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
  }
}

export default Mascota;
