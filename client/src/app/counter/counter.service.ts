import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CounterResponse {
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private apiUrl = '/api/counter';

  constructor(private http: HttpClient) {}

  getCounter(): Observable<CounterResponse> {
    return this.http.get<CounterResponse>(this.apiUrl);
  }

  incrementCounter(): Observable<CounterResponse> {
    return this.http.post<CounterResponse>(this.apiUrl + '/increment', {});
  }
}
