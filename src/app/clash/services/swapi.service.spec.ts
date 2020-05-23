import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { SwapiService } from '@app/clash/services';
import { Collection, Person, Starship } from '@app/clash/models';
import { environment } from '@env/environment';

describe('SwapiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let swapiService: SwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    swapiService = TestBed.inject(SwapiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getPeople', () => {
    it('should return people', () => {
      const url = `${environment.apiUrl}/people/`;
      const url1 = `${url}?page=1`;
      const url2 = `${url}?page=2`;

      const people1: Person[] = [];
      const people2: Person[] = [];

      const collectionPage1: Collection<Person> = {
        count: people1.length,
        next: url2,
        previous: null,
        results: [...people1],
      };
      const collectionPage2: Collection<Person> = {
        count: people2.length,
        next: null,
        previous: url1,
        results: [...people2],
      };

      swapiService.getPeople().subscribe((response) => {
        const people = [...people1, ...people2];
        expect(response).toEqual(people);
      }, fail);

      // first request without query string (page number)
      const request1 = httpTestingController.expectOne(url);
      expect(request1.request.method).toBe('GET');
      request1.flush(collectionPage1);

      const request2 = httpTestingController.expectOne(url2);
      expect(request2.request.method).toBe('GET');
      request2.flush(collectionPage2);
    });
  });

  describe('#getStarships', () => {
    it('should return starships', () => {
      const url = `${environment.apiUrl}/starships/`;
      const url1 = `${url}?page=1`;
      const url2 = `${url}?page=2`;

      const starships1: Starship[] = [];
      const starships2: Starship[] = [];

      const collectionPage1: Collection<Starship> = {
        count: starships1.length,
        next: url2,
        previous: null,
        results: [...starships1],
      };
      const collectionPage2: Collection<Starship> = {
        count: starships2.length,
        next: null,
        previous: url1,
        results: [...starships2],
      };

      swapiService.getStarships().subscribe((response) => {
        const starships = [...starships1, ...starships2];
        expect(response).toEqual(starships);
      }, fail);

      // first request without query string (page number)
      const request1 = httpTestingController.expectOne(url);
      expect(request1.request.method).toBe('GET');
      request1.flush(collectionPage1);

      const request2 = httpTestingController.expectOne(url2);
      expect(request2.request.method).toBe('GET');
      request2.flush(collectionPage2);
    });
  });
});
