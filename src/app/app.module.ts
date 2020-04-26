import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmpleadopipePipe } from './pipes/empleadopipe.pipe';
import { LibrosComponent } from './components/libros/libros.component';
import { LibrospipePipe } from './pipes/librospipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpleadosComponent,
    EmpleadopipePipe,
    LibrosComponent,
    LibrospipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
