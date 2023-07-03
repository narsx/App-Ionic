import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public main!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  visible: boolean = false;
  ngOnInit() {
    this.main = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }
  showsearch() {
    this.visible = !this.visible
  }
}
