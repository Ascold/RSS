import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {defaultChannels} from '../defaultChannels';


@Injectable()
export class RssService {

  public RSS_Feeds: Array<any>;

  constructor(private  http: Http) {
    this.RSS_Feeds = defaultChannels;
  }

  getData(x) {
    x = x ? x : this.RSS_Feeds[0].URL;
    return this.http.get(x).map(response => {
      return response.json();
    });
  }

  // TODO: ERROR HANDLING
}
