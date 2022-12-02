import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCasosComponent } from './lista-casos.component';

describe('ListaCasosComponent', () => {
  let component: ListaCasosComponent;
  let fixture: ComponentFixture<ListaCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
