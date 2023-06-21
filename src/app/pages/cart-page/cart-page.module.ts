import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { NotFoundComponent } from 'src/app/components/partials/not-found/not-found.component';


@NgModule({
  declarations: [CartPageComponent,NotFoundComponent],
  imports: [
    CommonModule,
    CartPageRoutingModule
  ]
})
export class CartPageModule { }
