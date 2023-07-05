import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
    console.log("Hola desde el servicio cateogrias")
   }
  categories = [
    {name:"Hombre",img:"assets/images/hombre.jpg"},
    {name:"Mujer",img:"assets/images/mujer.jpg"},
    {name:"Bolsos",img:"assets/images/bolsos.jpg"},
    {name:"Zapatos",img:"assets/images/zapatos.jpg"},
    {name:"Complementos",img:"assets/images/complementos.jpg"},
  ];

  getCategories(){
    return this.categories;
  }
}
