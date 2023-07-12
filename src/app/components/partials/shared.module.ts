import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { InputContainerComponent } from './text-input/input-container/input-container.component';
import { InputValidationComponent } from './text-input/input-container/input-validation/input-validation.component';
import { InputLabelComponent } from './text-input/input-container/input-label/input-label.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';



@NgModule({
  declarations: [TextInputComponent, InputContainerComponent, InputValidationComponent, InputLabelComponent, MapComponent, PaypalButtonComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    TextInputComponent, MapComponent, PaypalButtonComponent
  ]

})
export class SharedModule { }
