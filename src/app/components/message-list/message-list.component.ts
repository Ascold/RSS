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

  ngOnInit() {
    this.ngRedux.select<string>('currentMessagesCollection')
      .subscribe(data => this.currentChannel = data);
  }

  chooseMessage(currentTitle) {
    const currentMessage = this.currentChannel.find(message => {
      return message.title === currentTitle;
    });
    this.ngRedux.dispatch({type: 'SET_MESSAGE', currentMessage: currentMessage});
  }

}
