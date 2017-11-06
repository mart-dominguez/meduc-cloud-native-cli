import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoGestionComponent } from './producto-gestion.component';

describe('ProductoGestionComponent', () => {
  let component: ProductoGestionComponent;
  let fixture: ComponentFixture<ProductoGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
