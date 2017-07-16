import {Component, OnInit} from '@angular/core';
import {GetRssService} from '../../services/get-rss.service';
import {Message} from '../../models/Message';
import {NgRedux} from '@angular-redux/store/lib/src';
import {AppState} from '../../store/app.state';
import {ChannelDescription} from 'app/models/ChannelDescription';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  // channelDescription: ChannelDescription;
  feedURLs: Array<any>;

  constructor(private GetRssService: GetRssService, public ngRedux: NgRedux<AppState>) {
    this.feedURLs = GetRssService.feedURLs;
  }

  ngOnInit() {
    this.GetRssService.getDataDefault().subscribe(
      responce => {
        let currentChannel = [];
        responce.items.forEach(data => {
          currentChannel.push(new Message(data));
        });
        this.ngRedux.dispatch({type: 'SET_CHANNEL', channel: currentChannel});
        // this.channelDescription = new ChannelDescription(responce.feed);
      }
    );
  }
  getData(URL) {
    this.GetRssService.getData(URL).subscribe(
      responce => {
        console.log(responce);
        let currentChannel = [];
        responce.items.forEach(data => {
          currentChannel.push(new Message(data));
        });
        this.ngRedux.dispatch({type: 'SET_CHANNEL', channel: currentChannel});
      }
    );
  }
}
