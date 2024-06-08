import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/interfaces/utilisateur';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
utilisateur={} as Utilisateur;
identifiant :any;
constructor() { }

}
