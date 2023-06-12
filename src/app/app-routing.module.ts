import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';



const routes: Routes = [
// App routes
{
  path:'',
  component:DashboardLayoutComponent,
  children:[
    {
      path:'',
      redirectTo:'/home',
      pathMatch:'full'

    },
    {
      path:'home',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
  ]
},
// Auth routes
{
  path:'',
  component:AuthLayoutComponent,
  children: [
    {
      path:'',
      redirectTo:'/auth',
      pathMatch:'full'
    },
    {
      path:'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
