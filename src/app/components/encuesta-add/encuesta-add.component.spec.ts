import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaAddComponent } from './encuesta-add.component';

describe('EncuestaAddComponent', () => {
  let component: EncuestaAddComponent;
  let fixture: ComponentFixture<EncuestaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
