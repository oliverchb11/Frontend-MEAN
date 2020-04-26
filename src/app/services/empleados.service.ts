import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Empleados } from '../models/empleados';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleadoSelect: Empleados;
  empleados: Empleados[];
  readonly URL_API = 'http://localhost:3000/api/empleados';
  constructor(private http: HttpClient) {
    this.empleadoSelect = new Empleados();
  }

  getEmpleados() {
    return this.http.get(this.URL_API);
  }
  postEmpleados(empleado: Empleados) {
    return this.http.post(this.URL_API, empleado);
  }
  uptadeEmpleados(empleado: Empleados) {
    return this.http.put(this.URL_API + `/${empleado._id}`, empleado);
  }
  deletedeEmpleados(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
