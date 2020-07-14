import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquette-interactive',
  templateUrl: './maquette-interactive.component.html',
  styleUrls: ['./maquette-interactive.component.scss']
})
export class MaquetteInteractiveComponent implements OnInit {

  maquette = 'https://xd.adobe.com/view/960d1c2f-f451-4d22-4505-dc700d952616-e03c/?fullscreen&hints=off';

  constructor() { }

  ngOnInit(): void {
  }

}


