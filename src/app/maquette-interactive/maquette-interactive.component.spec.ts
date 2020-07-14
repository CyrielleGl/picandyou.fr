import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquetteInteractiveComponent } from './maquette-interactive.component';

describe('MaquetteInteractiveComponent', () => {
  let component: MaquetteInteractiveComponent;
  let fixture: ComponentFixture<MaquetteInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquetteInteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquetteInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
