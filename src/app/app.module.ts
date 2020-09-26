import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { TeamComponent } from './team/team.component';
import { SoutienComponent } from './soutien/soutien.component';
import { ContactComponent } from './contact/contact.component';
import { MaquetteInteractiveComponent } from './maquette-interactive/maquette-interactive.component';
import { WorkerComponent } from './team/worker/worker.component';
import { BlocComponent } from './home/bloc/bloc.component';
import { VueComponent } from './plateforme/vue/vue.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    PlateformeComponent,
    TeamComponent,
    SoutienComponent,
    ContactComponent,
    MaquetteInteractiveComponent,
    WorkerComponent,
    BlocComponent,
    VueComponent,
    MentionsLegalesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [
    ContactService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

