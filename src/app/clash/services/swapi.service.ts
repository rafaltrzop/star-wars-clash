import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Collection, Person, Starship } from '@app/clash/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    const url = `${environment.apiUrl}/people/`;
    return this.getResource<Person>(url);
  }

  getStarships(): Observable<Starship[]> {
    const url = `${environment.apiUrl}/starships/`;
    return this.getResource<Starship>(url);
  }

  private getResource<T>(url: string, results: T[] = []): Observable<T[]> {
    return this.http.get<Collection<T>>(url).pipe(
      switchMap((response) => {
        const url = response.next;
        results = [...results, ...response.results];
        return url
          ? this.getResource<T>(this.useHttpsProtocol(url), results)
          : of(results);
      })
    );
  }

  private useHttpsProtocol(url: string): string {
    return url.replace('http://', 'https://');
  }
}
