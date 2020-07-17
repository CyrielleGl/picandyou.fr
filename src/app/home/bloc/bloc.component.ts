import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {

  @Input()
  bloc: any;

  constructor() { }

  ngOnInit(): void {
  }

}
