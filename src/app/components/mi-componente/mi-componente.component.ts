import { Component } from '@angular/core';
// ahora utilizaremos el decorador @component para indicarle las caracteristicas y propiedades de este componente //
@Component({
    selector: 'mi-componente',
    templateUrl:'./mi-componente.component.html'

})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola Mundo Mundial, soy el componente de practica Mi componente";
        this.comentario = "Este es mi primer componente creado en angular";
        this.year= 2021;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componente cagado !!");
        console.log(this.titulo, this.comentario, this.year);

    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}