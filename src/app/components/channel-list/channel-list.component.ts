import {Component, OnInit} from '@angular/core';

import {NgRedux} from '@angular-redux/store/lib/src';

import {RssService} from '../../services/rss.service';
import {Message} from '../../models/Message';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  feedURLs: Array<any>;

  constructor(private rssService: RssService, public ngRedux: NgRedux<AppState>) {
    this.feedURLs = rssService.RSS_Feeds;
  }

  ngOnInit() {
    this.getData();
  }

  getData(URL: string = this.feedURLs[0].URL) {
    this.rssService.getData(URL).subscribe(
      responce => {
        console.log(responce);
        let currentMessages = [];
        responce.items.forEach(data => {
          currentMessages.push(new Message(data));
        });
        this.ngRedux.dispatch({type: 'SET_CHANNEL', currentMessageCollection: currentMessages});
      }
    );
  }
}
