import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';

@Injectable()
export class FlightsService {
  model = '/flights';

  constructor(public http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all() {
    return this.http.get(this.url)
      .map(res => res.json());
  };

  create(flight) {
    return this.http.post(this.url, flight);
  };

  update(flight) {
    return this.http.put(`${this.url}/${flight.id}`, flight);
  };

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  };
}
