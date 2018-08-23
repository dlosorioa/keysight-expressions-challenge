import { TestBed, inject } from '@angular/core/testing';

import { OperatorsListService } from './operators-list.service';
import { expressions_list } from '../expressions';


describe('OperatorsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorsListService]
    });
  });

  it('should be created', inject([OperatorsListService], (service: OperatorsListService) => {
    expect(service).toBeTruthy();
  }));
});
