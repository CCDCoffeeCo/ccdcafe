import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Location, Review } from './location';
import { User } from './user';                   //Import User class
import { AuthResponse } from './authresponse';   //Import AuthResponse class

@Injectable({
  providedIn: 'root'
})
export class CcdcafeDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLocations(lat: number, lng: number): Promise<Location[]> {
  const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}`;
  return this.http
    .get(url)
    .toPromise()
    .then(response => response.json() as Location[])
    .catch(this.handleError);
}

public getLocationById(locationId: string): Promise<Location> {
  const url: string = `${this.apiBaseUrl}/locations/${locationId}`;
  return this.http
    .get(url)
    .toPromise()
    .then(response => response as Location)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }


  public login(user: User): Promise<AuthResponse> {     //Login method returning AuthResponse Promise
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {  //Register method returning AuthResponse Promise
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {

    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http                                     //Using HTTPClient POST request Observable that convert to a Promist object
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }

  public addReviewByLocationId(locationId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('ccdcafe-token')}`
      })
    };
    return this.http
      .post(url, formData, httpOptions)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  public onReviewSubmit(): void {
    console.log(this.newReview);
  }

}
