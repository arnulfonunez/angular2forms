/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormPosterService } from './form-poster.service';

describe('FormPosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormPosterService]
    });
  });

  it('should ...', inject([FormPosterService], (service: FormPosterService) => {
    expect(service).toBeTruthy();
  }));
});
