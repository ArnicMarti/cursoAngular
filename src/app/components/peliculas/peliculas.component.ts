import { DatePipe } from '@angular/common';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula} from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    // antenpongo _pelicula porque siempre se le antepone _ a una propiedas vinculada a un servisio.
    private _peliculaService: PeliculaService
  ) { 
    this.titulo = "Componente Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
      this.fecha = new Date(2021, 7, 30);
   }

  ngOnInit(){ 
    console.log(this.peliculas);
    console.log("¡¡¡Componente 2 Iniciado Con Exito !!!");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(){
    console.log("*****DoCheck Lanzado Con Exito !!!! ****");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado con exito"
  }

  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
