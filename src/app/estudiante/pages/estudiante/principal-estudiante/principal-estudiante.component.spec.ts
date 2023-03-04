import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEstudianteComponent } from './principal-estudiante.component';

describe('PrincipalEstudianteComponent', () => {
  let component: PrincipalEstudianteComponent;
  let fixture: ComponentFixture<PrincipalEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
