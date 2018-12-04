import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowcafehouseService {

  constructor() { }

  public getPosition(cbSuccess, cbError, cbNoGeo): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    } else {
      cbNoGeo();
    }
  }
}
