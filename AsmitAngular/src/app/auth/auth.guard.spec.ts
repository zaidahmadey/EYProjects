import { TestBed, async, inject } from '@angular/core/testing';

import { [guard]Guard } from './[guard].guard';

describe('[guard]Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [[guard]Guard]
    });
  });

  it('should ...', inject([[guard]Guard], (guard: [guard]Guard) => {
    expect(guard).toBeTruthy();
  }));
});
