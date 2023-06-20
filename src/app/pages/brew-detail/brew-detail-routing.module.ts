import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewDetailComponent } from './brew-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BrewDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrewDetailRoutingModule { }
