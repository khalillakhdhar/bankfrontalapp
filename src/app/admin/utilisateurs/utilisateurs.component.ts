import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/interfaces/utilisateur';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
utilisateur={} as Utilisateur;
identifiant :any;
utilisateurs=[] as Utilisateur[];
constructor()
{}
}
