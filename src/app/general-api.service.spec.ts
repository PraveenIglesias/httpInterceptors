import { TestBed, inject } from '@angular/core/testing';

import { GeneralApiService } from './general-api.service';

describe('GeneralApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralApiService]
    });
  });

  it('should be created', inject([GeneralApiService], (service: GeneralApiService) => {
    expect(service).toBeTruthy();
  }));
});
