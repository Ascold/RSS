import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const RSS_LINK = 'http://hvylya.net/feed';
@Injectable()
export class GetRssService {

  constructor(private  http: Http) {
  }

  getData() {
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(RSS_LINK).map(response => {
      return response.json();
    });
  }
}
