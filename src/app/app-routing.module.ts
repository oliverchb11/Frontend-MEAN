import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { LibrosComponent } from './components/libros/libros.component';

const routes: Routes = [
  {
    path: '',
    component: EmpleadosComponent,
  },
  {
    path: 'libros',
    component: LibrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
