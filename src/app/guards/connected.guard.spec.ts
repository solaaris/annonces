import { TestBed, async, inject } from '@angular/core/testing';

import { ConnectedGuard } from './connected.guard';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectedGuard],
      imports: [ FormsModule, RouterTestingModule],
    });
  });

  it('should ...', inject([ConnectedGuard], (guard: ConnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
