import { Filter } from './filter';
import { Listing } from './listing';
import {QueryString} from './query-string';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {

  constructor(private http: HttpClient) { }

  getListings(limit: number, skip: number): Observable<Listing[]> {
    const filter: Filter = {
      limit: limit,
      skip: skip
    } as Filter;
    return this.http.get<Listing[]>(`/api/tournamentlistings?filter=${QueryString.format(filter)}`);
  }

  getListingsCount(): Observable<number> {
    return this.http.get<Count>(`/api/tournamentlistings/count`)
    .map((count) => {
      return count.count;
    })
  }
}

interface Count {
  count: number
}
