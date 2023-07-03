import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { HomeComponent } from './home/home.component';
import { MainPage } from './main.page';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage,
    HomeComponent,WomenComponent,MenComponent,AccountComponent]
})
export class MainPageModule {}
