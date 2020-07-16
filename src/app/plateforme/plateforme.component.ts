import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plateforme',
  templateUrl: './plateforme.component.html',
  styleUrls: ['./plateforme.component.scss']
})
export class PlateformeComponent implements OnInit {

  vues = [
    {
      title: 'Inscription / Connexion',
      description: `Après avoir cliqué sur les trois flèches du bas, vous atterissez sur la <strong>page d'inscription / connexion</strong>.\
      \nVous pouvez entrer vos informations pour vous inscrire, ou bien vous connecter avec votre identifiant et mot de passe. <strong>En cas d'oubli du mot de passe</strong>, il faudra suivre la procédure indiquée dans "Mot de passe oublié ?"`,
      image: '../../assets/visuels/maquette/inscription.png'
    },
    {
      title: 'Home',
      description: `Vous voici sur la Home.\
      \n<strong>Votre messagerie se trouve sur la gauche</strong>, divisée en 2 sections : les messages individuels, et les messages de groupe.\
      Votre fil d'actualité se trouve au centre, et <strong>une barre de recherche est disponible</strong> dans le header.\
      \n<strong>Votre profil est accessible en haut à droite</strong>, lorsque vous cliquez sur votre prénom situé à droite de votre photo de profil. Juste en-dessous, un bouton permet de vous déconnecter.\
      \n\nLa partie droite de la plateforme permet d'accéder aux <strong>fonctionnalités mères de la communauté</strong>&nbsp;: un moteur de recherche puissant, avec de nombreux filtres disponibles, votre répertoire de contacts, votre portfolio, vos groupes de travail, vos posts et votre agenda. Quelques publicités pourront être visibles au début du lancement de l'application, mais sont vouées à disparaître.`,
      image: '../../assets/visuels/maquette/home.png'
    },
    {
      title: 'Profil',
      description: `Visitons maintenant le profil.\
      \n<strong>Vos informations principales</strong> (location, déplacements, date de naissance, genre, activités, spécialisations, site web) <b>sont visibles sous votre photo de couverture</b>, dans un espace dédié. La modification de ces informations se fait en cliquant sur le stylo présent à droite de chacune d'entre elles.\
      \n\nSous cet espace, <strong>quatre onglets permettent à vos contacts de mieux vous connaître</strong> : votre portfolio, vos groupes de travail, vos posts, vos contacts.\
      <strong>Vous pouvez choisir la visibilité</strong> de chacun de ces onglets (public, amis, privé).\
      <strong>Pour modifier ces onglets</strong>, rendez-vous sur la barre de navigation tout à droite de la plateforme.`,
      image: '../../assets/visuels/maquette/profil.png'
    },
    {
      title: '',
      description: `Les boutons <b>Paramètres</b> et <b>Aide</b> sont présents dans le footer, en bas de page, respectivement à gauche et à droite.`,
      image: ''
    },
    /*Présenter les 6 derniers onglets / Right Nav*/
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
