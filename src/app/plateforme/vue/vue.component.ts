import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss']
})
export class VueComponent implements OnInit {

  @Input()
  vue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
