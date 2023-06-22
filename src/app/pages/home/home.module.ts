import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home.component';
import { HomeBrewComponent } from './home-brew/home-brew.component';
import { SearchComponent } from 'src/app/components/partials/search/search.component';
import { TagsComponent } from 'src/app/components/partials/tags/tags.component';
import { NotFoundModule } from 'src/app/components/partials/not-found/not-found.module';




@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeBrewComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NotFoundModule
  ]
})
export class HomeModule { }
