import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<any[]> {
    return this.http.get('https://randomuser.me/api?results=15')
                    .pipe(map((response: any) => response.results))

  }

}
