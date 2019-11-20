import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Film, Films } from '../../store/films/films.reducer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://swapi.co/api';

export interface FilmsData {
  count: number;
  next: number;
  previous: number;
  results: Array<Film>
}

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
    filmsData: Observable<FilmsData>;

    constructor(private http: HttpClient) {

    }

    getFilms(): Observable<FilmsData> {
        return this.http.get<FilmsData>(`${apiUrl}/films`);
        /*observer = {
          count: 2,
          next: null,
          previous: null,
          results: [{
              episode_id: 1,
              title: 'Testing',
              opening_crawl: 'Testing description'
          }]
        };*/
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
        return of(result as T);
      };
    }
}