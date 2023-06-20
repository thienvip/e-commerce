import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewDetailRoutingModule } from './brew-detail-routing.module';
import { BrewDetailComponent } from './brew-detail.component';


@NgModule({
  declarations: [BrewDetailComponent],
  imports: [
    CommonModule,
    BrewDetailRoutingModule
  ]
})
export class BrewDetailModule { }
