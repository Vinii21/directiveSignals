import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.modulo';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { UserInfoPagesComponent } from './pages/user-info-pages/user-info-pages.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPagesComponent,
    UserInfoPagesComponent,
    PropertiesPagesComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
