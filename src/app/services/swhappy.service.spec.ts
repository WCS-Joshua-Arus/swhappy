/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwhappyService } from './swhappy.service';

describe('Service: Swhappy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwhappyService]
    });
  });

  it('should ...', inject([SwhappyService], (service: SwhappyService) => {
    expect(service).toBeTruthy();
  }));
});
