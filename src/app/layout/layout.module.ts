import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/partials/header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
