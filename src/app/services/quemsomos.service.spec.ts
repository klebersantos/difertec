import { TestBed, inject } from '@angular/core/testing';

import { QuemSomosService } from './quemsomos.service';

describe('QuemSomosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuemSomosService]
    });
  });

  it('should be created', inject([QuemSomosService], (service: QuemSomosService) => {
    expect(service).toBeTruthy();
  }));
});
