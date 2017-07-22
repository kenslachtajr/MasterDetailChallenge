import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';

@Injectable()
export class AirportsService {
  model = '/airports';

  constructor(public http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all() {
    return this.http.get(this.url)
      .map(res => res.json());
  };

  create(airport) {
    return this.http.post(this.url, airport);
  };

  update(airport) {
    return this.http.put(`${this.url}/${airport.id}`, airport);
  };

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  };
}
