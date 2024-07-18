import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../shared/interfaces/utilisateur';
import { AuthService } from '../../shared/services/auth.service';
import { UtilisateurService } from '../../shared/services/utilisateur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user= {} as Utilisateur;

  constructor(private utilisateurService:UtilisateurService,private authService: AuthService, private router: Router) {
  //  this.user.comptes=[];
   // this.user.profile={} as Profile;
   localStorage.clear();
    this.user.etat="actif";
    this.user.roles="USER_ROLES"
  }

  onSubmit() {
    this.utilisateurService.createUtilisateur(this.user).subscribe(response => {
     // this.authService.saveToken(response.token);
      this.router.navigate(['/auth/login']);
    });
  }
}
