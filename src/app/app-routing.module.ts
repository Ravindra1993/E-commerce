import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUserModule } from './components/end-user/end-user.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path:'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'end-user', loadChildren: () => import('./components/end-user/end-user.module').then(m => m.EndUserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
