import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { products } from '../data/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 productsData = products
  constructor() {
   }
   getProducts():Observable<Product[]>{
    return of(this.productsData)
   }

}

