import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home.component';
import { HomeBrewComponent } from './home-brew/home-brew.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeBrewComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
