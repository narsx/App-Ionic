import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { AccountComponent } from './account/account.component';
import { HomeModule } from './home/home.module';
import { MainPage } from './main.page';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HomeModule
  ],
  declarations: [MainPage,WomenComponent,MenComponent,AccountComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MainPageModule {}
