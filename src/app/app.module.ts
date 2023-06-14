import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { CoffeeBeansComponent } from './components/partials/header/coffee-beans/coffee-beans.component';
import { PackedCoffeeAndAccessoriesComponent } from './components/partials/header/packed-coffee-and-accessories/packed-coffee-and-accessories.component';

const components = [
  HeaderComponent
]

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, DashboardLayoutComponent, ...components, CoffeeBeansComponent, PackedCoffeeAndAccessoriesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
