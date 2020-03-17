import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonService } from './common.service';

describe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', async(inject([HttpTestingController, CommonService], (httpClient: HttpTestingController, ) => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  })));
});
