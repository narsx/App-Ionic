import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
 
  products:any = [];
  categories:any = [];
  constructor(
    private _productsService:ProductsService,
    private _categoriesService:CategoriesService
  ) { }

  ngOnInit() {
    this.products = this._productsService.getProducts();
    this.categories = this._categoriesService.getCategories();
  }

}
