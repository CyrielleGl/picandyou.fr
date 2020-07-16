import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlateformeComponent } from './plateforme/plateforme.component';
import { TeamComponent } from './team/team.component';
import { SoutienComponent } from './soutien/soutien.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MaquetteInteractiveComponent } from './maquette-interactive/maquette-interactive.component';

const routes: Routes = [
  { path: 'plateforme', component: PlateformeComponent },
  { path: 'maquette-interactive', component: MaquetteInteractiveComponent },
  { path: 'team', component: TeamComponent },
  { path: 'soutien', component: SoutienComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
