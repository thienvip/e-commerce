import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewDetailRoutingModule } from './brew-detail-routing.module';
import { BrewDetailComponent } from './brew-detail.component';
import { NotFoundModule } from 'src/app/components/partials/not-found/not-found.module';



@NgModule({
  declarations: [BrewDetailComponent],
  imports: [
    CommonModule,
    BrewDetailRoutingModule,
    NotFoundModule
  ]
})
export class BrewDetailModule { }
