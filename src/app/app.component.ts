import {Component} from '@angular/core';
import {GetRssService} from './services/get-rss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private GetRssService: GetRssService) {
  }

  fnc() {
    this.GetRssService.getData().subscribe(
      responce => {
        console.log(responce);
      }
    );
  }
  // fnc2() {
  //   require('rss-to-json').load('https://codek.tv/feed/', function(err, rss){
  //     console.log(rss);
  //   });
  // }
}
