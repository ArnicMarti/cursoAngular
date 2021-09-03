//lo pimero que hacemos al crear un servicio es importar Injectable, Porque injectable me permite aplicar un decorador a la clase,
// y yo cada ves que valla a utilizar un servisio no tendré que crear el objeto como tal, Como new xxx, simple mente me permite injectar el servicio en un probaider, una propiedad de mi componente y así terlo a la mano siempre.
import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

// Ahora para definir mi servicio tengo que utilizar el decorador @Injectable.
@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula("Spiderman 4", 2018, "https://i.ytimg.com/vi/qSQTdrMSmSY/maxresdefault.jpg"),
            new Pelicula("Los vengadores Endgame", 2019, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRnH-XhsqsbAutWyTn2Iw9jYYoT0y09rL-mD0nRyq4uyXrZblEx1dZO85WIoXAQ5_sJM&usqp=CAU"),
            new Pelicula("Batman vs Superman", 2020, "https://i1.wp.com/www.hugozapata.com.ar/wp-content/uploads/2016/03/batman-vs-superman-001.jpg?resize=678%2C380"),
        ];
    }

    holaMundo() {
        return 'Hola Mundo Mundial desde el servicio de Angular'
    }

    getPeliculas() {
        return  this.peliculas;
    }
}