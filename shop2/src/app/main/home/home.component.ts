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
    {name:"category 1"},
    {name:"category 2"},
    {name:"category 3"},
    {name:"category 4"},
    {name:"category 5"},
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
