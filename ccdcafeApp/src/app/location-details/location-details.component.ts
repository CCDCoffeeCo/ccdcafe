import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { switchMap } from 'rxjs/operators';
import { Location } from '../location';
import { CcdcafefDataService } from '../ccdcafedata.service';
import { AuthenticationService } from '../authentication.service';
import { ShowcafehouseService } from '../showcafehouse.service';


  @Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']

export class LocationDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private showcafehouseService: ShowcafehouseService,
    private ccdcafefDataService: CcdcafefDataService,    //Create a private local instance of the data service
    private authenticationService: AuthenticationService
  ) { }   //Pass the services into the class constructor

  public pageContent = {
    header : {
      title : '',
      strapline : ''
    },
    sidebar : ''
  };

  public locations: Location[];

  public message: string;      //Define the message property of type string

  private getLocations(position: any): void {
    this.message = 'Show all CCD Cafe House';
    this.loc8rDataService
      .getLocations()
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No locations found';
        this.locations = foundLocations;
      });
  }

  private showError(error: any): void {
    this.message = error.message;
  };

  private noGeo(): void {
    this.message = 'Showcafehouse not supported by this browser.';
  };

  private getLocations(position: any): void {     //Accept cafe house location as parameter
    this.message = 'Show all CCD Cafe House';
    const lat: number = position.coords.latitude; //Extrace the latitude and longitude from location
    const lng: number = position.coords.longitude;
    this.ccdcafeDataService
      .getLocations(lat, lng)                      //Pass the coordinates to the data service call
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No locations found';
        this.locations = foundLocations;
      });
  }

  newLocation: Location;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        let id = params.get('locationId');
        return this.loc8rDataService.getLocationById(id);
      })
      .subscribe((newLocation: Location) => {
        this.newLocation = newLocation;
        this.pageContent.header.title = newLocation.name;
        this.pageContent.sidebar = `${newLocation.name} CCD Cafe House - the Best Coffee for you.`;
      });
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }

  public formError: string;

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public onReviewSubmit():void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log(this.newReview);
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
      .then((review: Review) => {
        console.log('Review saved', review);
        this.location.reviews.unshift(review);
        this.resetAndHideReviewForm();
      })
    } else {
      console.log('Not valid');
      this.formError = 'All fields required, please try again';
    }
  }

}
