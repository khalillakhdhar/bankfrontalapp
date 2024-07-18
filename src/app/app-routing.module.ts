import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth.guard.service';

const routes: Routes = [
  {
    path:'',redirectTo:'auth',pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuardService],
    data: { roles: ['USER_ROLES'] },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuardService],
    data: { roles: ['ADMIN_ROLES'] },
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
