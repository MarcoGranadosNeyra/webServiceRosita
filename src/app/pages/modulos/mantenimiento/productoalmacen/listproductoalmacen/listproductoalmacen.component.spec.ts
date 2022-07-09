import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductoalmacenComponent } from './listproductoalmacen.component';

describe('ListproductoalmacenComponent', () => {
  let component: ListproductoalmacenComponent;
  let fixture: ComponentFixture<ListproductoalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductoalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductoalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
