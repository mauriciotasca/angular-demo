/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PresidentService } from './president.service';

describe('PresidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresidentService]
    });
  });

  it('should ...', inject([PresidentService], (service: PresidentService) => {
    expect(service).toBeTruthy();
  }));
});
