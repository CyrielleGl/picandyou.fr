import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bloc = [
    {
      title: 'Des connexions optimisées 🤝🏻',
      description: `Les connexions entre tous les acteurs de l'image seront optimisées grâce à un <b>espace dédié présenté comme un réel réseau social</b>. La plateforme est pensée pour <b>faciliter la gestion de ses collaborations</b> : groupes de travail, messagerie instantanée, portfolio, agenda - tout est là !`,
      link: '/plateforme',
      describelink: `👉🏻 En savoir plus sur la plateforme`
    },
    {
      title: 'En cours de développement... 💻',
      description: `La plateforme Pic&You sera accessible sur <strong>www.picandyou.com</strong> à partir de juin 2022.\
      \n«&nbsp;Juin 2022&nbsp;? C'est dans longtemps&nbsp;! Pourquoi pas avant&nbsp;?&nbsp;»\
      \n\nA l'origine, Pic&You est un projet d'école, qui permettra à l'équipe de développeurs de valider leur passage en dernière année de Master. Mais plus qu'un cas d'école, Pic&You sera une véritable start-up, dont la vocation est de <strong>faciliter la vie des créatifs sur le long terme</strong>.`,
      link: '/maquette-interactive',
      describelink: `👉🏻 Testez la maquette interactive !`
    },
    {
      title: 'Offrez-nous un café ! ☕',
      description: `Pour transformer un projet d'école en véritable start-up, il faut un certain financement, me direz-vous. En effet, car il faudra alors dépenser de l'argent pour l'environnement technique, pour la communication, etc. C'est pourquoi, si vous souhaitez <b>nous soutenir dans cette ambition</b>, vous pouvez nous offrir un café ici !`,
      link: '/soutien',
      describelink: `👉🏻 Offrir un café 🧡`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
