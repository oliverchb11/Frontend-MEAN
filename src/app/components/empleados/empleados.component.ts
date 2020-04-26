import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl,
} from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [EmpleadosService],
})
export class EmpleadosComponent implements OnInit {
  formulario: FormGroup;

  empleados: Empleados[];
  botonEditar = false;

  constructor(
    private formBuilder: FormBuilder,
    public empleadosService: EmpleadosService
  ) {}
  buscadorClientes = '';
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombreH: ['', Validators.required],
      positionH: ['', Validators.required],
      oficinaH: ['', Validators.required],
      salarioH: ['', Validators.required],
    });

    this.getEmpleado();
  }

  addEmpleado(empleadoForm: NgForm) {
    this.empleadosService.postEmpleados(empleadoForm.value).subscribe((res) => {
      this.resetForm(empleadoForm);
      this.getEmpleado();
    });
  }

  getEmpleado() {
    this.empleadosService.getEmpleados().subscribe((res) => {
      this.empleados = this.empleadosService.empleados = res as Empleados[];
      console.log(res);
    });
  }
  updateUsuario(empleado: Empleados) {
    this.empleadosService.empleadoSelect = empleado;
    this.empleadosService.uptadeEmpleados(empleado).subscribe((res) => {
      console.log('actualizado correctamente');
    });
  }

  deleteUsuario(_id: string) {
    this.empleadosService.deletedeEmpleados(_id).subscribe((res) => {
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadosService.empleadoSelect = new Empleados();
    }
  }
}
