import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelproductoalmacenComponent } from './delproductoalmacen.component';

describe('DelproductoalmacenComponent', () => {
  let component: DelproductoalmacenComponent;
  let fixture: ComponentFixture<DelproductoalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelproductoalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelproductoalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
