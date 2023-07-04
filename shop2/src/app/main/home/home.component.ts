import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  categories = [
    {name:"Hombre",
    img:"assets/images/hombre.jpg"},
    {name:"Mujer",img:"assets/images/mujer.jpg"},
    {name:"Bolsos",img:"assets/images/bolsos.jpg"},
    {name:"Zapatos",img:"assets/images/zapatos.jpg"},
    {name:"Complementos",img:"assets/images/complementos.jpg"},
  ];
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
  constructor() { }

  ngOnInit() {}

}
