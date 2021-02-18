import { Component } from '@angular/core';
import { todo }  from '../../assets/data/datos' ;
import { Category } from '../models/category.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: Category[] = todo;

  categoriaSeleccionada: Category;

  popular: Category;

  numAleatorio: number;

  constructor( ) {

    this.numAleatorio = Math.round(Math.random() * ( this.categorias.length - 1 ) * 1);
    console.log(this.numAleatorio)
    this.categoriaSeleccionada = this.categorias[this.numAleatorio];
    this.popular = this.categorias[this.numAleatorio];

  }

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };


  cambiaCategoria( c ){

    this.categoriaSeleccionada = c;

  }



}
