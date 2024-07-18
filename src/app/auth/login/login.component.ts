import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { userName: '', password: '' };
  //utilisateur ={} as Utilisateur;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.credentials).subscribe(response => {
      this.authService.saveToken(response.token);
      this.authService.saveUserRoles(response.roles);

      const roles = this.authService.getUserRoles();
      if (roles.includes('ADMIN_ROLES')) {
        this.router.navigate(['/admin']);
      } else if (roles.includes('USER_ROLES')) {
        this.router.navigate(['/user']);
      } else {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
