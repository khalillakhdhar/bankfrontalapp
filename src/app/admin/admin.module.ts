import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { ComptesComponent } from './comptes/comptes.component';
import { CompteuserComponent } from './compteuser/compteuser.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionuserComponent } from './transactionuser/transactionuser.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    ComptesComponent,
    TransactionComponent,
    TransactionuserComponent,
    CompteuserComponent,
    AccueilComponent,
    UtilisateursComponent,
    AdminheaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
