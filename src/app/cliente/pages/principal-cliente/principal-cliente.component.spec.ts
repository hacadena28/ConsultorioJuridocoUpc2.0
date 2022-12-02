import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalClienteComponent } from './principal-cliente.component';

describe('PrincipalClienteComponent', () => {
  let component: PrincipalClienteComponent;
  let fixture: ComponentFixture<PrincipalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
