import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsalidasalmacenprincipalComponent } from './listarsalidasalmacenprincipal.component';

describe('ListarsalidasalmacenprincipalComponent', () => {
  let component: ListarsalidasalmacenprincipalComponent;
  let fixture: ComponentFixture<ListarsalidasalmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsalidasalmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsalidasalmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
