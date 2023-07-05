import { Injectable } from '@angular/core';
import { Category, Subcategory } from '../interfaces/category';
import { categories } from '../data/categories';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
   }
   categoriesData = categories

  getCategories():Observable<Category[]>{
    return of(this.categoriesData);
  }
}
