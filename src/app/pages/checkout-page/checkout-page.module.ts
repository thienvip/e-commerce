import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CheckoutPageComponent } from './checkout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/partials/shared.module';



@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [
    CommonModule,
    CheckoutPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CheckoutPageModule { }
