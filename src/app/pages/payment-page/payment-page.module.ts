import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPageRoutingModule } from './payment-page-routing.module';
import { PaymentPageComponent } from './payment-page.component';
import { SharedModule } from 'src/app/components/partials/shared.module';


@NgModule({
  declarations: [PaymentPageComponent],
  imports: [
    CommonModule,
    PaymentPageRoutingModule,
    SharedModule
  ]
})
export class PaymentPageModule { }
