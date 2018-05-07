import { TestBed, inject } from '@angular/core/testing';

import { MvvService } from './mvv.service';

describe('MvvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MvvService]
    });
  });

  it('should be created', inject([MvvService], (service: MvvService) => {
    expect(service).toBeTruthy();
  }));
});
