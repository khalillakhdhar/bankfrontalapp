import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin.component';
import { ComptesComponent } from './comptes/comptes.component';
import { CompteuserComponent } from './compteuser/compteuser.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionuserComponent } from './transactionuser/transactionuser.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [{ path: '', component: AdminComponent,
  children:[
    {path:'accueil',component:AccueilComponent},
    {path:'profile',component:ProfileComponent},
    {path:'utilisateurs', component:UtilisateursComponent},
    {path:'transactions',component:TransactionComponent},
    {path:'comptes',component:ComptesComponent},
    // path paramétré avec id de  l'utilisateur sélectionné
    {path:'compte/:id',component:CompteuserComponent},
    {path:'transaction/:id',component:TransactionuserComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
