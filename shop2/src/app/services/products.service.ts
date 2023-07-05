import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      name: "product 1",
    },
    {
      name: "product 2",
    },
    {
      name: "product 3",
    },
    {
      name: "product 4",
    },
    {
      name: "product 5",
    }]
  constructor() {
    console.log("Hola desde el servicio productos")

   }
   getProducts(){
    return this.products
   }
}
