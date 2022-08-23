import Propietario from "./propietario.js";

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}

export default Animal;
