import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RssService {

  public RSS_Feeds: Array<any>;

  constructor(private  http: Http) {
    this.RSS_Feeds = [
      {
        URL: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdou.ua%2Ffeed%2F',
        title: 'DOU.UA RSS Feed'
      },
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
    x = x ? x : this.RSS_Feeds[0].URL;
    return this.http.get(x).map(response => {
      return response.json();
    });
  }
}
