export class Empleados {
  constructor(_id = '', nombre = '', position = '', oficina = '', salario = 0) {
    this._id = _id;
    this.nombre = nombre;
    this.position = position;
    this.oficina = oficina;
    this.salario = salario;
  }
  _id: string;
  nombre: string;
  position: string;
  oficina: string;
  salario: number;
}
