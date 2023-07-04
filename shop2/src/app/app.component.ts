import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'main/home', icon: 'home' },
    { title: 'Men', url: 'main/men', icon: 'man' },
    { title: 'Woman', url: 'main/woman', icon: 'woman' },
    { title: 'Account', url: 'main/account', icon: 'people-circle' },
  ];
  constructor() {}
}
