import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class GetRssService {

  public RSS_Feeds: Array<any>;

  constructor(private  http: Http) {
    // this.feedURLs = [
    //   'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fhvylya.net%2Ffeed%2F',
    //   'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fsearch.ft.com%2FopenSearch%2Fatom%2F%3FsearchTerms%3Dworld%26sortBy%3Ddate',
    //   'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.microsoft.com%2Ffeed%2F'
    // ];
    this.RSS_Feeds = [
      {
        URL: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fhvylya.net%2Ffeed%2F',
        title: 'Хвиля RSS Feed'
      },
      {
        URL: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fsearch.ft.com%2FopenSearch%2Fatom%2F%3FsearchTerms%3Dworld%26sortBy%3Ddate',
        title: 'Financial Times RSS Feed'
      },
      {
        URL: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.microsoft.com%2Ffeed%2F',
        title: 'Microsoft RSS Feed'

      }
    ];
  }

  getData(x) {
    return this.http.get(x).map(response => {
      return response.json();
    });
  }
  getDataDefault() {
    return this.http.get(this.RSS_Feeds[0].URL).map(response => {
      return response.json();
    });
  }
}
