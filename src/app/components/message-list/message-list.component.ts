import {Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  currentChannel;

  constructor(public ngRedux: NgRedux<AppState>) {
  }

  chooseMessage(currentTitle) {
    this.ngRedux.select<object>('currentMessageCollection')
      .subscribe(data => {
        this.currentChannel = data;
        let currentMessage = this.currentChannel.find(message => {
          return message.title == currentTitle;
        });
        this.ngRedux.dispatch({type: 'SET_MESSAGE', currentMessageContent: currentMessage.content});
      });
  }

  ngOnInit() {
    this.ngRedux.select<string>('currentMessageCollection')
      .subscribe(data => this.currentChannel = data);
  }

}
