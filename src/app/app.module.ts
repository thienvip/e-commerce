import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { CoffeeBeansComponent } from './components/partials/header/coffee-beans/coffee-beans.component';
import { PackedCoffeeAndAccessoriesComponent } from './components/partials/header/packed-coffee-and-accessories/packed-coffee-and-accessories.component';
import { SlideBarComponent } from './components/partials/header/slide-bar/slide-bar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';



const components = [
  HeaderComponent,
  CoffeeBeansComponent,
  PackedCoffeeAndAccessoriesComponent,
  SlideBarComponent,
  FooterComponent,
  LoadingComponent
]

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, DashboardLayoutComponent, ...components],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut:3000,
    positionClass:'toast-bottom-right',
    newestOnTop:false
  })],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
