import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { ListingService } from '../listing.service';
import { Observable } from 'rxjs/Observable';
import { NguiMapComponent } from '@ngui/map';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  public listings: any;
  page: number;
  positions: any;
  pageSize: number;
  show = false;
  loc: any;
  total: Observable<number>;
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.loadTotal();
    this.loadPage()
  }

  loadTotal() {
    this.total = this.listingService.getListingsCount();
  }
  loadPage() {
    this.listingService.getListings(this.pageSize, (this.page - 1) * this.pageSize).subscribe(data => {
    this.listings = data;
    this.loc = this.listings
      console.log('listings data __________', this.listings);
      console.log('listings data __________', this.loc);
    });
  }

  pageChange(value: any) {
    this.loadPage();
  }

  showMaps() {
  this.show = true;
  }

  hide() {
    this.show = false;
  }
}
//[{"name":"Sarasota, Florida","tournament_format":"$0 ","age_cutoff":"30-Apr-17","primary_complex":"Ed Smith Stadium","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1271","startdate":"2016-11-26T06:00:00.000Z","enddate":"2016-11-27T06:00:00.000Z","agegroup":"10U, 11U, 12U, 13U, 14U, 17U","location":{"city":"Sarasota","state":" Florida","lon":"40.00","lat":"70.00"},"guaranteedGames":"Download Rules (PDF)","rules":"","id":"584df231cff6940d40ba7b23","entry_fee":"","awards":"","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Milwaukee, Wisconsin","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"The Rock","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1070","startdate":"2017-03-17T05:00:00.000Z","enddate":"2017-03-19T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U, 14U","location":{"city":"Milwaukee","state":" Wisconsin"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b24","entry_fee":"$495 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Rockford, Illinois","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Sports Core Two","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1169","startdate":"2017-03-17T05:00:00.000Z","enddate":"2017-03-19T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U, 14U","location":{"city":"Rockford","state":" Illinois"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b25","entry_fee":"$395 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Branson, Missouri","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Ballparks of America","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1178","startdate":"2017-03-24T05:00:00.000Z","enddate":"2017-03-26T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U","location":{"city":"Branson","state":" Missouri","lat":"43.00","lon":"70.00"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b26","entry_fee":"$495 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Milwaukee, Wisconsin","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"The Rock","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1071","startdate":"2017-03-24T05:00:00.000Z","enddate":"2017-03-26T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U, 14U","location":{"city":"Milwaukee","state":" Wisconsin"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b27","entry_fee":"$495 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Crystal Lake, Illinois","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Lippold Park (Boncosky Sports Complex - Synthetic Turf)","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1162","startdate":"2017-03-25T05:00:00.000Z","enddate":"2017-03-26T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U","location":{"city":"Crystal Lake","state":" Illinois"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b28","entry_fee":"$395 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Wheeling, Illinois","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Heritage Park","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1153","startdate":"2017-03-25T05:00:00.000Z","enddate":"2017-03-26T05:00:00.000Z","agegroup":"10U, 11U, 12U, 13U, 14U","location":{"city":"Wheeling","state":" Illinois"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b29","entry_fee":"$495 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Milwaukee, Wisconsin","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"The Rock","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1072","startdate":"2017-03-31T05:00:00.000Z","enddate":"2017-04-02T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U, 14U, 15U, 16U","location":{"city":"Milwaukee","state":" Wisconsin"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b2a","entry_fee":"$495 (10U, 11U, 12U, 13U, 14U, 9U)\n\t\t\t\t\t\t\t\t\t$595 (15U, 16U)","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Waukegan, Illinois","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Waukegan Sports Park","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1231","startdate":"2017-03-31T05:00:00.000Z","enddate":"2017-04-02T05:00:00.000Z","agegroup":"8U, 9U, 10U, 11U, 12U","location":{"city":"Waukegan","state":" Illinois"},"guaranteedGames":"5 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b2b","entry_fee":"$395 ","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""},{"name":"Crown Point, Indiana","tournament_format":"Pool Play Plus Playoffs","age_cutoff":"30-Apr-17","primary_complex":"Legacy Fields at the Sports Plex","url":"http://gamedayusa.com/tournaments/details.cfm?TID=1132","startdate":"2017-04-07T05:00:00.000Z","enddate":"2017-04-09T05:00:00.000Z","agegroup":"9U, 10U, 11U, 12U, 13U, 14U","location":{"city":"Crown Point","state":" Indiana"},"guaranteedGames":"3 Game Guarantee","rules":"http://www.gamedayusa.com/files/2016 Game Day USA - Baseball Rules and Policies.pdf","id":"584df231cff6940d40ba7b2c","entry_fee":"$395 (10U, 9U)\n\t\t\t\t\t\t\t\t\t$495 (11U, 12U, 13U, 14U)","awards":"Team and individual awards for the top two (2) teams per age group.","field_dimensions":"","tournament_tShirts":"","promotions":"","hotel_information":"","release_schedule":"","tournament_contact":""}]
