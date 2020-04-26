import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent implements OnInit {
  librosComponentJs: Libros[];
  librosComponentSql: Libros[];
  librosComponentMsql: Libros[];
  constructor(private librosService: LibrosService) {}
  buscarLibro = '';
  ngOnInit(): void {
    this.getLibrosJsComponent();
    this.getLibrosSQLComponent();
    this.getLibrosMsqlComponent();
  }

  getLibrosJsComponent() {
    this.librosService.getLibrosJavascript().subscribe((res) => {
      this.librosComponentJs = this.librosService.librosModel = res as Libros[];
      console.log(res);
    });
  }

  getLibrosSQLComponent() {
    this.librosService.getLibrosSql().subscribe((res) => {
      this.librosComponentSql = this.librosService.librosModel = res as Libros[];
      console.log(res);
    });
  }
  getLibrosMsqlComponent() {
    this.librosService.getLibrosMsql().subscribe((res) => {
      this.librosComponentMsql = this.librosService.librosModel = res as Libros[];
      console.log(res);
    });
  }
}
