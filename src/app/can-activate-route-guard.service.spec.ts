import { TestBed } from '@angular/core/testing';

import { CanActivateRouteGuardService } from './can-activate-route-guard.service';

describe('CanActivateRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateRouteGuardService = TestBed.get(CanActivateRouteGuardService);
    expect(service).toBeTruthy();
  });
});
