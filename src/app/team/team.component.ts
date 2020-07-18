import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {

  team = [
    {
      name: 'Cyrielle',
      job: 'Développeuse web | Fondatrice de Pic&You',
      describe: `<b>Photographe passionnée et modèle amateur</b>, j\'ai enduré l\'utilisation de nombreux groupes Facebook pour trouver des collaborations, l\'organisation de celles-ci à travers mon profil personnel, le manque de possibilités pour organiser ce genre d\'activité, et le nombre de discussions perdues dans mes échanges personnels.\
      Après une <b>reconversion professionnelle en programmation web</b>, il était donc évident pour moi de créer une plateforme communautaire telle que Pic&You.`,
      photo: '../../assets/visuels/photos-team/cyrielle.png',
      display: true,
    },
    {
      name: 'Toto',
      job: 'Développeur web',
      describe: ``,
      photo: '../../assets/visuels/photos-team',
      display: false,
    },
    {
      name: 'Toto',
      job: 'Développeur web',
      describe: ``,
      photo: '../../assets/visuels/photos-team',
      display: false,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
