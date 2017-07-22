import {Component, OnInit} from '@angular/core';

import {NgRedux} from '@angular-redux/store/lib/src';

import {RssService} from '../../services/rss.service';
import {Message} from '../../models/Message';
import {AppState} from '../../store/app.state';
import {Channel} from '../../models/Channel';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  feedURLs: Array<any>;
  authorCount = 0;
  messagesCount = 0;
  currentChannel: Channel;

  constructor(private rssService: RssService, public ngRedux: NgRedux<AppState>) {
    this.feedURLs = rssService.RSS_Feeds;
  }

  ngOnInit() {
    this.getData();
  }

  getData(channel: Channel = this.feedURLs[0]) {
    this.currentChannel = channel;

    this.rssService.getData(channel.URL).subscribe(
      responce => {
        // console.log('ChannelListComponent#getData from RSSAPI:', responce);

        const messages = [];
        responce.items.forEach(data => {
          messages.push(new Message(data));
        });

        this.ngRedux.dispatch({type: 'SET_MESSAGES', messages: messages});
        this.ngRedux.dispatch({type: 'SET_MESSAGE', currentMessage: messages[0]});

        this.messagesCount = messages.length;
        this.authorCount = new Set(messages.map(x => { return x.author; })).size;
      }
    );
  }
}
