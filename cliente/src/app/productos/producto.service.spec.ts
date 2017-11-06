import { TestBed, inject } from '@angular/core/testing';

import { ProductoHttpService } from './producto.http.service';

describe('ProductoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoHttpService]
    });
  });

  it('should be created', inject([ProductoHttpService], (service: ProductoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
