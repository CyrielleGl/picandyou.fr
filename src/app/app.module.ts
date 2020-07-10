import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { MaquettesComponent } from './maquettes/maquettes.component';
import { TeamComponent } from './team/team.component';
import { SoutienComponent } from './soutien/soutien.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlateformeComponent,
    MaquettesComponent,
    TeamComponent,
    SoutienComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
